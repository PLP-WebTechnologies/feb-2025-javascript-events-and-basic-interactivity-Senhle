// Event Handling

// Explore Button Click - Changes text and background
document.getElementById("exploreButton").addEventListener("click", function() {
    this.innerText = "Exploring...";
    this.style.backgroundColor = "green";
    alert("Welcome to Tech Innovations!");
});

// Image Gallery Slideshow
const images = ["tech1.jpg", "tech2.jpg", "tech3.jpg"];
let currentImageIndex = 0;

function changeImage() {
    document.getElementById("imageGallery").src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds

// Tabs for Latest Tech News
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        document.getElementById(this.dataset.target).classList.add("active");
    });
});

// Form Validation
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    const emailField = document.getElementById("email");
    if (emailField.value === "") {
        event.preventDefault();
        alert("Email is required!");
    } else {
        alert("Thank you for subscribing!");
    }
});
