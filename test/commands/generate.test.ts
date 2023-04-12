import {expect, test} from '@oclif/test'
import fs from 'node:fs'
import path from 'node:path'

describe('generate', () => {
  test
  .stdout()
  .command(['generate', '-f', 'test/fixtures/schema.json', '-o', 'test/fixtures/generated.ts'])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .it('generate from schema file', ctx => {
    const generated = fs.readFileSync(path.resolve(process.cwd(), 'test/fixtures/generated.ts'), 'utf-8')
    expect(generated).to.contain('export interface TestServerRpcMethods {')
    expect(generated).to.contain('hi(person: { name: string, bithday: Date }): Promise<string>')
  })
})
