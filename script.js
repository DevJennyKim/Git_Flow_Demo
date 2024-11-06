const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },  
  {
    author: "Renu",
    poem: "Love and believe in yourself \n Stand tall \n You are strong \n Your are capable \n hello",
    image: "life.jpg",
  },  
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
