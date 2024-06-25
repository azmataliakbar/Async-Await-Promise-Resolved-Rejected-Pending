//^ Q5: Write a TypeScript function that uses async/await to wait for a Promise to resolve and then logs the result to the console.
//& example-1
/*
async function logPromiseResult(promise: Promise<any>): Promise<void> {
  try {
      const result = await promise;
      console.log("\nPromise resolved with:", result);
  } catch (error) {
      console.error("Promise rejected with:", error);
  }
}

const examplePromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("💥 Hello, World!💥"), 2000); // Simulating a delay
});

logPromiseResult(examplePromise);
*/
//& example-2
async function logPromiseResult(promise) {
    console.log("\n������ Logging promise result to console after 2 seconds. �������");
    const result = await promise;
    console.log("\n🏅🏅🏅 Promise resolved with information to all students:", result);
}
const examplePromise = new Promise((resolve) => {
    setTimeout(() => resolve("💥💥💥 Be ready for, GIAIC exam! 💥💥💥"), 2000);
});
logPromiseResult(examplePromise);
export {};
