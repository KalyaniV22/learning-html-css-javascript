/* Day 05 Exercise 05 - Functions Script */

// 1. Function Declaration with Default Parameters
function calculateTotalScore(baseScore = 50, bonus = 10) {
    return baseScore + bonus;
}

// 2. Arrow Function (ES6)
const formatGreeting = (name, role) => `Hello ${name}, your current role is ${role}.`;

// 3. Arrow Function with Rest Parameters (...skills)
const summarizeSkills = (devName, ...skills) => {
    return `${devName} possesses skills in: ${skills.join(", ")}.`;
};

// Function Executions
const totalScore = calculateTotalScore(80, 15); // 95
const greetingMsg = formatGreeting("Kalyani Velukar", "Backend Developer");
const skillSummary = summarizeSkills("Kalyani", "Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript");

console.log("Total Score:", totalScore);
console.log(greetingMsg);
console.log(skillSummary);

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Functions Output:</h3>
        <p><strong>Total Calculated Score:</strong> ${totalScore}</p>
        <p><strong>Greeting Output:</strong> ${greetingMsg}</p>
        <p><strong>Rest Parameters Output:</strong> ${skillSummary}</p>`;
    }
});
