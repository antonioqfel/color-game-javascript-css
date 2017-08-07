'use strict';

var numSquares = 6;

// Array that contains the list of colors
var colors = generateRandomColors(6);

// Select all the six square in the game
var squares =  document.querySelectorAll('.square');
// Randomly select the picked color
var pickedColor = pickColor();
// Select the element <span id="colorDisplay">
var colorDisplay = document.querySelector('#colorDisplay');

// Update the text of the span
colorDisplay.textContent = pickedColor;
// Select the element <span id="message">
var messageDisplay = document.querySelector('#message')
// Select the element h1
var h1 = document.querySelector('h1');
// Select the element <button id="reset">
var resetButton = document.querySelector('#reset');
// Select the element <button id="easyBtn">
var easyBtn = document.querySelector('#easyBtn');
// Select the element <button id="hardtBtn">
var hardtBtn = document.querySelector('#hardtBtn');



easyBtn.addEventListener('click', function () {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }

});

hardBtn.addEventListener('click', function () {
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';

    }
});

// Event listener on the reset button
resetButton.addEventListener('click', function () {
    // Generate all new color
    colors = generateRandomColors(numSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // Change colors of squares
    // Loop through the array squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
})


// Loop through the array squares
for(var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener('click', function () {
        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play again?'
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again!';
        }
    });
}

function changeColors(color) {
    // Loop through all squares
    for(var i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make and Array
    var arr = [];
    // Repeat num times
    for(var i = 0; i < num; i++) {
        // Get random color and push into array
        arr.push(randomColor());
        
    }
    // Return that array
    return arr;

    function randomColor() {
        // Pick a 'red' from 0 - 255
        var r = Math.floor(Math.random() * 256);
        // Pick a 'green' from 0 - 255
        var g = Math.floor(Math.random() * 256);
        // Pick a 'blue' from 0 - 255
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }

}

