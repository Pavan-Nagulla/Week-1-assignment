// Initialize counter variable
let counter = 0;

// Function to update and display the counter
function updateCounter() {
  counter++;
  console.log(counter);
}

// Start the counter
setInterval(updateCounter, 1000);
