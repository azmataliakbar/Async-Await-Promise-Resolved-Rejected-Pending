//^ Q3 Write a TypeScript function that returns a Promise that resolves with the value "Resolved!" after 3 seconds.
function resolveAfterDelay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("\n🌟🌟🌟 Resolved! 🌟🌟🌟");
        }, 3000);
    });
}
(async () => {
    const result = await resolveAfterDelay();
    console.log(result);
})();
export {};
