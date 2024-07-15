const numbers = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers; // Skips 2nd and 4th elements

console.log(first); // 1
console.log(third); // 3
console.log(fifth); // 5