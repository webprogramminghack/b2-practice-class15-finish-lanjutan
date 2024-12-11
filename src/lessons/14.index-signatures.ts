// We can't add property dynamically to an object in TypeScript.
// We can do that in JavaScript but not in TypeScript.
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: 'John',
  age: 30,
};

// Error: Property 'isAdmin' does not exist on type 'User'.
user.isAdmin = true;

// // We can do that by using index signatures. Index signatures allow us to add dynamic properties to an object
type UserWithDynamicProperties = {
  name: string;
  age: number;
  [key: string]: any; // Index Signature
};

const user2: UserWithDynamicProperties = {
  name: 'John',
  age: 30,
};

user2.isAdmin = true; // No error
user2['role'] = 'admin'; // No error

// the type of the property must be the same as the type of the index signature
interface NumberDictionary {
  name: string; // error
  length: number; // ok
  [index: string]: number;
}

// We can also use index signatures to create dynamic arrays
interface StringArray {
  [index: number]: string; // Membuat array dinamis dengan nilai string
}

const myArray: StringArray = ['hello', 'world'];

console.log(myArray[0]); // Output: hello
myArray[1] = 'Hello'; // Tidak ada error
myArray[2] = 1; // Error: Type '1' is not assignable to type 'string'

// We can also use index signatures to create function
interface StringManipulator {
  (input: string): string; // Fungsi dengan input dan output berupa string
  [key: string]: any; // Index signature untuk properti tambahan
}

const toUpperCase: StringManipulator = (input: string) => input.toUpperCase();
toUpperCase.description = 'Turns the text into uppercase';
