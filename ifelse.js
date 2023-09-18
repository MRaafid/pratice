let a = prompt("Please enter the cost: ");
if (a<1250)
    {
        alert("Discount is not aplicable");
    }
else if(a>=1250 && a<1500)
    {
        alert("5% discount");
        let discount = (a*0.05);
        let dp = a - discount;
        alert("The discounted price is: " + dp);
    }
else if(a>=1500 && a<2000)
    {
        alert("10% discount");
        let discount = (a*0.1);
        let dp = a - discount;
        alert("The discounted price is: " + dp);
    }
else if(a>=2000 && a<5000)
    {
        alert("20% discount");
        let discount = (a*0.2);
        let dp = a - discount;
        alert("The discounted price is: " + dp);
    } 
else if(a>=5000 && a<10000)
    {
        alert("25% discount");
        let discount = (a*0.25);
        let dp = a - discount;
        alert("The discounted price is: " + dp);
    }
else if(a>=10000 && a<15000)
    {
        alert("30% discount");
        let discount = (a*0.3);
        let dp = a - discount;
        alert("The discounted price is: " + dp);
    }
else
    {
        alert("50% discount");
        let discount = (a*0.5);
        let dp = a - discount;
        alert("The discounted price is: " + dp);
    }