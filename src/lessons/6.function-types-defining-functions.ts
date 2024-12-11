function printName(name: string, name2: string) {
  console.log(name, name2);
}

function sum(a: number, b: number): number {
  return a + b;
}

// so actually typescript can do auto infer on the return type
// we can just do this
function sum(a: number, b: number) {
  return a + b;
}

const c = sum(1, 2);

type Person = {
  name: string;
};

function printPerson(person: Person) {
  console.log(person.name);
}

// object literal may only specify known properties, and 'age' does not exist in type 'Person'
printPerson({ name: 'John', age: 30 });

// but if it's not an object literal, it's fine
const person = { name: 'John', age: 30, isProgrammer: true };
printPerson(person);
