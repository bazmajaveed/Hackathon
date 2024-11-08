// TypeScriptfor the resume builder functionality

// Capture references to form and display area
var resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
var resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;


resumeForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    generateResume();
});

// Function to generate resume preview
function generateResume() {
    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    

    // Create resume HTML dynamically
    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Career Objective</h3>
        <p>${objective}</p>

        <h3>Education </h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    // Insert generated HTML into display element
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    } else {
        console.error('Resume display element is missing.');
    }
}

