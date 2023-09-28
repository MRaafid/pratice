let fruits = ["Apple", "Banana", "Cherry", "Date", "Fig"];
let fruits2 = [...fruits];
console.log(`original: ${fruits}
copy: ${fruits2}`);
// add an item to original
console.log();
fruits.push('guava');
console.log(`original: ${fruits}
copy: ${fruits2}`);
//add an item to copy
console.log();
fruits2.push('Jackfruit');
console.log(`original: ${fruits}
copy: ${fruits2}`);
//add 2 arrays
let bird = ["Sparrow", "Eagle", "Hummingbird", "Owl", "Flamingo"];
let animal = ["Lion", "Elephant", "Tiger", "Giraffe", "Zebra"];
let both = [...bird,...animal];
console.log();
console.log(`Birds: ${bird}
Animals: ${animal}
Both: ${both}`);