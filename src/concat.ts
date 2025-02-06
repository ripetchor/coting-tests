export function concat<T>(...items: ConcatArray<T>[]): T[];
export function concat<T>(...items: (T | ConcatArray<T>)[]): T[];
export function concat<T>(...items: (T | T[])[]): T[] {
  // your implementation
}
