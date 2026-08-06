
function calculateTotalScore(baseScore = 50, bonus = 10) {
    return baseScore + bonus;
}

const formatGreeting = (name, role) => `Hello ${name}, your current role is ${role}.`;

const summarizeSkills = (devName, ...skills) => {
    return `${devName} possesses skills in: ${skills.join(", ")}.`;
};

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
