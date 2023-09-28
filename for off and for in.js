let a = [
            {
                name: "Object 1",
                property1: "Value 1",
                property2: "Value 2",
                property3: "Value 3",
                property4: "Value 4",
                property5: "Value 5",
            },
            {
                name: "Object 2",
                property1: "Value 6",
                property2: "Value 7",
                property3: "Value 8",
                property4: "Value 9",
                property5: "Value 10",
            },
            {
                name: "Object 3",
                property1: "Value 11",
                property2: "Value 12",
                property3: "Value 13",
                property4: "Value 14",
                property5: "Value 15",
            }
        ];
const intuser =(b) => `${b.name} is ${b.property1}, ${b.property2}, ${b.property3}, ${b.property4} and ${b.property5}`
for (const b of a)
        {
            console.log(intuser(b))
        }
// for in
let x = ["String 1", "String 2", "String 3", "String 4", "String 5"];
for (a in x)
        {
            console.log(a)
        }
