// Now we are finally to probably the most important part of TypeScript which is how do we type objects.

// the person will have a name propery of type string and an age property of type number
const person = { name: 'John', age: 30 };
person.isProgrammer = true; // error

// we can also do the above like this:
const person2: { name: string; age: number } = { name: 'John', age: 30 };

// this will cause an error because we are missing the isProgrammer property
const person3: { name: string; age: number; isProgrammer: boolean } = {
  name: 'John',
  age: 30,
};

// we can make the isProgrammer property optional by adding a question mark
const person4: { name: string; age: number; isProgrammer?: boolean } = {
  name: 'John',
  age: 30,
};
person4.isProgrammer = true; // no error
