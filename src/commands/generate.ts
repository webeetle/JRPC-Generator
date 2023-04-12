import {Command, Flags} from '@oclif/core'
import axios from 'axios'
import fs from 'node:fs'
import path from 'node:path'
import {RpcServer} from '../interfaces/generate.interface'

export default class Generate extends Command {
  static description = 'generate a typescript interface for JRPC-Client from a JRPC Schema'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    file: Flags.string({char: 'f', description: 'schema file'}),
    url: Flags.string({char: 'u', description: 'schema url'}),
    output: Flags.string({char: 'o', description: 'output file'}),
  }

  static args = {}

  // eslint-disable-next-line unicorn/better-regex, no-useless-escape
  static urlRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g

  private isJsonFile(file: string): boolean {
    return file.endsWith('.json')
  }

  private isTypeScriptFile(file: string): boolean {
    return file.endsWith('.ts')
  }

  private toCamelCase(str: string): string {
    return str.replace(/-\w/g, m => m[1].toUpperCase())
  }

  private generateRpcInterface(json: string): string {
    let rpcServer: RpcServer
    try {
      rpcServer = JSON.parse(json)
    } catch {
      this.error('Schema must be a valid json')
    }

    const interfaces: string[] = []

    for (const method of rpcServer.methods) {
      const methodName = this.toCamelCase(method.name)
      const params = method.params.map(p => `${p.name}: ${this.generateSchemaInterface(p.schema)}`).join(', ')

      const resultType = this.generateSchemaInterface(method.result.schema)

      const methodSignature = `(${params}): Promise<${resultType}>`

      const methodDescription = method.description ? `/**\n * ${method.description}\n */\n` : ''

      const methodInterface = `${methodDescription}  ${methodName}${methodSignature}\n`

      interfaces.push(methodInterface)
    }

    const result = `export interface ${this.toCamelCase(rpcServer.info.name)}RpcMethods {\n${interfaces.join('\n')}}`

    return result
  }

  private generateSchemaInterface(schema: any): string {
    const typeMap: Record<string, string> = {
      string: 'string',
      number: 'number',
      boolean: 'boolean',
      null: 'null',
      array: 'any[]',
      object: 'Record<string, any>',
      'date-time': 'Date',
      // ...
    }

    const type = typeMap[schema.type]

    if (schema.type === 'object') {
      const props = Object.keys(schema.properties)
      .map(k => `${k}: ${this.generateSchemaInterface(schema.properties[k])}`)
      .join(', ')
      return `{ ${props} }`
      // eslint-disable-next-line no-else-return
    } else if (schema.type === 'array') {
      const itemSchema = this.generateSchemaInterface(schema.items)
      return `${itemSchema}[]`
    } else {
      return type ?? schema.type
    }
  }

  public async run(): Promise<void> {
    const {flags} = await this.parse(Generate)

    if (!flags.file && !flags.url) {
      this.error('Either file or url must be specified')
    }

    if (flags.file && !this.isJsonFile(flags.file!)) {
      this.error('File must be a json file')
    }

    // eslint-disable-next-line unicorn/prefer-regexp-test
    if (flags.url && !flags.url!.match(Generate.urlRegex)) {
      this.error('Url must be a valid url')
    }

    if (!flags.output) {
      this.error('Output must be specified')
    }

    if (!this.isTypeScriptFile(flags.output!)) {
      this.error('Output must be a typescript file')
    }

    let schema: string
    if (flags.file) {
      schema = fs.readFileSync(path.resolve(process.cwd(), flags.file), 'utf-8')
    } else {
      // fetch schema from url
      const response = await axios.get(flags.url!)
      schema = response.data
    }

    const rpcInterface = this.generateRpcInterface(schema)
    fs.writeFileSync(path.resolve(process.cwd(), flags.output), rpcInterface)
  }
}
