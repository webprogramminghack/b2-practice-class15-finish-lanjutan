// type Person = {
//   name: string;
//   age: number;
//   isProgrammer?: boolean;
//   friends: string[];
//   address: {
//     street: string;
//   };
// };

// we can also use interface
// a very few minor differences between type and interface
// the interface doesn't use equal sign
// downsides:
// interfaces can only be used for objects

interface Person {
  name: string;
  age: number;
  isProgrammer?: boolean;
  friends: string[];
  address: {
    street: string;
  };
}

interface Num = number // this doesn't work

// const person1: { name: string; age: number; isProgrammer?: boolean } = {
//   name: 'John',
//   age: 30,
// };

// const person2: { name: string; age: number; isProgrammer?: boolean } = {
//   name: 'Sally',
//   age: 28,
// };

// it becomes like this, so it's not redundant
const person1: Person = {
  name: 'John',
  age: 30,
  friends: [],
  address: {
    street: '123 Main St',
  },
};

const person2: Person = {
  name: 'Sally',
  age: 28,
  friends: [],
  address: {
    street: '456 Elm St',
  },
};

// type is better than interface because it can be used for more than just objects
// type is more flexible than interface
// there are a lot of things that interface can't do that type can do
// however, if you want some inheritance, you can use interface