//load projects from the JSON file and populate the galery 
fetch("projects.json")
    .then((response) => response.json()) //convert the response to json
    .then((projects) => { //acces the array of project objects

        //populate the gallery here 
        //find the container in the index that we want to put this in 
        const gallery = document.getElementById("gallery");

        //loop through the projects array 
        projects.forEach((project) => {
            //create a card for each project
            const card = document.createElement("div"); 
            card.classList.add("card"); //adding card class for styling 
            card.innerHTML = `
            <img src="${project.images[0].src}" alt="${project.title} Screenshot">
            <h3>${project.title}</h3>
            `

            //add click even to open project details . when card is clicked the displayProject function is called with the corresponding project data
            card.addEventListener("click", () => displayProject(projects));

            gallery.appendChild(card); 
        })
    });


//function to display project details 
function displayProject(project){

}

//typing effect for welcome to my portfolio 
const typingText = "Welcome to my Portfolio!"
const typingElement = document.getElementById("typing-text")
const cursorElement = document.querySelector(".cursor");
let currentIndex = 0; 

//Function to type each letter
function type(){
    if (currentIndex < typingText.length){
        typingElement.textContent += typingText[currentIndex];
        currentIndex++;
        setTimeout(type, 200);
    }else{
        setTimeout(resetTyping, 1000);
    }

}

function resetTyping (){
    typingElement.textContent = "";
    currentIndex = 0
    type();
}

//start typing effect
type(); 