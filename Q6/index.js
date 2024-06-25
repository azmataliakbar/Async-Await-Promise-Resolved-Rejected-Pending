//^ Q6: Write a TypeScript function that uses async/await to wait for a Promise to reject and then logs the error to the console.
async function promise() {
    await new Promise((resolve, reject) => {
        //resolve("Promise resolved successfully.");
        reject("💥💥💥 Oop! Something went wrong with the promise.💥💥💥");
    })
        .then((res) => {
        console.log("\nResolved message by the promise:", res);
    })
        .catch((err) => {
        console.log("\nRejected message by the promise:", err);
    });
}
promise();
export {};
