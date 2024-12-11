// function logging(text) {
//   console.log(text);
// }

// logging('Hello World');

// let name: string = null;

// console.log(name);

// function f() {
//   // disable typescript for next line
//   // @ts-ignore
//   console.log(this.name);
// }

// f();

console.log('hello');

// const num = 2;

// example of no unuse parameter
// function greet(name: string, age: number): string {
//   return `Hello, ${name}!`; // The 'age' parameter is not used anywhere.
// }

// greet('John', 30);

// function getNumberDescription(num: number): string {
//   switch (num) {
//     case 1:
//       return 'One';
//     case 2: // No break or return statement here
//     case 3:
//       return 'Three';
//     default:
//       return 'Other';
//   }
// }

// getNumberDescription(2);

const evenOrOdd = (value: number): void => {
  switch (value % 2) {
    case 0:
      console.log('Even');
    // Fallthrough without break or return
    case 1:
      console.log('Odd');
      break;
  }
};

evenOrOdd(2);
