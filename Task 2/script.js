// JavaScript to manage image gallery and form validation

// Array to store images dynamically
let imageArray = [];

// Function to add an image to the gallery
function addImage() {
    const newImage = prompt("Enter the URL of the mobile image:");
    if (newImage) {
        imageArray.push(newImage);
        updateImageGallery();
    }
}

// Function to update the image gallery display
function updateImageGallery() {
    const container = document.getElementById("imageContainer");
    container.innerHTML = '';  // Clear current gallery
    imageArray.forEach((imageUrl, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = `Mobile ${index + 1}`;
        imgElement.onclick = () => removeImage(index);  // Allow removal on click
        container.appendChild(imgElement);
    });
}

// Function to remove an image from the gallery
function removeImage(index) {
    imageArray.splice(index, 1);
    updateImageGallery();
}

// Add Event Listener to the "Add Mobile Image" Button
document.getElementById("addImageBtn").addEventListener("click", addImage);

// Form validation for email
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    
    if (!validateEmail(email)) {
        emailError.textContent = "Email is not valid. Please enter a correct email.";
    } else {
        emailError.textContent = "";  // Clear the error
        alert("Form Submitted Successfully!");
        // Here you can handle the form data, like sending it to a server.
    }
});

// Function to validate email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
