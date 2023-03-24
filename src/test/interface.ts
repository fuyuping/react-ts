export interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}

export interface ILength {
    length: number;
}

export interface IPerson {
    name: string,
    age: number
}
