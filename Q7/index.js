//^ Q7 Create a TypeScript function that takes a number as an argument and returns a Promise that resolves with the square of the number after a delay of 1 second.
function calculateSquareAfterDelay(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const square = num * num;
            resolve(square);
        }, 1000);
    });
}
calculateSquareAfterDelay(5).then((result) => {
    console.log("\nThe square of 5 is:", result);
});
export {};
