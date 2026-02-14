// LOADING SCREEN
let loadText = document.getElementById("loading-text");
let loader = document.getElementById("loader");
let percent = 0;

let loadingInterval = setInterval(() => {
    percent += 2; // Thora fast kiya hai taake user wait na kare
    loadText.innerText = "Loading Secure Modules: " + percent + "%";
    
    if(percent >= 100) {
        clearInterval(loadingInterval);
        loader.style.opacity = "0"; // Fade out effect
        
        setTimeout(() => {
            loader.style.display = "none";
            startTypewriter(); // Loader khatam hone ke baad typing start hogi
        }, 500);
    }
}, 30);

// TYPEWRITER EFFECT
const text = "Cybersecurity Enthusiast & Ethical Hacker";
let i = 0;
const typewriterElement = document.querySelector(".typewriter");

function startTypewriter() {
    if(i < text.length){
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(startTypewriter, 70);
    }
}

// SCROLL REVEAL ANIMATION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var j = 0; j < reveals.length; j++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[j].getBoundingClientRect().top;
        var elementVisible = 100; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            reveals[j].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Ek dafa page load hone par check kare ga
setTimeout(reveal, 1500);

const terminalInput = document.getElementById('terminal-input');
const terminalBody = document.getElementById('terminal-body');

const commands = {
    'help': 'Available commands: about, skills, hackathon, clear',
    'about': 'Amna Noor: Cybersecurity Student & Full-Stack Developer.',
    'skills': 'React, FastAPI, Docker, K8s, JWT, Python, SQL.',
    'hackathon': 'Status: Active. Working on AI-Cloud Security Ecosystem.',
};

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.toLowerCase().trim();
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        if (input === 'clear') {
            terminalBody.innerHTML = '';
        } else if (commands[input]) {
            line.innerHTML = `<span class="prompt">amna@root:~$</span> ${input}<br><span style="color: #8892b0">${commands[input]}</span>`;
            terminalBody.insertBefore(line, terminalInput.parentElement);
        } else {
            line.innerHTML = `<span class="prompt">amna@root:~$</span> ${input}<br><span style="color: #ff5f56">Command not found.</span>`;
            terminalBody.insertBefore(line, terminalInput.parentElement);
        }
        
        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});