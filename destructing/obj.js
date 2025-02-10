// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(obj)
// is equivalent to:
// const a = obj.a;
// const b = obj.b;


const obj = null;
const { a, b } = obj; // TypeError: Cannot destructure property 'a' of 'null' as it is null.
console.log(obj)
