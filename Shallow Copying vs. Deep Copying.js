let a  =   {
                name: "John",
                age: 30,
                address:{
                            street: "123 Main St",
                            city: "Anytown",
                            state: "CA",
                        }
            };
let b = {...a};
a.name = "Ace"
b.name = "Nami"
a.address.state ="NY" 
b.address.city ="Anycity" 
console.log(a);
console.log(b);
// the changes made on line 13 & 14 are reflected on both a and b, this is the limitation of shallow copy as it does not work on nested array/objects
