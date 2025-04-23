document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all sections and links
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.classList.add('active');
            
            // Scroll to top of section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Default to showing home section
    document.querySelector('.navbar a[href="#about"]').classList.add('active');
    document.getElementById('about').classList.add('active');
    
    // Form submission handlers
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully! (This is a demo)');
            if(form.id !== 'booking-form') {
                this.reset();
            }
        });
    });
    
    // Initialize date picker with current date
    const dateInput = document.getElementById('date');
    if(dateInput) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }
    
    // Initialize time pickers
    const timeStart = document.getElementById('time-start');
    const timeEnd = document.getElementById('time-end');
    if(timeStart && timeEnd) {
        timeStart.value = '09:00';
        timeEnd.value = '17:00';
    }
});