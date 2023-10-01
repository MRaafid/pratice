{
    let a = [1,12,123,13,132,14,144,23,53,147,76,56,34,25];
    a.sort(function(a,b){return a-b});
    console.log(a);
    console.log(a.sort(function(a,b){return b-a}));
}
{
    let a = ['ant', "dragonfly", "fly", "cockroach", "grasshopper", "beetle", "moth", "spider", "tarantula"]
    console.log(a.sort())
}
