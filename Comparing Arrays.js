
function equate(x,y)
    {
        if (x===y)
            {
                console.log(`Arrays are equal`);
            }
        else
            {
                console.log(`Arrays are not equal`);  
            }
    }
//same array
{
    let arr1 = [1,2,3,4,5];
    let arr2 = [1,2,3,4,5];
    let c = JSON.stringify(arr1)
    let d = JSON.stringify(arr2)
    equate(c,d);
    console.log();
}
// unequal arrays
{
    let arr1 = [1,2,3,4,5];
    let arr2 = [1,2,6,4,5];
    let c = JSON.stringify(arr1)
    let d = JSON.stringify(arr2)
    equate(c,d);
    console.log();
}
// equal arrays but jumbled
{
    let arr1 = [1,2,3,4,5];
    let arr2 = [2,5,4,3,1];
    let c = JSON.stringify(arr1)
    let d = JSON.stringify(arr2)
    equate(c,d);
    console.log();
}