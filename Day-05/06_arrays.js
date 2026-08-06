
const scores = [65, 82, 90, 74, 88, 95];

const scaledScores = scores.map(score => score + 5);
console.log("Original Scores:", scores);
console.log("Scaled Scores (+5):", scaledScores);

const highScores = scores.filter(score => score >= 85);
console.log("High Scores (>=85):", highScores);

const totalPoints = scores.reduce((sum, score) => sum + score, 0);
const averageScore = (totalPoints / scores.length).toFixed(1);
console.log("Total Points:", totalPoints, "| Average:", averageScore);

const firstTopScore = scores.find(score => score > 90);
console.log("First Top Score (>90):", firstTopScore);

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("output-box");
    if (box) {
        box.innerHTML = `<h3>Array Methods Output:</h3>
        <p><strong>Original Array:</strong> [${scores.join(", ")}]</p>
        <p><strong>Mapped (+5):</strong> [${scaledScores.join(", ")}]</p>
        <p><strong>Filtered (>=85):</strong> [${highScores.join(", ")}]</p>
        <p><strong>Reduced Average:</strong> ${averageScore}</p>`;
    }
});
