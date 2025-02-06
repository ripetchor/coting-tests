export function find<T, S extends T>(
  predicate: (value: T, index: number, obj: T[]) => value is S,
  thisArg?: any,
): S | undefined;
export function find<T>(
  predicate: (value: T, index: number, obj: T[]) => unknown,
  thisArg?: any,
): T | undefined {
  // your implementation
}
