// default value turn the parameter to optional
// hover the function to see the type of the parameter
// name parameter is inferred as string
function printNameAndAge(name = 'John', options?: { debugMode: boolean }) {
  console.log(name, options);
}

printNameAndAge(); // no error

// this is more readable
function printNameAndAge2(
  name: string = 'John',
  options?: { debugMode: boolean }
) {
  console.log(name, options);
}

// we are going to create Options type
type Options = { debugMode: boolean };

//  the default value of Options is an empty object which doesn't have debugMode property, so when the function is called without the second argument, it will give empty object as the value of the second parameter
// because the debugMode in the Options type is required, it will give an error
function printNameAndAge3(name: string, { debugMode }: Options = {}) {
  console.log(name, debugMode);
}

printNameAndAge3('John');

// we can just make the debugMode property optional by adding a question mark
type Options = { debugMode?: boolean };

function printNameAndAge4(name: string, { debugMode = false }: Options = {}) {
  console.log(name, debugMode);
}

printNameAndAge4('John');

// : is reserved as alias so we can't add data type while destructuring, so we can't do this:
function printNameAndAge5(
  name: string,
  { debugMode: boolean, indentLevel: number } = {}
) {
  console.log(name, debugMode, indentLevel);
}

// so we have to do this
function printNameAndAge6(
  name: string,
  { debugMode, indentLevel }: { debugMode?: boolean; indentLevel?: number } = {}
) {
  console.log(name, debugMode, indentLevel);
}

// it's even greater if we extract the type
type Option = { debugMode?: boolean; indentLevel?: number };

function printNameAndAge7(
  name: string,
  { debugMode, indentLevel }: Option = {}
) {
  console.log(name, debugMode, indentLevel);
}

// we can also use type for function expression
type PrintNameAndAgeFunc = (
  name: string,
  options?: { debugMode?: boolean; indentLevel?: number }
) => void;

const printNameAndAge8: PrintNameAndAgeFunc = function (
  name,
  { debugMode, indentLevel } = {}
) {
  console.log(name, debugMode, indentLevel);
};

// we can also use type for arrow function
const printNameAndAge9: PrintNameAndAgeFunc = (
  name,
  { debugMode, indentLevel } = {}
) => {
  console.log(name, debugMode, indentLevel);
};

// accept any number of arguments that have the same type
function sum(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

sum(1, 2, 3, 4, 5); // no error
sum(1, 2, 3, 4, 'hello'); // error
