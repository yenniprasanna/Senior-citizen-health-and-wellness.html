// Get form and response div elements
const counselingForm = document.getElementById('counseling-form');
const formResponse = document.getElementById('form-response');

// Form submission event listener
counselingForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission refresh

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const age = document.getElementById('age').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const counselingNeeds = document.getElementById('counselingNeeds').value;

  // Display a confirmation message
  formResponse.textContent = `Thank you, ${fullName}. Your request for more information on mental health counseling has been submitted! We will contact you at ${contactNumber}.`;

  // Clear form after submission
  counselingForm.reset();
});
