document.addEventListener("DOMContentLoaded", () => {
    // Load projects from the JSON file and populate the gallery
    fetch("projects.json")
        .then((response) => response.json()) // Convert the response to JSON
        .then((projects) => {
            populateGallery(projects);
        })
        .catch((error) => {
            console.error("Failed to load projects:", error);
        });

    // Typing effect for "Welcome to my Portfolio"
    startTypingEffect();

    // Close button event listener
    document.getElementById("close-modal").addEventListener("click", closeModal);

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            closeModal();
        }
    });
});

// Function to populate the gallery with project cards
function populateGallery(projects) {
    const gallery = document.getElementById("gallery");

    projects.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card"); // Adding card class for styling
        card.innerHTML = `
            <img src="${project.cover_image}" alt="${project.title} Screenshot">
            <h3>${project.title}</h3>
        `;

        // Add click event to rotate card and open modal
        card.addEventListener("click", () => {
            card.classList.add("rotate");
            setTimeout(() => openModal(project), 500); // Delay to allow rotation animation
        });

        gallery.appendChild(card);
    });
}

// Function to open the modal and display project details
function openModal(project) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-image").src = project.cover_image;
    document.getElementById("modal-details").textContent = project.details;
    document.getElementById("modal-github").href = project.github;

    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide the modal

    // Reset any rotated cards
    const rotatedCards = document.querySelectorAll(".card.rotate");
    rotatedCards.forEach((card) => card.classList.remove("rotate"));
}

// Typing effect for "Welcome to my Portfolio"
function startTypingEffect() {
    const typingText = "Welcome to my Portfolio!";
    const typingElement = document.getElementById("typing-text");
    let currentIndex = 0;

    function type() {
        if (currentIndex < typingText.length) {
            typingElement.textContent += typingText[currentIndex];
            currentIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(resetTyping, 1000);
        }
    }

    function resetTyping() {
        typingElement.textContent = "";
        currentIndex = 0;
        type();
    }

    type();
}
