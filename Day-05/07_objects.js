/* Day 05 Exercise 07 - Objects & Destructuring Script */

// 1. Object Literal
const developer = {
    name: "Kalyani Velukar",
    role: "Backend Developer",
    company: "AD TECH Enterprises Pvt. Ltd.",
    day: 5,
    skills: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
    // Object Method
    getIntroduction() {
        return `I am ${this.name}, a ${this.role} at ${this.company}, currently on Day ${this.day}.`;
    }
};

// 2. Dot Notation & Bracket Notation
console.log("Name (Dot):", developer.name);
console.log("Role (Bracket):", developer["role"]);
console.log("Intro:", developer.getIntroduction());

// 3. Object Destructuring
const { name, role, skills, company } = developer;
console.log("Destructured Name:", name);
console.log("Destructured Skills:", skills);

// 4. Object.keys() and Object.values()
console.log("Object Keys:", Object.keys(developer));

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Objects Output:</h3>
        <p><strong>Introduction Method:</strong> ${developer.getIntroduction()}</p>
        <p><strong>Destructured Skills:</strong> ${skills.join(", ")}</p>
        <p><strong>Object.keys():</strong> ${Object.keys(developer).join(", ")}</p>`;
    }
});
