import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number 1: ', (num1) => {
    rl.question('Enter number 2: ', (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
        rl.close();
    });
})

