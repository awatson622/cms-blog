// Function to toggle visibility of a DOM element
function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || !element.style.display) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  // Example code to handle form submission
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data here (e.g., send it to the server using AJAX)
    console.log('Form submitted!', formData);
  });
  