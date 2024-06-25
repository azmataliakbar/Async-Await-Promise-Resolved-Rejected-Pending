//^ Write a TypeScript function that uses async/await to wait for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.
async function doubleResultAfterPromise(promise) {
    const result = await promise;
    return new Promise((resolve) => {
        resolve(result * 2);
    });
}
const examplePromise = Promise.resolve(5);
doubleResultAfterPromise(examplePromise).then((doubledResult) => {
    console.log(`\nDoubled result of 5 is ( 5 X 2 ) = ${doubledResult}`); // Outputs: Doubled result is: 10
});
export {};
