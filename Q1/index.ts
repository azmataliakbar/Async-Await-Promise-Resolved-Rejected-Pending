//^ Q1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".
//& example-1

/*
// Function that returns a Promise which resolves after a given delay (in milliseconds)
function delayedMessage(delay:number): Promise<void> {

  console.log("\nStart: The below message will appear after delay of 2 seconds.");

   // Returning a new Promise that resolves after the specified delay
  return new Promise(resolve => setTimeout(resolve, delay));

}

// Asynchronous function that waits for the delayedMessage function to complete
async function hello(): Promise<void> {

// Await the delayedMessage function with a delay of 2000 milliseconds (2 seconds)
  await delayedMessage(2000);

  // Log the message after the delay
  console.log("\nMessage: Hello to Typescript World.");

  // Log the end message indicating the above message has been printed successfully after the delay
  console.log("\nEnd: The above message is successfully printed after delay.");

}

// Call the hello function
hello();
*/

//& example-2
// Function that returns a Promise which resolves after a given delay (in milliseconds)
function delayedMessage(delay:number): Promise<void> {

  console.log("\nStart: The below message will appear after delay of 2 seconds.");

  // Returning a new Promise that resolves after the specified delay
  return new Promise(resolve => setTimeout(resolve, delay));

}

// Asynchronous function that waits for the delayedMessage function to complete
async function hello(): Promise<string> {

// Await the delayedMessage function with a delay of 2000 milliseconds (2 seconds)
  await delayedMessage(2000);

  // Return the message after the delay
  return "\nMessage: Hello to Typescript World.";

}

// Call the hello function and log the returned message to the console once the Promise is resolved
hello().then(message => console.log(message));
