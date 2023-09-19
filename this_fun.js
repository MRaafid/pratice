const emp1 = {
                name: "John",
                age: 30,
                gender: 'M',
                weight: 70,
                height: 175
             };

const emp2 = {
                name: "Alice",
                age: 25,
                gender: 'F',
                weight: 60,
                height: 162
             };

const emp3 = {
                name: "Bob",
                age: 28,
                gender: 'M',
                weight: 80,
                height: 180
             };

const emp4 = {
                name: "Emma",
                age: 35,
                gender: 'F',
                weight: 55,
                height: 160
             };

const emp5 = {
                name: "Michael",
                age: 40,
                gender: 'M',
                weight: 90,
                height: 185
             };

const BMI = function()
    {
        return bmi = this.weight / (this.height * this.height);
    }
const BMR = function()
    {
        if(this.gender==='M')
            return (10 * this.weight) + (6.25 * this.height * 100) - (5 * this.age) + 5
        else
            return (10 * this.weight) + (6.25 * this.height * 100) - (5 * this.age) -161
    }
console.log(`${emp1.name}'s BMI: ${BMI.call(emp1)}`);
console.log(`${emp1.name}'s BMI: ${BMR.call(emp1)}`);

console.log(`${emp2.name}'s BMI: ${BMI.call(emp2)}`);
console.log(`${emp2.name}'s BMI: ${BMR.call(emp2)}`);

console.log(`${emp3.name}'s BMI: ${BMI.call(emp3)}`);
console.log(`${emp3.name}'s BMI: ${BMR.call(emp3)}`);

console.log(`${emp4.name}'s BMI: ${BMI.call(emp4)}`);
console.log(`${emp4.name}'s BMI: ${BMR.call(emp4)}`);

console.log(`${emp5.name}'s BMI: ${BMI.call(emp5)}`);
console.log(`${emp5.name}'s BMI: ${BMR.call(emp5)}`);
