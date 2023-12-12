type SantasList<T extends ReadonlyArray<any>, U extends ReadonlyArray<any>> = [
  ...T,
  ...U
];
