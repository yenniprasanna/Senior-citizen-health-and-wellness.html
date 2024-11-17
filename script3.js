// Get form and response div elements
const homeCareForm = document.getElementById('home-care-form');
const formResponse = document.getElementById('form-response');

// Form submission event listener
homeCareForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission refresh

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const age = document.getElementById('age').value;
  const address = document.getElementById('address').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const serviceNeeded = document.getElementById('serviceNeeded').value;

  // Display a confirmation message
  formResponse.textContent = `Thank you, ${fullName}. Your home care service request has been submitted! We will contact you at ${contactNumber} to confirm.`;

  // Clear form after submission
  homeCareForm.reset();
});
