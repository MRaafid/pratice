const nestedArrayofnumbers = [
                                [1, 2, 3],
                                [4, 5, 6],
                                [7, 8, 9]
                             ];
console.log("Original Array of numbers:");
console.log(nestedArrayofnumbers);
console.log();                            
const nestedArrayOfStrings = [
                                ["apple", "banana", "cherry"],
                                ["date", "fig", "grape"],
                                ["kiwi", "lemon", "orange"]
                             ];
console.log("original Array of strings:");
console.log(nestedArrayOfStrings);
console.log();                             
let a = [...nestedArrayofnumbers]
let b = [...nestedArrayOfStrings]
a = a.flat();  
b = b.flat();    
console.log("Flattened Array of numbers:");
console.log(a);
console.log();  
console.log("Flattened Array of strings:");
console.log(b);
console.log();
// 2 nested 
{
    let a = [
                [[1, 2], 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
    let b= [...a]
    console.log(a.flat());
    console.log(b.flat(2));
}
console.log("5 nested")
{
    let p = [
                [[[[[1,2,3],4],5],6],7,8,9],
                [4, 5, 6],
                [7, 8, 9]
            ];
    let q = [...p]
    let r = [...p]
    let s = [...p]
    let t = [...p]
    console.log(p.flat());
    console.log(q.flat(2));
    console.log(r.flat(3));
    console.log(s.flat(4));
    console.log(t.flat(5));
}