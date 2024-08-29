document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Log form data to console (or handle it as needed)
    console.log('Username:', username);
    console.log('Title:', title);
    console.log('Content:', content);

    // You can add more functionality here, like saving the form data to a database or displaying it on the page
});