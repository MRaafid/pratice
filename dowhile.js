let i=1, odd=[], a=0;
do
    {
        if(i%2!==0)
            {
                odd[a]=i;
                a++;
            }
        i++
    }
while(i<100)
console.log(odd);