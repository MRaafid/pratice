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
console.log(Object.keys(a));
console.log(Object.keys(a.address));
console.log();
console.log(Object.values(a))
console.log(Object.values(a.address));
console.log();
console.log(Object.entries(a));
console.log(Object.entries(a.address));