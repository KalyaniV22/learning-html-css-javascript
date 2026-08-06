/* Day 05 Exercise 02 - Operators Script */

// 1. Strict Equality vs Loose Equality
const numVal = 5;
const strVal = "5";

console.log("Loose Equality (5 == '5'):", numVal == strVal); // true (coercion)
console.log("Strict Equality (5 === '5'):", numVal === strVal); // false (recommended!)

// 2. Logical Operators (AND &&, OR ||)
const hasJavaSkill = true;
const hasHtmlSkill = true;
const canBuildFullStack = hasJavaSkill && hasHtmlSkill;

console.log("Can Build Full Stack:", canBuildFullStack);

// 3. Ternary Operator
const dayProgress = 5;
const readinessStatus = dayProgress >= 5 ? "Ready for Advanced Scripting" : "In Fundamentals";

console.log("Readiness Status:", readinessStatus);

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Operators Output:</h3>
        <p><strong>Strict Equality (5 === '5'):</strong> ${numVal === strVal}</p>
        <p><strong>Full Stack Readiness:</strong> ${canBuildFullStack}</p>
        <p><strong>Ternary Result:</strong> ${readinessStatus}</p>`;
    }
});
