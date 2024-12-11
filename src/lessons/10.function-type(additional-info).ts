function sumWithCallback(a: number, b: number, cb: Function) {
  cb(a + b);
}

// it's an error because sum parameter is of any type
sumWithCallback(1, 2, (sum) => console.log(sum));
// so you can't depend on the Function interface, it's just a built-in type, the purpose of it is to represent the properties of function and methods in the Function.prototype

// so the solution is to define our own function type
function sumWithCallback2(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

// if we don't give the parameter a data type when passing it as an anonymous function sd an argument, it will have the same data type as the data type in the function parameter
sumWithCallback2(1, 2, (sum) => console.log(sum)); // no error

// and of course you can also do this
type SumCallback = (sum: number) => void;

function sumWithCallback3(a: number, b: number, cb: SumCallback) {
  cb(a + b);
}

sumWithCallback3(1, 2, (sum) => console.log(sum)); // no error

// optional chaining belongs to javascript
// let user = {};
// console.log(user?.address?.street);
// non null assertion belongs to typescript
// do you notice the event parameter has a type of Event? It's like what we have learned when we make the sum into number where it was inferred as any type in the first place
document.querySelector('#app')!.addEventListener('click', (event) => {
  console.log(event.target);
});

// what happens if we use don't direct passing the function as an argument
function sumWithCallback4(a: number, b: number, cb: SumCallback) {
  cb(a + b);
}

// it produces error since the function parameter is of any type
const callback = (sum) => console.log(sum);
sumWithCallback4(1, 2, callback);

// the solution is to give the data type to the function parameter
const callback2 = (sum: number) => console.log(sum);
sumWithCallback4(1, 2, callback2);

// so let's use a separate function as the argument for the add Event listener
const eventListenerCallback = (event: Event) => {
  console.log(event.target);
};

document
  .querySelector('#app')!
  .addEventListener('click', eventListenerCallback);
