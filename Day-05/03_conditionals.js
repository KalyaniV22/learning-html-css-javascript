/* Day 05 Exercise 03 - Conditionals Script */

const userScore = 88;
let grade = "";

// 1. If...Else If...Else Branching
if (userScore >= 90) {
    grade = "A+ (Outstanding)";
} else if (userScore >= 80) {
    grade = "A (Excellent)";
} else if (userScore >= 70) {
    grade = "B (Good)";
} else {
    grade = "Needs Improvement";
}

// 2. Switch Statement
const moduleDay = 5;
let moduleTopic = "";

switch (moduleDay) {
    case 1:
        moduleTopic = "HTML Basics & Structure";
        break;
    case 2:
        moduleTopic = "HTML Forms & Multimedia";
        break;
    case 3:
        moduleTopic = "CSS Box Model & Flexbox";
        break;
    case 4:
        moduleTopic = "CSS Grid & Animations";
        break;
    case 5:
        moduleTopic = "JavaScript Fundamentals & Control Flow";
        break;
    default:
        moduleTopic = "Advanced MERN Module";
}

console.log(`Grade: ${grade} | Day ${moduleDay} Topic: ${moduleTopic}`);

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Conditionals Output:</h3>
        <p><strong>Evaluation Score (88):</strong> ${grade}</p>
        <p><strong>Switch Case Topic (Day 5):</strong> ${moduleTopic}</p>`;
    }
});
