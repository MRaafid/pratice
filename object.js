var me = {
            Name: 'Raafid',
            Age: 25,
            Gender: 'Male', 
            Qualification: 'Aeronautical Engineering',
            Country: 'India',
            City: 'Mangalore',
         }
console.log(me.Name);
me.Sign = 'Gemini'
console.log(me.Sign);
me.Qualification = "BE"
console.log(me.Qualification);
delete me.Sign;
console.log(me.Sign);
var cur = new Object();
cur['Japan'] = 'Yen';
cur['us'] = 'Dollar';
cur['India'] = 'Rupees';
console.log(`\nThe currency of India is ${cur.India}, while that of Japan is ${cur.Japan}`)
console.log(`\nThe currency of ${me.Country} is ${cur[me.Country]}`);
