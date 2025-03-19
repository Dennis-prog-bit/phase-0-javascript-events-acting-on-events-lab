// Your code here
const dodger = document.getElementById("dodger");

// Ensure the Dodger has an initial left style
dodger.style.left = "0px"; 

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) { // Prevent moving off the left edge
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    let left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left < 360) { // Prevent moving off the right edge (assuming a 400px game width)
        dodger.style.left = `${left + 10}px`;
    }
}

// Add Event Listeners for Arrow Keys
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});

// Export functions for testing if using Jest or Mocha
if (typeof module !== "undefined" && module.exports) {
    module.exports = { moveDodgerLeft, moveDodgerRight };
}
