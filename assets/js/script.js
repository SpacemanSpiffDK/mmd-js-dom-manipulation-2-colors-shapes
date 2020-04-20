// JS by Dan Høegh
// UCN MMD 2020

let shapes = ['square', 'circle', 'diamond'];
let colors = ['red','purple', 'blue','teal', 'green', 'chartreuse', 'yellow', 'orange'];

document.querySelector('#generateShapes').addEventListener('click', generateShapes);
document.querySelector('#changeFigures').addEventListener('click', changeFigures);

function generateShapes(){
    let amount = 60; // set an amount og figures we want to generate
    for (let i = 0; i < amount; i++){
        let box = document.createElement('div'); // create e new div to be a 'box' div
        box.classList.add('box'); // add the box class to the new div element
        let figure = document.createElement('div'); // create another div to be the figure inside the box-div
        figure.classList.add(randomFromArray(shapes)); // add a random shape to the figure div
        figure.classList.add(randomFromArray(colors)); // add a color shape to the figure div
        box.appendChild(figure); // append the figure to the box div
        document.querySelector('#output').appendChild(box); // append the box div to the output div in html
    }
}

function changeFigures(){
    let figures = document.querySelectorAll('div.box > div'); // get all the divs inside divs with the .box class
    figures.forEach((element) => {
        element.className = ''; // remove all values in the class attribute
        element.classList.add(randomFromArray(shapes)); // set a new shape in the class attribute
        element.classList.add(randomFromArray(colors)); // set a new color in the class attribute
    });
}

function randomFromArray(arr){
    let randomIndex = Math.floor(Math.random() * arr.length); // generates a random natural number with a max value from the length of the array
    return arr[randomIndex]; // use the random number to return an item from the array
}

// some fun auto-updates
generateShapes(); // generate some shapes
let x = setInterval(changeFigures, 1000); // change the figures every 1 second (1000 milliseconds)