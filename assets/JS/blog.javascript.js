document.addEventListener('DOMContentLoaded', function() {
    const postsList = document.getElementById('posts-list');
    const toggleButton = document.getElementById('toggle-mode');
    const backButton = document.getElementById('back-button');

    // Retrieve posts from localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Check if posts are correctly retrieved
    console.log('Retrieved posts:', posts);

    // Function to display posts
    function displayPosts() {
        postsList.innerHTML = ''; // Clear the existing content

        // Check if there are any posts to display
        if (posts.length === 0) {
            postsList.innerHTML = '<p>No posts available. Go back to create one!</p>';
            return;
        }

        // Display each post
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <small>By: ${post.username}</small>
            `;
            postsList.appendChild(postElement);
        });
    }

    // Initial call to display posts
    displayPosts();

    // Toggle dark/light mode
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = 'Switch to Light Mode';
        } else {
            this.textContent = 'Switch to Dark Mode';
        }
    });

    // Back button functionality
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Navigate back to the landing page
    });
});