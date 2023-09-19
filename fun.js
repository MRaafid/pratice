let count = 1; 
function cal(length, breadth) {
    let area = length * breadth;
    let perimeter = 2 * (length + breadth);
    let diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(breadth, 2));

    console.log(`${count}.`);
    console.log(`   Leangth: ${length}`);
    console.log(`   Breadth: ${breadth}`);
    console.log(`   Area: ${area}`);
    console.log(`   Perimeter: ${perimeter}`);
    console.log(`   Diagonal Length: ${diagonal}`);
    console.log();
    count++;
}

cal(2, 2);
cal(24,37);
cal(27,35);
cal(12,13);
cal(42,673);

