// Get form and response div elements
const therapyForm = document.getElementById('therapy-form');
const formResponse = document.getElementById('form-response');

// Form submission event listener
therapyForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission refresh

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const age = document.getElementById('age').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const therapyDetails = document.getElementById('therapyDetails').value;

  // Display a confirmation message
  formResponse.textContent = `Thank you, ${fullName}. Your request for more information on physical therapy has been submitted! We will contact you at ${contactNumber}.`;

  // Clear form after submission
  therapyForm.reset();
});
