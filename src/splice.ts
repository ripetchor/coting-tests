export function splice<T>(this: T[], start: number, deleteCount?: number): T[];
export function splice<T>(this: T[], start: number, deleteCount: number, ...items: T[]): T[];
export function splice<T>(this: T[], start: number, deleteCount: number = 0, ...items: T[]): T[] {
  // your implementation
}
