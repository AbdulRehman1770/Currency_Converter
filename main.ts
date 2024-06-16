#! /usr/bin/env node
import inquirer from "inquirer"
let Currency : any = {
    "USD"  : 1,    // USD dollar
    "Euro" : 0.9,  // Europoen Currency
    "Aus"  : 1.5,  // Australian Currency
    "Ind"  : 83,   // indian Currency
    "Can"  : 1.36, // Canadian Sollar
    "Nz"   : 1.62, // Newzeland Dollar
    "Pkr"  : 278   // pakistani Currency
}

let From_Currency = await inquirer.prompt([
    {   name : "From",
        type : "list",
        message : "Enter Currency Name That Convert from",
        choices : ["USD", "Euro", "Aus", "Ind", "Can", "Nz", "Pkr"]},

    {   name : "To",
        type : "list",
        message : "Enter Currency Name That Convert To",
        choices : ["USD", "Euro", "Aus", "Ind", "Can", "Nz", "Pkr"]},
    
    {   name : "Amount",
        type : "input",
        message : "Enter Your Amount"}])

let From_Amount = Currency[From_Currency.From]
let To_Amount = Currency[From_Currency.To]
let Amount = parseFloat(From_Currency.Amount)

let Conversion = Amount / From_Amount
let Final_Conversion = Conversion * To_Amount

console.log(`${Amount} ${From_Currency.From} Converted Into ${From_Currency.To} = ${Final_Conversion}`);
