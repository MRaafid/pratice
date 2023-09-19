const area_rectangle = (Length,Width) => Length*Width;
const area_circle = (radius) => 3.14*radius*radius;
const area_triangle = (Base,Height) => 0.5*Base*Height;

console.log(area_rectangle(23,45));
console.log(area_circle(7));
console.log(area_triangle(12,15));

const emp = (Emp_Id,Name,Age,Gender) => (
                                            {
                                                Emp_Id,
                                                Name,
                                                Age,
                                                Gender,
                                            }
                                        )
console.log(emp(1334,'Muhammad Raafid',25,'M'))                                    