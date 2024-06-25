//^ Q1: Write a TypeScript function that uses async/await to wait for 2 seconds and then returns a string "Hello World".
//& example-1
/*
function delayedMessage(delay:number): Promise<void> {

  console.log("\nStart: The below message will appear after delay of 2 seconds.");
  return new Promise(resolve => setTimeout(resolve, delay));

}

async function hello(): Promise<void> {

  await delayedMessage(2000);
  console.log("\nMessage: Hello to Typescript World.");
  console.log("\nEnd: The above message is successfully printed after delay.");

}


hello();
*/
//& example-2
function delayedMessage(delay) {
    console.log("\nStart: The below message will appear after delay of 2 seconds.");
    return new Promise(resolve => setTimeout(resolve, delay));
}
async function hello() {
    await delayedMessage(2000);
    return "\nMessage: Hello to Typescript World.";
}
hello().then(message => console.log(message));
export {};
