document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Validate form input
    if (!username || !title || !content) {
        errorMessage.textContent = 'Please complete all fields before submitting.';
        return; // Exit the function if validation fails
    }

    errorMessage.textContent = ''; // Clear error message if all fields are filled

    // Create a blog post object
    const blogPost = {
        username,
        title,
        content
    };

    try {
        // Retrieve existing posts from localStorage or initialize an empty array
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        // Add the new post to the array
        posts.push(blogPost);

        // Store the updated posts array back to localStorage
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // Redirect to blog page
        window.location.href = 'blog.html'; // Correctly point to the blog page
    } catch (error) {
        console.error('Error accessing localStorage or parsing data:', error);
        errorMessage.textContent = 'An error occurred while saving your post. Please try again.';
    }
});