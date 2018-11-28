
const container = document.querySelector(".container");
let containerDimension = 480;
let squareDimension = 16;
let monoOn = false;
let mouseDown = 0;

createContainer();
createSquares(squareDimension);
addSquareEvents();
addResetEvent();
addSizeEvent();
addMouseEvents()

// create the container for the squares
function createContainer(){
    container.style.height = `${containerDimension}px`;
    container.style.width = `${containerDimension}px`;
}

// create the squares
function createSquares(sqDimension){
    let numberOfSquares = Math.pow(sqDimension, 2);
    for (let i = 0; i < numberOfSquares; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = i.toString();
        square.style.height = `${containerDimension/sqDimension}px`;
        square.style.width = `${containerDimension/sqDimension}px`;
        square.style.backgroundColor = 'white';
        container.appendChild(square);
    }
}

function Randomize(num){
    return Math.floor(Math.random()*num);
}

// Add EventListnere to the squares
function addSquareEvents(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(sq => {
        sq.addEventListener('mouseover', (e) => {
            if (mouseDown) {
                deleteColor(sq.id);
            }
            else{
                changeColor(sq.id);           
            }            
        })
        sq.addEventListener('click', (e) => {
            deleteColor(sq.id);
        })

    });
}

function changeColor(squareId){
    let square = document.getElementById(squareId);
    let color;
    if (monoOn)
    {
        color = `rgba(255, 255, 255, 1.0)`;
    }
    else 
    {     
        color = `rgba(0,0,0, 1.0)`;
    }
    square.style.backgroundColor = color;
}

function deleteColor(squareId){
    let square = document.getElementById(squareId);
    square.style.backgroundColor = 'white';
}

// Add Eventlistner to reset button
function addResetEvent(){
    document.querySelector("#btnReset").addEventListener('click', (e) => {
        resetContainer(squareDimension);
    });
}
// Add Eventlistner to size button
function addSizeEvent(){
    const btn = document.querySelector("#btnSize");

    btn.addEventListener('click', (e) => {
        let newSize = window.prompt('How many squares on each side this time?');
        squareDimension = newSize;
        resetContainer(newSize);
    });
}

function resetContainer(size) {
    container.innerHTML = "";
    createSquares(size);
    addSquareEvents();
}

// Add EventListener to mousebutton (used for press to delete function)
function addMouseEvents(){
    document.body.onmousedown = function() {
        ++mouseDown;
    }
    document.body.onmouseup = function() {
        --mouseDown;
    }
}
