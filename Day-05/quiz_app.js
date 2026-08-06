/*
================================================================================
AD TECH ENTERPRISES PVT. LTD. - Day 05 Mini Project
Interactive Developer Knowledge Quiz App — JavaScript Logic
Developer: Kalyani Velukar (Backend Developer / MERN Trainee)
================================================================================
*/

// ============================================================
// QUIZ DATA — Array of Question Objects (Day 1 to Day 5 Topics)
// ============================================================
const quizQuestions = [
    {
        question: "Which HTML tag is used to define the main heading of a page?",
        options: ["<title>", "<h1>", "<header>", "<main>"],
        answer: "<h1>",
        topic: "Day 1 — HTML Basics"
    },
    {
        question: "Which HTML5 input type is used to accept email addresses with browser validation?",
        options: ["type='text'", "type='username'", "type='email'", "type='contact'"],
        answer: "type='email'",
        topic: "Day 2 — HTML Forms"
    },
    {
        question: "In CSS Flexbox, which property controls how children are aligned along the CROSS AXIS?",
        options: ["justify-content", "flex-direction", "align-items", "flex-wrap"],
        answer: "align-items",
        topic: "Day 3 — CSS Flexbox"
    },
    {
        question: "Which CSS property creates a named region in a Grid layout?",
        options: ["grid-column", "grid-template-areas", "grid-gap", "grid-row"],
        answer: "grid-template-areas",
        topic: "Day 4 — CSS Grid"
    },
    {
        question: "In JavaScript, which keyword declares a BLOCK-SCOPED variable that CAN be reassigned?",
        options: ["var", "const", "let", "static"],
        answer: "let",
        topic: "Day 5 — JS Variables"
    },
    {
        question: "Which JavaScript operator checks both VALUE and TYPE (strict equality)?",
        options: ["==", "===", "!=", "=>"],
        answer: "===",
        topic: "Day 5 — JS Operators"
    },
    {
        question: "Which Array method TRANSFORMS each element and returns a NEW array of the same length?",
        options: ["filter()", "find()", "reduce()", "map()"],
        answer: "map()",
        topic: "Day 5 — JS Arrays"
    },
    {
        question: "What does the following arrow function return? `const add = (a, b) => a + b;` when called as `add(4, 6)`?",
        options: ["undefined", "'46'", "10", "NaN"],
        answer: "10",
        topic: "Day 5 — JS Functions"
    }
];

// ============================================================
// STATE OBJECT — Tracks the Quiz Progress
// ============================================================
const state = {
    currentIndex: 0,        // Current question index
    score: 0,               // Number of correct answers
    candidateName: "",      // Candidate name from the start screen
    timerInterval: null,    // Reference to the countdown timer interval
    timeLeft: 20,           // Seconds per question
    answered: false,        // Has user answered current question?
    resultLog: []           // Array of per-question results for breakdown
};

// ============================================================
// DOM REFERENCES — Cache all element references
// ============================================================
const screens = {
    start: document.getElementById("start-screen"),
    quiz: document.getElementById("quiz-screen"),
    result: document.getElementById("result-screen")
};

const el = {
    candidateInput: document.getElementById("candidate-name"),
    startBtn: document.getElementById("start-btn"),
    questionTracker: document.getElementById("question-tracker"),
    scoreDisplay: document.getElementById("score-display"),
    progressBar: document.getElementById("progress-bar"),
    timerDisplay: document.getElementById("timer-display"),
    questionNum: document.getElementById("question-num"),
    questionText: document.getElementById("question-text"),
    optionsGrid: document.getElementById("options-grid"),
    nextBtn: document.getElementById("next-btn"),
    resultGreeting: document.getElementById("result-greeting"),
    finalScorePercent: document.getElementById("final-score-percent"),
    resultSummary: document.getElementById("result-summary"),
    resultGrade: document.getElementById("result-grade"),
    resultBreakdown: document.getElementById("result-breakdown"),
    resultIcon: document.getElementById("result-icon"),
    restartBtn: document.getElementById("restart-btn")
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// showScreen: Hides all screens and shows the target screen
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove("active"));
    screens[screenName].classList.add("active");
}

// updateHeader: Updates the top header with current question & score
function updateHeader() {
    el.questionTracker.textContent = `Question ${state.currentIndex + 1} / ${quizQuestions.length}`;
    el.scoreDisplay.textContent = `Score: ${state.score}`;
}

// startTimer: Starts a 20-second countdown per question
function startTimer() {
    state.timeLeft = 20;
    el.timerDisplay.textContent = `${state.timeLeft}s`;
    el.timerDisplay.classList.remove("urgent");

    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        el.timerDisplay.textContent = `${state.timeLeft}s`;

        // Urgent visual below 6 seconds
        if (state.timeLeft <= 5) {
            el.timerDisplay.classList.add("urgent");
        }

        // Time expired — auto-lock and reveal answer
        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            if (!state.answered) {
                lockAnswers(null);
            }
        }
    }, 1000);
}

// stopTimer: Clears the countdown interval
function stopTimer() {
    clearInterval(state.timerInterval);
}

// ============================================================
// CORE QUIZ LOGIC
// ============================================================

// renderQuestion: Renders the current question and its option buttons
function renderQuestion() {
    const q = quizQuestions[state.currentIndex];
    state.answered = false;

    // Update header & progress bar
    updateHeader();
    const progressPercent = (state.currentIndex / quizQuestions.length) * 100;
    el.progressBar.style.width = `${progressPercent}%`;

    el.questionNum.textContent = `Q${state.currentIndex + 1} of ${quizQuestions.length}`;
    el.questionText.textContent = q.question;
    el.nextBtn.style.display = "none";

    // Render option buttons dynamically
    el.optionsGrid.innerHTML = "";
    q.options.forEach(optionText => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = optionText;
        btn.addEventListener("click", () => handleAnswer(btn, optionText, q.answer));
        el.optionsGrid.appendChild(btn);
    });

    // Start the per-question timer
    startTimer();
}

// handleAnswer: Called when user clicks an option button
function handleAnswer(clickedBtn, selectedOption, correctAnswer) {
    if (state.answered) return; // Prevent double-click

    stopTimer();
    state.answered = true;
    lockAnswers(clickedBtn);

    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
        clickedBtn.classList.add("correct");
        state.score++;
        el.scoreDisplay.textContent = `Score: ${state.score}`;
    } else {
        clickedBtn.classList.add("wrong");
        // Highlight the correct answer in green
        const allBtns = el.optionsGrid.querySelectorAll(".option-btn");
        allBtns.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    // Log result for the summary breakdown
    state.resultLog.push({
        question: quizQuestions[state.currentIndex].question,
        selected: selectedOption || "No Answer (Time Expired)",
        correct: correctAnswer,
        isCorrect: isCorrect,
        topic: quizQuestions[state.currentIndex].topic
    });

    el.nextBtn.style.display = "block";
}

// lockAnswers: Disables all option buttons after answering or timeout
function lockAnswers(activeBtn) {
    const allBtns = el.optionsGrid.querySelectorAll(".option-btn");
    allBtns.forEach(btn => {
        btn.disabled = true;
    });

    // If timed out (no button clicked)
    if (!activeBtn && !state.answered) {
        const q = quizQuestions[state.currentIndex];
        state.answered = true;

        // Highlight correct answer
        allBtns.forEach(btn => {
            if (btn.textContent === q.answer) btn.classList.add("correct");
        });

        state.resultLog.push({
            question: q.question,
            selected: "No Answer (Time Expired)",
            correct: q.answer,
            isCorrect: false,
            topic: q.topic
        });

        el.nextBtn.style.display = "block";
    }
}

// showResults: Calculates and renders the final result screen
function showResults() {
    showScreen("result");

    const total = quizQuestions.length;
    const scorePercent = Math.round((state.score / total) * 100);

    // Grade calculation
    let grade = "";
    let icon = "";
    if (scorePercent >= 90) { grade = "A+ Outstanding — Ready for React!"; icon = "🏆"; }
    else if (scorePercent >= 75) { grade = "A — Excellent Foundation!"; icon = "🥇"; }
    else if (scorePercent >= 60) { grade = "B — Good Progress!"; icon = "👍"; }
    else if (scorePercent >= 40) { grade = "C — Needs More Practice"; icon = "📚"; }
    else { grade = "D — Review Days 1-5 Again"; icon = "🔄"; }

    el.resultIcon.textContent = icon;
    el.resultGreeting.textContent = `${icon} Well done, ${state.candidateName || "Developer"}!`;
    el.finalScorePercent.textContent = `${scorePercent}%`;
    el.resultSummary.textContent = `You scored ${state.score} out of ${total} questions correctly.`;
    el.resultGrade.textContent = grade;

    // Progress bar to 100% on completion
    el.progressBar.style.width = "100%";
    updateHeader();

    // Render per-question breakdown
    el.resultBreakdown.innerHTML = state.resultLog.map(item => `
        <div class="breakdown-item">
            <span class="icon">${item.isCorrect ? "✅" : "❌"}</span>
            <div>
                <p><strong>${item.topic}</strong><br>${item.question}</p>
                <p style="margin-top: 4px;">Your Answer: <strong style="color: ${item.isCorrect ? '#22c55e' : '#f43f5e'}">${item.selected}</strong></p>
                ${!item.isCorrect ? `<p>Correct Answer: <strong style="color: #22c55e">${item.correct}</strong></p>` : ""}
            </div>
        </div>
    `).join("");
}

// resetQuiz: Resets all state and returns to start screen
function resetQuiz() {
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.timeLeft = 20;
    state.resultLog = [];
    stopTimer();
    showScreen("start");
}

// ============================================================
// EVENT LISTENERS
// ============================================================

// Start Button — Validate name and begin quiz
el.startBtn.addEventListener("click", () => {
    const nameInput = el.candidateInput.value.trim();
    if (!nameInput) {
        el.candidateInput.style.borderColor = "#f43f5e";
        el.candidateInput.placeholder = "⚠️ Please enter your name first!";
        return;
    }
    state.candidateName = nameInput;
    showScreen("quiz");
    renderQuestion();
});

// Next Button — Advance to next question or show results
el.nextBtn.addEventListener("click", () => {
    state.currentIndex++;
    if (state.currentIndex < quizQuestions.length) {
        renderQuestion();
    } else {
        showResults();
    }
});

// Restart Button — Return to start screen
el.restartBtn.addEventListener("click", resetQuiz);

// Also allow pressing Enter to start
el.candidateInput.addEventListener("keydown", e => {
    if (e.key === "Enter") el.startBtn.click();
});
