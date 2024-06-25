//^Q10: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.

// Asynchronous function that doubles the result of a promise that resolves to a number
async function doubleResultAfterPromise(promise: Promise<number>): Promise<number> {

  // Wait for the promise to resolve and store the result
  const result = await promise;

  // Return a new promise that resolves with the doubled result
  return new Promise((resolve) => {
    resolve(result * 2);
  });
}

// Example promise that resolves to the number 5
const examplePromise = Promise.resolve(5);

// Call doubleResultAfterPromise with examplePromise
doubleResultAfterPromise(examplePromise).then((doubledResult) => {

  // Log the doubled result to the console
  console.log(`\nDoubled result of 5 is ( 5 X 2 ) = ${doubledResult}`);
});