const themeToggleButton = document.getElementById('theme-toggle');
        const homeItem = document.querySelector('.navBar-home');

        // Function to toggle the theme
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');

            // Change the icon based on the current theme
            if (document.body.classList.contains('light-theme')) {
                themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Change back to moon icon
            } else {
                themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Change to sun icon
            }

        });

        document.addEventListener('scroll', function() {
            const cards = document.querySelectorAll('.projects-card');
            const scrollPosition = window.scrollY + window.innerHeight;
        
            cards.forEach(card => {
                if (scrollPosition > card.offsetTop + card.offsetHeight / 4) {
                    card.classList.add('scrolled');
                }
            });
        });
        
        const hamburger = document.getElementById('hamburger-icon');
        const navLinks = document.getElementById('nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-visible');
            navLinks.classList.toggle('mobile-hidden');
        });
        
// Select all navigation links
const navHeaderLinks = document.querySelectorAll('.navBar-links a');

// Function to remove the active class from all links and add it to the clicked link
function setActiveLink(event) {
    // Prevent the default anchor behavior
    event.preventDefault();
    
    // Remove the active class from all links
    navHeaderLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add the active class to the clicked link
    event.currentTarget.classList.add('active');

    // Get the target section ID from the href attribute
    const targetId = event.currentTarget.getAttribute('href');
    
    // If the target ID is not a placeholder, scroll to it
    if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Smooth scroll to the section
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align the top of the section to the top of the viewport
            });
        }
    }
}

// Attach click event listener to each link
navHeaderLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});