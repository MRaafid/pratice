const find = (string_name, old_word, new_word) => string_name.replace(old_word, new_word);
let a = "Life is full of challenges, but it's our ability to triumph them that defines who we are and shapes our future."
let b = find(a, 'triumph', 'overcome');
console.log(`orginal: ${a}`);
console.log(`changed: ${b}`);
console.log();

const findall = (string_name, old_word, new_word) => string_name.replaceAll(old_word, new_word);
let c = "The quick brown fox jumped over the lazy. The lazy dog yawned and stretched, but the quick brown fox continued to explore the forest. Foxes are known for their agility, and this quick brown fox was no exception.";
let d = find(c, 'fox', 'wolf');
let e = findall(c, 'fox', 'wolf');
console.log(`orginal: ${c}`);
console.log(`changed by replace: ${d}`);
console.log(`changed by replace all: ${e}`);
console.log();