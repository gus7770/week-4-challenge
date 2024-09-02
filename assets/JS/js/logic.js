// Select the theme icon
const themeIcon = document.getElementById('theme');

// Add a click event listener to the theme icon
themeIcon.addEventListener('click', function() {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Check the current theme status
    if (themeIcon.dataset.status === 'sun') {
        // Switch to dark mode: update icon and status
        themeIcon.src = themeIcon.dataset.moon;
        themeIcon.dataset.status = 'moon';
    } else {
        // Switch to light mode: update icon and status
        themeIcon.src = themeIcon.dataset.sun;
        themeIcon.dataset.status = 'sun';
    }
});