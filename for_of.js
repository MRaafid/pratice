const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) 
    {
        console.log(num);
    }
const emps =  [
                {
                    Name: 'Raafid',
                    Age: 25,
                    Gender: 'Male', 
                    Qualification: 'Aeronautical Engineering',
                },
                {
                    Name: 'Alice',
                    Age: 30,
                    Gender: 'Female',
                    Qualification: 'Computer Science Engineering',
                },
                {
                    Name: 'Bob',
                    Age: 28,
                    Gender: 'Male',
                    Qualification: 'Electrical Engineering',
                }
            ]
const print = (emp) => `${emp.Name} is ${emp.Age} years old ${emp.Gender}, who has completed BE in ${emp.Qualification}`
for(const emp of emps)
    {
        console.log(print(emp));
    }
for(const prop in emps)
    {
        console.log(prop);
    }