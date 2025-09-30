// Function to handle scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add a class that triggers the animation (e.g., slide-in)
            entry.target.classList.add('show-animate');
        } 
        // Optional: Remove class when out of view (for repeat animation on scroll)
        /* else {
            entry.target.classList.remove('show-animate');
        } */
    });
}, {
    threshold: 0.1 // Triggers when 10% of the element is visible
});

// Select all sections you want to observe
const animatedElements = document.querySelectorAll('.about, .skills, .projects, .contact');
animatedElements.forEach((el) => observer.observe(el));

// You'll need to define the 'show-animate' class in CSS for this to work!
