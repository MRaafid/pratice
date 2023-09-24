let emp =   [
                {
                    firstName: "John",
                    lastName: "Doe",
                    age: 30,
                    email: "john@example.com"
                },
                {
                    firstName: "Jane",
                    lastName: "Smith",
                    age: 25,
                    email: "jane@example.com"
                },
                {
                    firstName: "Bob",
                    lastName: "Johnson",
                    age: 35,
                    email: "bob@example.com"
                }
            ];
const findemp = (email, arr) => arr.find(elem=>elem.email===email);
console.log(findemp('bob@example.com', emp));
let a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.includes(10));


