export interface TestServerRpcMethods {
/**
 * say hi
 */
  hi(person: { name: string, bithday: Date }): Promise<string>

/**
 * sum two numbers
 */
  sum(a: number, b: number): Promise<number>

/**
 * get all todos
 */
  getTodos(): Promise<{ id: number, text: string, completed: boolean }[]>
}