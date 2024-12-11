// hover this
let a: number = 4;
let b = 3; // type inference, so typescript has the ability to infer the type of a variable based on the value assigned to it

let c: number = 5; // the data type should always be lowercase, if it's not our own type

a = 10; // no error
a = 'hello'; // error

b = 10; // no error
b = 'hello'; // error

let d: string;
d = 'hello';

// const produces literal types
// A literal type in TypeScript is a type that represents a specific value, like a single string, number, or boolean, rather than a range of possible values. It restricts a variable to exactly one predefined value, making the code more precise and predictable.
const x = 4;
const y: number = 4;
const z: 'hello' = 'hello';
