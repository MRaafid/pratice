a = Array.of(1,3,4,43,2545,25436,2324);
console.log(a);

// Array.from
let b = Array.from('apple');
console.log(b);

function palindrome(word)
    {
        if (word === Array.from(word).reverse().join(''))
            {
                console.log(`${word} is a Palindrome`);
            }
        else
            {
                console.log(`${word} is not a Palindrome`);
            }
    }
palindrome('mom');
palindrome('apple');
palindrome('racecar');
palindrome('aeroplane');
palindrome('MALAYALAM');
