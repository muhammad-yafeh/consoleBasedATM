import inquirer from "inquirer";
let userInput=await inquirer.prompt(
    [
        {name:"userId",
         type:"string",
        message:"enter your id"},
        {name:"user pin",
         type:"number",
        message:"enter your pin"},
        {name:"operation",
         type:"list",
        choices:["amount withdrwal",
                 "balance inquiry"]}
    ]
) 

let balance=Math.floor(Math.random()*10000)

if (userInput.operation=="amount withdrwal"){
     let withdrawl=await inquirer.prompt({name:"amount",
                                  message:"enter amount"})
     console.log(`Your remaining balance is ${balance-withdrawl.amount}`)} 
else if (userInput.operation=="balance inquiry"){
    console.log(balance)
}

    




    