let a = "Please send your inquiries to our support team at contact@example.com or info@fig.biz";
const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emailAddresses = a.match(emailPattern);
console.log(emailAddresses);
console.log();
let b = "In the heart of a bustling city, people from diverse backgrounds come together to create a vibrant and lively community, where cultures blend, ideas flow, and the energy is palpable, making every day an adventure filled with endless opportunities, connections, and moments of inspiration."
const pattern = /peopl?e/g;
console.log(pattern.exec(b)); // print everything
console.log();
{
    let c = "In the heart of a bustling city, people from diverse backgrounds come together to create a vibrant and lively community, where cultures blend, ideas flow, and the energy is palpable, making every day an adventure filled with endless opportunities, connections, and moments of inspiration."
    const patterns = /peopl?e/g;
    console.log(patterns.exec(c)[0]); //prints just the found word
    console.log(c.search(pattern)); // give the index number where the leters like at which the letter starts including spaces
}
