//^ Q6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.

// Asynchronous function to handle a promise
async function promise() {
  
  // Await a new promise that immediately rejects with an error message
  await new Promise((resolve, reject) => {
    // Uncomment the following line to resolve the promise instead of rejecting it
    // resolve("Promise resolved successfully.");

    // Reject the promise with an error message
    reject("💥💥💥 Oop! Something went wrong with the promise.💥💥💥");
})

.then((res) => {

  // Handle the resolved promise and log the resolved message
  console.log("\nResolved message by the promise:", res);
})
.catch((err) => {

  // Handle the rejected promise and log the error message
  console.log("\nRejected message by the promise:", err);
})

}

// Call the promise function to execute the above code
promise();
