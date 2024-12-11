// the great thing about this is that you can assign any type to it
// but the downside is that you lose the pretty much all the benefits of TypeScript when you use any
let a: any = 4;
a = 3;
a = 'hello';
a.location = 'USA'; // no error
a(); // no error

// json parse stringobject
// x is of type any
// it has no idea of what the result is
const x = JSON.parse('{"name": "John"}');

async function fetchUser() {
  const response = await fetch('https://api.github.com/users/iliakan');
  // user is of type any
  // it has no idea of what the result is
  const user = await response.json();
}
