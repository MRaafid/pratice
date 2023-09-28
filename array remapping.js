let a = ["Ferrero Rocher", "KitKat", "Vanilla", "Strawberry", "Oreo"]
let milkshake = a.map((x) => `${x} Milkshake!`);
console.log(milkshake);

// with numbers
let b = [2,334,5454,43535,24];
let sq = b.map((x) => x * x);
console.log();
console.log(sq);

//objects
let c = [
            {
                name: 'emp1',
                age: 24,
                gender: 'Female'
            },
            {
                name: 'emp2',
                age: 33,
                gender: 'Female'
            },
            {
                name: 'emp3',
                age: 46,
                gender: 'Male'
            }
        ];
let greeting = c.map((x) => `I am ${x.age} old ${x.gender} named ${x.name}`);                    
console.log();
console.log(greeting);

