function cal(principal,rate,years)
    {
        let p = principal;
        let r = rate;
        let i = years;
        while (i>0)
        {    
            let interest = p * (r / 100);
            p += interest;
            i--;
        }
        console.log(`Total Amount: ${p}`)
    }
function s(p,t,r)
    {
        let SI = p * t * r * 0.01;
        let pt = SI + p
        console.log(`Total Amount: ${pt}`);
    }
cal(10000,5,3);
s(10000,5,3);