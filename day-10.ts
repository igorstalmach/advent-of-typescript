type StreetSuffixTester<T, U> = T extends `${string}${string & U}`
  ? true
  : false;
