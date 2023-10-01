// adding
{
    let a = [1,2,3,4,10,15];
    const b = a.reduce((x,y) => x+y, 0);
    console.log(b);
}
// average
{
    let c = [1,2,3,4,5];
    const d = c.reduce((x,y) => ((x+y)), 0);
    console.log(d/(c.length));
}
// multiply
{
    let a = [1,2,3,10];
    const b = a.reduce((x,y) => x*y, 1);
    console.log(b);
}
// object
let customerData = [
    {
      customerId: 1,
      name: "Alice",
      quantity: 3,
      price: 10.99
    },
    {
      customerId: 2,
      name: "Bob",
      quantity: 2,
      price: 15.75
    },
    {
      customerId: 3,
      name: "Charlie",
      quantity: 5,
      price: 8.49
    },
    {
      customerId: 4,
      name: "David",
      quantity: 1,
      price: 20.50
    },
    {
      customerId: 5,
      name: "Eve",
      quantity: 4,
      price: 12.99
    }
  ];
const total_cost = customerData.reduce((x,y) => x + (y.quantity * y.price), 0)
const total_qty = customerData.reduce((x,y) => x + y.quantity, 0)
console.log(`Total cost is $${total_cost.toFixed(3)} from ${total_qty} items`);
// .toFixed(2) to keep 2 decimal places
