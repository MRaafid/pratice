let a = "Hello, this is a sample sentence.";
let b = ["Hello, this is a sample sentence."]
let c = ["This is the first sentence.", "Here comes the second sentence.", "And now the third sentence.", "This is the last sentence."];
console.log(a.includes('is'));
console.log(b.includes('is'));
console.log(c.includes("This is the first sentence."));
console.log();
const find = (word) => {
    
    for (const x of c) 
    { 
        if (x.includes(word)) 
        {
            console.log(x);
        }
    }
  };
find('first')