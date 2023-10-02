let person =    {
                    firstName: "John",
                    lastName: "Doe",
                    age: 30,
                };

let address =   {
                    street: "123 Main St",
                    city: "Anytown",
                    state: "CA",
                    zip: "12345"
                };
let combine =   {
                    ...person,
                    ...address,
                    email: "asdfsafs@dsf.com",
                    gender: "M"
                };
console.log(combine);


