function user(name,age,gender,weight) 
                        {
                            this.a = name;
                            this.age = age;
                            this.gender = gender;
                            this.weight = weight;
                        }
const john = new user('John Wick',32,'M',80);
console.log(john);