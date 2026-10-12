
const languages = [
    {
        name: "HTML",
        description:
            "HTML is a markup language used to structure content on web pages.",
        use:
            "Main uses: headings, paragraphs, images, links, and forms."
    },
    {
        name: "CSS",
        description:
            "CSS is a style sheet language used to control the appearance of web pages.",
        use:
            "Main uses: colors, layouts, animations, and responsive design."
    },
    {
        name: "JavaScript",
        description:
            "JavaScript is a programming language that adds logic and interactivity to web pages.",
        use:
            "Main uses: event handling, form validation, dynamic interfaces, and web applications."
    },
    {
        name: "Python",
        description:
            "Python is a programming language known for its readable syntax and versatility.",
        use:
            "Main uses: automation, data analysis, artificial intelligence, and web development."
    },
    {
        name: "Java",
        description:
            "Java is an object-oriented programming language used to build applications across different platforms.",
        use:
            "Main uses: enterprise software, backend systems, and Android development."
    }
];

// Select HTML elements
const languageList = document.getElementById("language-list");
const detailTitle = document.getElementById("detail-title");
const detailDescription = document.getElementById("detail-description");
const detailUse = document.getElementById("detail-use");

// Display the selected item's details
function showDetails(language) {
    detailTitle.textContent = language.name;
    detailDescription.textContent = language.description;
    detailUse.textContent = language.use;
}

// Create the list
languages.forEach((language, index) => {
    const item = document.createElement("li");

    item.classList.add("language-item");
    item.textContent = language.name;
    item.tabIndex = 0;
    item.setAttribute("role", "button");

    if (index === 0) {
        item.classList.add("active");
        showDetails(language);
    }

    // Handle mouse clicks and keyboard activation
    function selectLanguage() {
        document.querySelectorAll(".language-item").forEach((element) => {
            element.classList.remove("active");
        });

        item.classList.add("active");
        showDetails(language);
    }

    item.addEventListener("click", selectLanguage);

    item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectLanguage();
        }
    });

    languageList.appendChild(item);
});
