// Password Gate
const password = "love";
let userPassword = prompt("Enter the password:");

if (userPassword !== password) {
    alert("Access denied!");
    throw new Error("Access denied!");
}

// Love Chart
function drawLoveChart(loveLevel) {
    const canvas = document.getElementById('loveChart');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'pink';
    ctx.fillRect(10, 10, loveLevel * 2, 20); // Simple bar chart
}

// Countdown Timer
function startCountdown(seconds) {
    let countdown = seconds;
    const timer = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            clearInterval(timer);
            alert("Countdown finished!");
        }
    }, 1000);
}

// Milestones
const milestones = [
    { date: new Date("2025-06-01"), event: "First Date" },
    { date: new Date("2026-03-01"), event: "Anniversary" },
];

function checkMilestones() {
    const now = new Date();
    milestones.forEach(milestone => {
        if (milestone.date <= now) {
            alert(`Milestone reached: ${milestone.event}`);
        }
    });
}

// Particles
function createParticles() {
    // Add particle creation logic (e.g., using HTML Canvas).
}

// Confetti Animations
function launchConfetti() {
    // Add confetti animation logic.
}

// Initialize
drawLoveChart(50);
startCountdown(10);
checkMilestones();
createParticles();
launchConfetti();