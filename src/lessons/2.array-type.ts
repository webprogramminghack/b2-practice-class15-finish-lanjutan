let b: number[];
b = [1, 2, 3];

// type is smart enough to know that it only accepts numbers
// hover the push method and you'll see that it only accepts numbers
b.push(1, 2); // no error
b.push(1, 2, 'hello'); // error

// push method will require a 1, 2, or 3
const [1, 2, 3] = [1, 2, 3];
c.push(1); // no error
c.push(4); // no error


// const will not produce literal types for arrays
// so the following will infer the type as number[]
const d = [1,2,3];
d.push(4); // no error

// to produce literal types for arrays, use as const
const e = [1,2,3] as const;
e.push(1,2,3); // error