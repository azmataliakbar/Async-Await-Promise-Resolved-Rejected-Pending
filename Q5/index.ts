
//^ Q5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.
//& example-1
/*
// Asynchronous function that logs the result of a promise to the console
async function logPromiseResult(promise: Promise<any>): Promise<void> {
  try {
      // Await the resolution of the promise
      const result = await promise;

      // Log the resolved value of the promise to the console
      console.log("\nPromise resolved with:", result);
  } catch (error) {

      // Catch and log any errors if the promise is rejected
      console.error("Promise rejected with:", error);
  }
}

// Create a new promise that resolves after a delay of 2 seconds with a message
const examplePromise = new Promise<string>((resolve, reject) => {

  // Simulating a delay
  setTimeout(() => resolve("💥 Hello, World!💥"), 2000); // Simulating a delay
});

// Call the logPromiseResult function with the examplePromise
logPromiseResult(examplePromise);
*/

//& example-2

// Asynchronous function that logs the result of a promise to the console
async function logPromiseResult(promise: Promise<any>): Promise<void> {
  // Log a message indicating that the promise result will be logged after 2 seconds
console.log("\n⏳⏳⏳ Logging promise result to console after 2 seconds. ⏳⏳⏳");

  const result = await promise;
  console.log("\n🏅🏅🏅 Promise resolved with information to all students:", result);

}

// Create a new promise that resolves after a delay of 2 seconds with a message
const examplePromise = new Promise<string>((resolve) => {

  setTimeout(() => resolve("💥💥💥 Be ready for, GIAIC exam! 💥💥💥"), 2000);

});

// Call the logPromiseResult function with the examplePromise
logPromiseResult(examplePromise);
