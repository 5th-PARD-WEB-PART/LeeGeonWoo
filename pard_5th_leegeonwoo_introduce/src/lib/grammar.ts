export interface Person {
  name: string;
  studentId: number;
  live: string;
}
export interface User {
  content: string;
}

export type Age = number;

export function wrapValue<T>(item: T): { value: T } {
  return { value: item };
}
