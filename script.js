
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "DOM Manipulation is Fun!";

const textContentParagraphs = document.getElementsByClassName("text-content");
for (let paragraph of textContentParagraphs) {
    paragraph.style.color = "blue";
}

const mainImage = document.getElementById("main-image");
mainImage.src = "https://via.placeholder.com/200";
mainImage.alt = "Updated Placeholder Image";

const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "#f0f8ff"; 

const containerParagraphs = containerDiv.querySelectorAll("p");
containerParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated paragraph ${index + 1} inside the container.`;
});
