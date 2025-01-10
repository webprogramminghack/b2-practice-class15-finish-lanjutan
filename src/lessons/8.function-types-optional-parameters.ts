function printNameAndAge(name: string, options: { debugMode: boolean }) {
  console.log(name, options);
}

printNameAndAge('John'); // error
printNameAndAge('John', { debugMode: true }); // no error

// we can also make the debugMode property optional by adding a question mark
// optional means data type | undefined
function printNameAndAge2(name: string, options?: { debugMode: boolean }) {
  console.log(name, options);
}

printNameAndAge2('John'); // no error
printNameAndAge2('John', { debugMode: true }); // no error
printNameAndAge2('John', {}); // error

function printNameAndAge3(name: string, options?: { debugMode?: boolean }) {
  console.log(name, options);
}

printNameAndAge3('John'); // no error
printNameAndAge3('John', { debugMode: true }); // no error
printNameAndAge3('John', {}); // no error
