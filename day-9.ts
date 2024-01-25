type Reverse<T extends string> = T extends `${infer Head}${infer Rest}`
  ? `${Reverse<Rest>}${Head}`
  : T;
