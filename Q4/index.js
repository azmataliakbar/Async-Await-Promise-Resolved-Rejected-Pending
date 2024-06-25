//^ Q4: Create a TypeScript function that uses async/await to wait for two Promises to resolve and then returns their results as an array.
async function awaitBothPromises(promise1, promise2) {
    console.log("\nNo setTimeOut for 1st promise but setTimeOut 3 seconds for 2nd promise.");
    console.log("Both results will print at same time in an array after 3 seconds.");
    console.log("✨... Waiting for both promises to resolve ...✨");
    const result1 = await promise1;
    const result2 = await promise2;
    return [result1, result2];
}
const promise1 = Promise.resolve("First result: Plan A");
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second result: Plan B"), 3000);
});
(async () => {
    const results = await awaitBothPromises(promise1, promise2);
    console.log("\nResults:", results); // Logging the results array
    console.log("\n✨... Both promises are now resolved! ...✨");
    console.log("\nSummary: awaitBothPromises(promise1, promise2).\nThe function awaitBothPromises waits for promise1 to resolve immediately.\nIt then waits for promise2 to resolve after 3 seconds.\nOnly after both promises are resolved does it return an array of their results.");
})();
export {};
