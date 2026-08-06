/* Day 05 Exercise 04 - Loops Script */

// 1. Traditional For Loop
console.log("--- Standard For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Day ${i} Module Completed`);
}

// 2. While Loop
console.log("--- While Loop ---");
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}

// 3. For...Of Loop over Array
const mernStack = ["MongoDB", "Express.js", "React.js", "Node.js"];
console.log("--- For...Of Loop ---");

let stackHTML = "";
for (const tech of mernStack) {
    console.log("Tech:", tech);
    stackHTML += `<li>${tech}</li>`;
}

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Iterated MERN Stack List (For...Of Loop):</h3>
        <ul>${stackHTML}</ul>`;
    }
});
