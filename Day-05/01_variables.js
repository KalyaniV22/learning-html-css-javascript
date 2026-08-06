const developerName = "Kalyani Velukar";
let currentDay = 5; 
const isEnrolled = true; 
let capstoneProject = null; 
let upcomingTopic; 

console.log("Developer Name:", developerName, "| Type:", typeof developerName);
console.log("Current Day:", currentDay, "| Type:", typeof currentDay);
console.log("Is Enrolled:", isEnrolled, "| Type:", typeof isEnrolled);
console.log("Capstone Project:", capstoneProject, "| Type:", typeof capstoneProject);
console.log("Upcoming Topic:", upcomingTopic, "| Type:", typeof upcomingTopic);

const summaryText = `Developer ${developerName} is currently on Day ${currentDay} of the AD TECH MERN Program.`;
console.log(summaryText);

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Variables &amp; Types Summary:</h3>
        <p><strong>Name:</strong> ${developerName} (${typeof developerName})</p>
        <p><strong>Day:</strong> ${currentDay} (${typeof currentDay})</p>
        <p><strong>Summary:</strong> ${summaryText}</p>`;
    }
});
