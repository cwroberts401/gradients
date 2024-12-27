// Get the canvas and context
const canvas = document.getElementById('gradientCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800; // Set canvas width
canvas.height = 400; // Set canvas height

// Function to generate sinusoidal gradient
function drawSinusoidalGradient(frequency) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    
    // Generate colors based on sine function
    for (let i = 0; i <= canvas.width; i++) {
        const value = Math.sin(i * frequency * 0.01) * 0.5 + 0.5; // Normalize sine value to [0, 1]
        const grayValue = Math.round(value * 255); // Convert to grayscale
        const color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`; // Create a grayscale color
        gradient.addColorStop(i / canvas.width, color); // Add color stop to gradient
    }

    ctx.fillStyle = gradient; // Set fill style to gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with the gradient
}

// Initial draw with default frequency
let frequency = 10;
drawSinusoidalGradient(frequency);

// Update frequency and redraw on slider change
const frequencySlider = document.getElementById('frequencySlider');
const frequencyValueDisplay = document.getElementById('frequencyValue');
const frequencyInput = document.getElementById('frequencyInput');

// Function to update frequency and redraw gradient
function updateFrequency(value) {
    frequency = value;
    frequencyValueDisplay.textContent = frequency; // Update displayed frequency
    drawSinusoidalGradient(frequency); // Redraw gradient with new frequency
}

// Slider input event
frequencySlider.addEventListener('input', (event) => {
    updateFrequency(event.target.value);
    frequencyInput.value = event.target.value; // Sync input with slider
});

// Numeric input event
frequencyInput.addEventListener('input', (event) => {
    const value = event.target.value;
    frequencySlider.value = value; // Sync slider with input
    updateFrequency(value);
});

// Set initial values
frequencyInput.value = frequency; // Sync input with initial frequency
