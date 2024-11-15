let isGallery1Show = true; // Track which content is visible
// Function to toggle between the two content sections
function toggleGallery() {
const gallery1 = document.getElementById('gallery1');
const gallery2 = document.getElementById('gallery2');
const button = document.querySelector('#home');
if (isGallery1Show) {
    // Show Content 2 and hide Content 1
    gallery1.style.display = 'none';
    gallery2.style.display = 'flex';
} else {
    // Show Content 1 and hide Content 2
    gallery2.style.display = 'none';
    gallery1.style.display = 'flex';
    // button.textContent = 'Switch to Content 2';
}
// Toggle the state
isGallery1Show = !isGallery1Show;
};

let isContent1Visible = true; // Track which content is visible
// Function to toggle between the two content sections
function toggleContent() {
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const button = document.querySelector('#home');
if (isContent1Visible) {
    // Show Content 2 and hide Content 1
    content1.classList.remove('visible');
    content2.classList.add('visible');
} else {
    // Show Content 1 and hide Content 2
    content2.classList.remove('visible');
    content1.classList.add('visible');
    // button.textContent = 'Switch to Content 2';
}
// Toggle the state
isContent1Visible = !isContent1Visible;
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const budget = document.getElementById('budget').value;
    const size = document.getElementById('size').value;
    const location = document.getElementById('location').value;
    const additionalInfo = document.getElementById('additionalInfo').value;
    const message = document.getElementById('message').value;

    // Get selected gender
    const relationship = document.querySelector('input[name="relationship"]:checked')?.value;

    // Get selected interests
    const demand = Array.from(document.querySelectorAll('input[name="demand[]"]:checked'))
                           .map(checkbox => checkbox.value)
                           .join(', ');
    // Get selected interests
    const services = Array.from(document.querySelectorAll('input[name="services[]"]:checked'))
                           .map(checkbox => checkbox.value)
                           .join(', ');

    // Send data using EmailJS
    emailjs.send("service_jdd6vlb", "template_w6t5fno", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        country: country,
        city: city,
        address: address,
        relationship: relationship,
        demand: demand,
        services: services,
        budget: budget,
        size: size,
        location: location,
        additionalInfo: additionalInfo,
        message: message
    })
    .then(function(response) {
       alert('Message sent successfully!');
       document.getElementById('contact-form').reset(); // Reset the form
    }, function(error) {
       alert('Failed to send message, please try again.');
       console.log('Error:', error);
    });
});

