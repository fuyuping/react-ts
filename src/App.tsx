import React from "react";
import Router from "./router";
import TestDecorator from "./test/decorator";

// class AnimalInfo {
//   public age = 10;
//   public setAge(age: number) {
//     this.age = age;
//   }
// }
// interface animal extends AnimalInfo {
//   getFood(): string;
// }

// function enumerable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log('target', target)
//     console.log('propertyKey', propertyKey)
//     console.log('descriptor', descriptor)
//       descriptor.enumerable = value;
//   };
// }

function App() {
  // interface IPerson<T = string> {
  //   name: T;
  // }
  // // const people: IPerson = { age: '111' };
  // const people1: IPerson<number> = { name: 100 };
  // }

  // function getTree<T>(value: T) {
  //   return value;
  // }

  // type name = [number, ...string[]];

  // const name2:name  = [1,'2','3','4','5']

  // interface Identities<V, M> {
  //   value?: V,
  //   message?: M
  // }
  // interface ILength {
  //   length: number;
  // }
  // function identity<T extends ILength>(arg: T): number {
  //   return arg.length;
  // }

  // identity('1')
  // identity({
  //   value: 1,
  //   length: 2
  // })

  return (
    <div className="App">
      <TestDecorator />
      <Router></Router>
    </div>
  );
}

export default App;
