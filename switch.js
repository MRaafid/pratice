let a = parseFloat(prompt("Please enter the value of a: "));
let b = parseFloat(prompt("Please enter the value of b: "));
let c = parseInt(prompt("Please enter any action:\n1. add\n2. subtract\n3. divide\n4. multiply"));

switch (c) 
    {
        case 1:
            {
                let d = a + b;
                alert(a + " + " + b + " = " + d);
                break;
            }
        case 2:
           {
                let e = a - b;
                alert(a + " - " + b + " = " + e);
                break;
           }
        case 3:
           {
                let f = a / b;
                alert(a + " / " + b + " = " + f);
                break;
           }
        case 4:
            {
                let g = a * b;
                alert(a + " * " + b + " = " + g);
                break;
            }
        default:
           {
                alert("Invalid action");
           }
    }