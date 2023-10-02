let a = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    email: "johndoe@example.com"
};
a.phone = 9873456728;
a.zip = 27;
console.log(a);
console.log()
//using seal
let b = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    email: "johndoe@example.com"
};
Object.seal(b);
b.phone = 9873456728;
b.age = 27;
console.log(b);
// here the additional property phone is not added but the value for age is changed
console.log()

//using freaze
let c = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    },
    email: "johndoe@example.com"
};
Object.freeze(c);
c.phone = 9873456728;
c.age = 27;
console.log(c);
console.log()
// here both the new property phone and modified age value is not applied