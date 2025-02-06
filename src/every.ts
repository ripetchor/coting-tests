export function every<T, S extends T>(
  this: T[],
  predicate: (value: T, index: number, array: T[]) => value is S,
  thisArg?: any,
): this is S[];
export function every<T>(
  this: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any,
): boolean;
export function every<T>(
  this: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  thisArg?: any,
): boolean {
  // your implementation
}
