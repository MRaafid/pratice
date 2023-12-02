function timer(count) {
    console.log(`Seconds: ${count}`);
}

let count = 0;
let counter = setInterval(function () {
    timer(count);
    count++;

    // Stop the interval after 5 seconds
    if (count === 5) {
        clearInterval(counter);
        console.log("Interval cleared after 5 seconds.");
    }
}, 1000);

setTimeout(function() {
    // Code to be executed after a delay
    console.log("Delayed execution after 2000 milliseconds");
}, 2000); // 2000 milliseconds (2 seconds)