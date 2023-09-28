function a(Name, age, gender)
{
    let x=[Name, age, gender];
    return {
                Name: Name,
                age: age,
                gender: gender
           };
}
console.log(a('Raafid', 25, 'M'));

let b = ['Raafid', 25, 'M'];
let [user, age] = b;
console.log(user, age);