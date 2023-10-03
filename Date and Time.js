const date = new Date();
console.log(Date());
console.log(new Date());
console.log();
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString('en-US'));
console.log(date.toLocaleString({ timezone: 'Asia/Japan'}));
console.log(date.toLocaleString({timezone: 'UK'}));
console.log(Date.now())
console.log(Date.parse("4 Mar, 2020"))