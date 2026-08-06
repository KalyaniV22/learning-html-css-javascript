console.log("--- Standard For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Day ${i} Module Completed`);
}

console.log("--- While Loop ---");
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
}

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
