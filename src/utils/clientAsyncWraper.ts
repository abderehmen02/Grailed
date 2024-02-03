
type AsyncFunction<Args extends any[] = any[], Return = any> = (...args: Args) => Promise<Return  >;

export function asyncWrapper<Args extends any[], Return>(
  fn: AsyncFunction<Args, Return  >
): (...args: Args) => Promise<Return |  void | {error : any} > {
  return async function (...args: Args) {
    try {
      const result = await fn(...args);
      return result;
    } catch (error : any ) {
      // You can handle or log errors here if needed
       console.error(error)    
       return ({error})
      }
  };
}
