// change writable to false
let a = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zip: '12345',
            email: 'asdfsafs@dsf.com',
            gender: 'M'
        };
Object.defineProperty (a, 'gender', {writable: false,});
a.gender = 'f';
console.log(a)                               
// can see from the output that the property of gender has not changed
console.log();
// enumerable to false
let b = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
    email: 'asdfsafs@dsf.com',
    gender: 'M'
};
Object.defineProperty (b, 'gender', {enumerable: false,});
console.log(b)
// from the out put u can see that the gender is not mentioned
console.log();
// configurable to false
let c = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
    email: 'asdfsafs@dsf.com',
    gender: 'M'
};
Object.defineProperty (c, 'gender', {configurable: false});
//Object.defineProperty (c, 'gender', {writable: false, enumerable: false,})
c.gender = 'f';
console.log(c)
// if configurable: false the code will give error when u change writable or enumerable