/* Day 05 Exercise 01 - Variables & Data Types Script */

// 1. Variable Declarations
const developerName = "Kalyani Velukar"; // String (Immutable reference)
let currentDay = 5; // Number
const isEnrolled = true; // Boolean
let capstoneProject = null; // Null
let upcomingTopic; // Undefined

// 2. Logging Data Types
console.log("Developer Name:", developerName, "| Type:", typeof developerName);
console.log("Current Day:", currentDay, "| Type:", typeof currentDay);
console.log("Is Enrolled:", isEnrolled, "| Type:", typeof isEnrolled);
console.log("Capstone Project:", capstoneProject, "| Type:", typeof capstoneProject);
console.log("Upcoming Topic:", upcomingTopic, "| Type:", typeof upcomingTopic);

// 3. Template Literals (``)
const summaryText = `Developer ${developerName} is currently on Day ${currentDay} of the AD TECH MERN Program.`;
console.log(summaryText);

// Output to DOM
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Variables &amp; Types Summary:</h3>
        <p><strong>Name:</strong> ${developerName} (${typeof developerName})</p>
        <p><strong>Day:</strong> ${currentDay} (${typeof currentDay})</p>
        <p><strong>Summary:</strong> ${summaryText}</p>`;
    }
});
