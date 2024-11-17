// Get form and response div elements
const nutritionForm = document.getElementById('nutrition-form');
const formResponse = document.getElementById('form-response');

// Form submission event listener
nutritionForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission refresh

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const age = document.getElementById('age').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;

  // Display a confirmation message
  formResponse.textContent = `Thank you, ${fullName}. Your request for personalized nutrition advice has been submitted! We will contact you at ${contactNumber}.`;

  // Clear form after submission
  nutritionForm.reset();
});
