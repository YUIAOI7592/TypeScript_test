let nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        prop2: false
    }
};
let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };
console.log(nestedObject);
console.log(obj1);
console.log(obj2);
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };
console.log(x);
console.log(y);
console.log(z);
console.log(n);