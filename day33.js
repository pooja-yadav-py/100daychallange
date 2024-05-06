console.log("JavaScript file is executed.");

// Random hexadecimal color generator
const randomHexadecimal = () => {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
}

// Get the <h1> element
let h1Element = document.querySelector('h1');
console.log("Selected h1 element:", h1Element);

// Check if the <h1> element exists
if (h1Element) {
    // Generate random color
    let color = randomHexadecimal();
    console.log("Generated color:", color);

    // Apply the generated color to the <h1> element
    h1Element.style.backgroundColor = color;
} else {
    console.warn('No <h1> element found in the document.');
}
