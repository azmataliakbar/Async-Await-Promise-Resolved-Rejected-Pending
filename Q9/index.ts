//^ Q9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.

// Function that repeats a given function for a specified number of times at a specified interval
function repeatFunction(func: () => void, interval: number, times: number): void {
  let count = 0;

  // Inner function that executes the provided function repeatedly
  function execute() {
    // Check if the count is less than the specified number of times
    if (count < times) {
      // Call the provided function
      func();
      // Increment the count
      count++;
      // Schedule the next execution after the specified interval
      setTimeout(execute, interval);
    }
  }
  // Initial invocation of the execute function to start the repetition
  execute();
}

// Example function to be repeated
const exampleFunction = () => {
  console.log("\n❤️❤️❤️ Respected! Governor Sindh Kamran Tissori, Thank you for being here today. We are honored to have you❤️❤️❤️");
};

// Example usage of repeatFunction: repeat exampleFunction 5 times with a 2-second interval
repeatFunction(exampleFunction, 2000, 5);
