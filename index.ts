#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright(`\n   <<<===================================>>>`));
console.log(chalk.bold.redBright(`<<<==========>>>  ${chalk.redBright.bold('ATM MACHINE')}  <<<==========>>>`));
console.log(chalk.bold.yellowBright(`   <<<===================================>>>\n`));

let myBalance = 15000;
let myPin = 9876;

let pin_answer = await inquirer.prompt(
    [
     {
        name: "Pin",
        type: "number",
        message: chalk.italic.bold("Enter your pin")
     },
    ]
);
if(pin_answer.Pin === 9876){
    console.log(chalk.green.bold("Correct pin code!!"));


let transactionType = await inquirer.prompt([
        {
            name: "Transaction",
            type: "list",
            message: chalk.italic.bold("Please select Transaction"),
            choices:["with drawl","check balance","fast cash"]
        },
]);


if(transactionType.Transaction === "with drawl"){

let amount_ans = await inquirer.prompt([
      {
        name: "Amount",
        type: "number",
        message: "Enter your with drawl amount here."
      },
]);
if(myBalance <= amount_ans.Amount){
console.log(chalk.greenBright.bold(`"Sorry insufficient balance!!..Your current balance is ${myBalance}"`))
}else if(myBalance -= amount_ans.Amount){
    console.log(chalk.redBright.bold(`Your remaining balance is: ${myBalance}`))
}
}


else if(transactionType.Transaction === "check balance"){
    console.log(chalk.yellowBright(`"Your total balance is ${myBalance}"`))
}


else if(transactionType.Transaction === "fast cash"){

    let accountType = await inquirer.prompt([
        {
            name: "fast",
            type: "list",
            message: "Enter your amount",
            choices: [1000,2000,10000,20000]
        }
]);
if (myBalance <= accountType.fast) {
console.log(chalk.greenBright.bold(`"Your balance is insufficient!!...Your current balance is ${myBalance}"`))

}else{
     myBalance -= accountType.fast
    console.log(chalk.bold.redBright(`"your remaining balance is: ${myBalance}"`))
}  
 }else{
    console.log(chalk.red.bold("Incorrect pin code!!"));
}
}
