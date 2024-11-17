// Get the form and result list elements
const healthForm = document.getElementById('health-monitoring-form');
const resultsList = document.getElementById('results-list');

// Add event listener for form submission
healthForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  // Get input values
  const heartRate = document.getElementById('heartRate').value;
  const bloodPressure = document.getElementById('bloodPressure').value;
  const bloodSugar = document.getElementById('bloodSugar').value;

  // Create new list item
  const listItem = document.createElement('li');
  
  // Analyze the input and provide feedback
  let heartRateFeedback = analyzeHeartRate(heartRate);
  let bloodPressureFeedback = analyzeBloodPressure(bloodPressure);
  let bloodSugarFeedback = analyzeBloodSugar(bloodSugar);

  // Add input values and feedback to the list item
  listItem.innerHTML = `
    <p><strong>Heart Rate:</strong> ${heartRate} BPM - ${heartRateFeedback}</p>
    <p><strong>Blood Pressure:</strong> ${bloodPressure} - ${bloodPressureFeedback}</p>
    <p><strong>Blood Sugar:</strong> ${bloodSugar} mg/dL - ${bloodSugarFeedback}</p>
  `;

  // Append the new list item to the results list
  resultsList.appendChild(listItem);

  // Clear form inputs
  healthForm.reset();
});

// Analyze heart rate
function analyzeHeartRate(heartRate) {
  if (heartRate < 60) return "Low (Consider checking with a healthcare provider)";
  if (heartRate > 100) return "High (May require attention)";
  return "Normal";
}

// Analyze blood pressure
function analyzeBloodPressure(bloodPressure) {
  const bpValues = bloodPressure.split('/');
  if (bpValues.length !== 2) return "Invalid Format";

  const systolic = parseInt(bpValues[0]);
  const diastolic = parseInt(bpValues[1]);

  if (systolic < 90 || diastolic < 60) return "Low Blood Pressure";
  if (systolic > 140 || diastolic > 90) return "High Blood Pressure";
  return "Normal";
}

// Analyze blood sugar
function analyzeBloodSugar(bloodSugar) {
  if (bloodSugar < 70) return "Low (Hypoglycemia)";
  if (bloodSugar > 125) return "High (Consider monitoring closely)";
  return "Normal";
}
