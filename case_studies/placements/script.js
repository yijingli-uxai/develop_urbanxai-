// 1. Reading Progress Bar
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
    
    // 2. Trigger Scroll Reveal
    reveal();
};

// 3. Reveal Animation Logic
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Initial check
reveal();

// Function to handle automatic "Next" link logic
function setupNextStoryNav() {
    // 1. Get current page name (e.g., "story1.html")
    let path = window.location.pathname;
    let page = path.split("/").pop();
    
    // 2. Extract the number from the filename
    let currentNum = parseInt(page.replace('story', '').replace('.html', ''));
    
    // 3. Calculate next number (Loop back to 1 if at 12)
    let nextNum = currentNum < 12 ? currentNum + 1 : 1;
    
    // 4. Update the link and title automatically
    const nextLink = document.querySelector('.next-link');
    const nextTitle = document.getElementById('next-story-title');
    
    if(nextLink && nextTitle) {
        nextLink.href = `story${nextNum}.html`;
        nextTitle.innerText = `Project Story ${nextNum}`;
    }
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', setupNextStoryNav);
