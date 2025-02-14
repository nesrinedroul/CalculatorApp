function isOperator(char) {
    return ["+", "-", "*", "/", "÷", "×", "**"].includes(char);
}
function clearResult() {
    document.getElementById("result").value = ""; // Reset the display to empty
}
function toggleScientific() {
    const sciButtons = document.getElementById("scientific-buttons");
    const toggleButton = document.getElementById("toggle-sci");

    if (sciButtons.style.display === "none") {
        sciButtons.style.display = "grid"; // Show scientific buttons
        toggleButton.innerText = "B"; // Change the toggle button to "B" (Basic mode)
    } else {
        sciButtons.style.display = "none"; // Hide scientific buttons
        toggleButton.innerText = "S"; // Change it back to "S" (Scientific mode)
    }
}

function deleteChar() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
}
function calculate() {
    const resultInput = document.getElementById("result");

    try {
        // Replace ÷ and × for JavaScript compatibility
        const result = eval(resultInput.value.replace(/÷/g, "/").replace(/×/g, "*"));
        resultInput.value = result.toString();
    } catch (error) {
        resultInput.value = "Error!"; // If the input is invalid
    }
}
function appendvalue(value) {
    const resultInput = document.getElementById("result");
    // Prevent invalid inputs
    const lastChar = resultInput.value.slice(-1);
    if (
        (isOperator(lastChar) && isOperator(value)) || 
        (resultInput.value === "" && isOperator(value))
    ) {
        return; // Ignore invalid input
    }
    resultInput.value += value; 
}
// Event listeners for key inputs 
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || isOperator(key) || key === ".") {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteChar();
    } else if (key === "Escape") {
        clearResult();
    }
});
