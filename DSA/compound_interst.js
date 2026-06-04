let prompt = require("prompt-sync")();
let p = prompt("Principal Amount : ");
let r = prompt("Interest Rate : ");
let t = prompt("Period : ");

console.log((p*Math.pow(1+(r/100),t)-p).toFixed(0));