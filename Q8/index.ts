//^ Q8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.

// Asynchronous function that waits for five promises to resolve and returns their results in an array
async function awaitPromises(promise1: Promise<any>, promise2: Promise<any>, promise3: Promise<any>, promise4: Promise<any>, promise5: Promise<any>): Promise<any[]> {

  // Logging messages to indicate the state and timing of the promises
  console.log("\nNo setTimeOut for 1st & 2nd promises but setTimeOut 2, 3 & 5 seconds for 3rd, 4th & 5th promises.");
  console.log("All results will print at same time in an array after 5 seconds.");
  console.log("�������... Waiting for all promises to resolve ...�������");

  // Await the resolution of all five promises
  const result1 = await promise1;
  const result2 = await promise2;
  const result3 = await promise3;
  const result4 = await promise4;
  const result5 = await promise5;

  // Return an array containing the results of all five promises
  return [result1, result2,result3, result4, result5];
}

// Create the first promise that resolves immediately with a result
const promise1 = Promise.resolve("First position: Sir Zia");
// Create the second promise that resolves immediately with a result
const promise2 = Promise.resolve("Second position: Sir Amin");

// Create the third promise that resolves after a delay of 2 seconds with a result
const promise3 = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Third position: Sir Bilal"), 2000);
});
// Create the fourth promise that resolves after a delay of 3 seconds with a result
const promise4 = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Fourth position: Sir Fahad"), 3000);
});
// Create the fifth promise that resolves after a delay of 5 seconds with a result
const promise5 = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Fifth position: Sir Asharib"), 5000);
});

// Immediately Invoked Function Expression (IIFE) to handle asynchronous code
(async () => {
  // Await the awaitPromises function with all five promises and store the results in 'results'
  const results = await awaitPromises(promise1, promise2, promise3, promise4, promise5);
  // Log the results array to the console
  console.log("\nResults:", results); // Logging the results array
  console.log("\n✨✨✨... All promises are now resolved! ...✨✨✨");
  
  // Log a summary explaining the behavior of awaitPromises
  console.log("\nSummary: awaitPromises(promise1, promise2, promise3, promise4, promise5).\nThe function awaitPromises waits for promises 1 & 2 to resolve immediately.\nIt then waits for promises 3, 4 & 5 to resolve after 2, 3 & 5 seconds.\nOnly after all promises are resolved it return an array of their results.");
  
})();
