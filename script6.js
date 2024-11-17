// Get form and response div elements
const exerciseForm = document.getElementById('exercise-form');
const formResponse = document.getElementById('form-response');

// Form submission event listener
exerciseForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission refresh

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const age = document.getElementById('age').value;
  const contactNumber = document.getElementById('contactNumber').value;
  const exerciseGoals = document.getElementById('exerciseGoals').value;

  // Display a confirmation message
  formResponse.textContent = `Thank you, ${fullName}. Your request for personalized exercise advice has been submitted! We will contact you at ${contactNumber}.`;

  // Clear form after submission
  exerciseForm.reset();
});
