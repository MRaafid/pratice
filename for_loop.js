let n= [];
for (let i=0; i<10; i++)
    {
        n[i] = i+1;
    }
console.log(n);
let r = 0;
for (let i=0; i<10; i++)
    {
        let n = i;
        r = n + r;
    }
console.log(r);