//^ Q8: Write a TypeScript function that uses async/await to wait for an array of Promises to resolve and then returns an array of their results.
async function awaitPromises(promise1, promise2, promise3, promise4, promise5) {
    console.log("\nNo setTimeOut for 1st & 2nd promises but setTimeOut 2, 3 & 5 seconds for 3rd, 4th & 5th promises.");
    console.log("All results will print at same time in an array after 5 seconds.");
    console.log("�������... Waiting for all promises to resolve ...�������");
    const result1 = await promise1;
    const result2 = await promise2;
    const result3 = await promise3;
    const result4 = await promise4;
    const result5 = await promise5;
    return [result1, result2, result3, result4, result5];
}
const promise1 = Promise.resolve("First position: Sir Zia");
const promise2 = Promise.resolve("Second position: Sir Amin");
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Third position: Sir Bilal"), 2000);
});
const promise4 = new Promise((resolve) => {
    setTimeout(() => resolve("Fourth position: Sir Fahad"), 3000);
});
const promise5 = new Promise((resolve) => {
    setTimeout(() => resolve("Fifth position: Sir Asharib"), 5000);
});
(async () => {
    const results = await awaitPromises(promise1, promise2, promise3, promise4, promise5);
    console.log("\nResults:", results); // Logging the results array
    console.log("\n�����... All promises are now resolved! ...�����");
    console.log("\nSummary: awaitPromises(promise1, promise2, promise3, promise4, promise5).\nThe function awaitPromises waits for promises 1 & 2 to resolve immediately.\nIt then waits for promises 3, 4 & 5 to resolve after 2, 3 & 5 seconds.\nOnly after all promises are resolved it return an array of their results.");
})();
export {};
