function printName(name: string) {
  console.log(name);
}

// void is the absence of the value
// undefined is a value which is not assigned
const a = printName('sdf');

function handleClick(callback: () => void) {}
