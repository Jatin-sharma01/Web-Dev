// Given 5 boxes, assign a random color and a random background to each box using DOM concepts
console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 

// Function to generate random color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a new palette
function generatePalette() {
    document.querySelectorAll('.color-box').forEach(colorBoxElement => {
        const boxElement = colorBoxElement.querySelector('.box');
        const hexDisplay = colorBoxElement.querySelector('.hex-code');
        
        const newColor = generateRandomColor();
        boxElement.style.backgroundColor = newColor;
        
        if (hexDisplay) hexDisplay.textContent = newColor;
    });
}

// Add event listener for spacebar and enter key presses
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
        generatePalette();
        event.preventDefault(); // Prevent default spacebar/enter behavior
    }
});

// Initial palette generation on page load
generatePalette();