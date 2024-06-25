//^ Q4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.

// Asynchronous function that waits for two promises to resolve and returns their results in an array
async function awaitBothPromises(promise1: Promise<any>, promise2: Promise<any>): Promise<any[]> {

  // Logging messages to indicate the state and timing of the promises
  console.log("\nNo setTimeOut for 1st promise but setTimeOut 3 seconds for 2nd promise.");
  console.log("Both results will print at same time in an array after 3 seconds.");
  console.log("✨... Waiting for both promises to resolve ...✨");

  // Await the resolution of both promises
  const result1 = await promise1;
  const result2 = await promise2;

  // Return an array containing the results of both promises
  return [result1, result2];
}

// Creating the first promise that resolves immediately with a result
const promise1 = Promise.resolve("First result: Plan A");

// Creating the second promise that resolves after 3 seconds with a result
const promise2 = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Second result: Plan B"), 3000); 
});

// Immediately Invoked Function Expression (IIFE) to handle asynchronous code
(async () => {

  // Await the awaitBothPromises function with promise1 and promise2 and store the results in 'results'
  const results = await awaitBothPromises(promise1, promise2);

  // Log the results array to the console
  console.log("\nResults:", results);
  console.log("\n✨... Both promises are now resolved! ...✨");

  // Log a summary explaining the behavior of awaitBothPromises
  console.log("\nSummary: awaitBothPromises(promise1, promise2).\nThe function awaitBothPromises waits for promise1 to resolve immediately.\nIt then waits for promise2 to resolve after 3 seconds.\nOnly after both promises are resolved does it return an array of their results.");
  
})();