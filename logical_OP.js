{
    let a = 100;
let b = 200;
let c = 75;
if (a == b && a == c)
{
    console.log("All numbers are equal");
}
else if (a > b && a > c)
{
    console.log(a + " is the greatest");
}
else if (b > a && b > c)
{
    console.log(b + " is the greatest");
}
else 
{
    console.log(c + " is the greatest");
}
}

// LOGIGAL OR
{
    let a = ''
    console.log("hello " + (a || "stranger"));
}

//Optional Chaining Operator
let user = [
            {
                Name: 'Luffy',
                Position: 'captian',
                Power:  {
                            Haki: 'All',
                            Devil_Fruit: 'rubber'
                        }

            },
            {
                Name: 'Zoro',
                Position: 'Swordsman',
                Power:  {
                            Haki: 'All',
                            Wepon: 'Sword'
                        }

            }
        ]
console.log(`power: ${user[0].Power.Haki ??'N/A'}, ${user[0].Power.Devil_Fruit ??'N/A'}, ${user[0].Power.Wepon ??'N/A'}`);
console.log(`power: ${user[0].Power.Haki ??'N/A'}, ${user[1].Power.Devil_Fruit ??'N/A'}, ${user[1].Power.Wepon ??'N/A'}`)