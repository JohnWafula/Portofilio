document.addEventListener("DOMContentLoaded", function () {
    // Your advanced JavaScript code here

    // Example dynamic portfolio item addition:
    const portfolioItems = [
        {
            title: "Web Development Project",
            image: "web_project.jpg",
            description: "This is a description of the web development project.",
            link: "#",
        },
        {
            title: "Electrical Works Project",
            image: "electrical_project.jpg",
            description: "This is a description of the electrical works project.",
            link: "#",
        },
        // Add more portfolio items here
    ];

    const portfolioItemsContainer = document.getElementById("portfolio-items");
    portfolioItems.forEach((item) => {
        const portfolioItem = document.createElement("div");
        portfolioItem.classList.add("portfolio-item");
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank">Learn More</a>
        `;
        portfolioItemsContainer.appendChild(portfolioItem);
    });

    // Form submission handling
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Send form data to your backend for processing, or handle it using JavaScript
        // Display a confirmation message to the user
    });
});
