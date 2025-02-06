export function reduce<T>(
  this: T[],
  callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
): T;
export function reduce<T>(
  this: T[],
  callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
  initialValue: T,
): T;
export function reduce<T, U>(
  this: T[],
  callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue: U,
): U;
export function reduce<T, U>(
  this: T[],
  callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
  initialValue?: U,
): U {
  // your implementation
}
