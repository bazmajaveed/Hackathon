// TypeScriptfor the resume builder functionality
// Capture references to form and display area
var resumeForm = document.getElementById('resumeForm');
var resumeDisplay = document.getElementById('resumeDisplay');
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    generateResume();
});
// Function to generate resume preview
function generateResume() {
    // Collect input values
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Create resume HTML dynamically
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Career Objective</h3>\n        <p>").concat(objective, "</p>\n\n        <h3>Education </h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    // Insert generated HTML into display element
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display element is missing.');
    }
}
