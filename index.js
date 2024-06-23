#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
console.log("\t Welcome in TODO List \t\n");
while (loop) {
    let ans = await inquirer.prompt([
        {
            type: "input",
            name: "todoMsg",
            message: "What do you want to add in todo? ",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to Add more? ",
            default: false,
        },
    ]);
    const { todoMsg, addMore } = ans;
    loop = addMore;
    if (todoMsg) {
        todos.push(todoMsg);
    }
    else {
        console.log("Please add valid input!");
    }
}
if (todos.length > 0) {
    console.log("\n\tAll todos : \t\n");
    todos.forEach((todo) => console.log(todo));
}
else {
    console.log("No todos found!");
}
