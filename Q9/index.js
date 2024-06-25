//^ Q9: Create a TypeScript function that uses setTimeout to call a function repeatedly every 2 seconds.
function repeatFunction(func, interval, times) {
    let count = 0;
    function execute() {
        if (count < times) {
            func();
            count++;
            setTimeout(execute, interval);
        }
    }
    execute();
}
// Example usage:
const exampleFunction = () => {
    console.log("\n❤️❤️❤️ Respected! Governor Sindh Kamran Tissori, Thank you for being here today. We are honored to have you❤️❤️❤️");
};
repeatFunction(exampleFunction, 2000, 5);
export {};
