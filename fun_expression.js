const cal = function(a,b)
{
    let sum = a+b;
    let average = (a+b)/2;
    let Divide_1 = a/b;
    let Divide_2 = b/a;
    let sub_1 = a-b;
    let sub_2 = b-a;
    let multiply = a*b;
    console.log(`A = ${a}`);
    console.log(`B = ${b}`);
    console.log(`Average: ${average}`);
    console.log(`${a} + ${b} = ${sum}`);
    console.log(`${a} - ${b} = ${sub_1}`);
    console.log(`${b} - ${a} = ${sub_2}`);
    console.log(`${a}/${b} = ${Divide_1}`);
    console.log(`${b}/${a} = ${Divide_2}`);
    console.log(`${a} X ${b} = ${multiply}`);
}
cal(27,33);