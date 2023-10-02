let a = {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            address:    {
                            street: "123 Main St",
                            city: "Anytown",
                            state: "CA",
                            zip: "12345"
                        },
            email: "johndoe@example.com"
        };
console.log(a.hasOwnProperty('lastName'));
console.log(a.hasOwnProperty('Name'));
console.log();
console.log("firstName" in a);
console.log("app" in a);
console.log("zip" in a);
console.log("zip" in a.address);
