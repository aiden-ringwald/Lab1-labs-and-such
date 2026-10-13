let ammount = Number(prompt('What is your total restaurant bill amount?'));


while (isNaN(ammount) || ammount == 0 || ammount < 0) {
   if (isNaN(ammount)) {
       ammount = Number(prompt('Invalid input. Please enter a numeric bill amount.'));
   } else if (ammount == 0) {
       ammount = Number(prompt('Please enter a bill amount greater than zero.'));
   } else if (ammount < 0) {
       ammount = Number(prompt('Negative amounts are not allowed. Please enter a valid bill amount.'));
   }
}


let answer = ammount / 10;


console.log(`For a bill of $${ammount}, the tip should be $${answer}`);
document.write(`For a bill of $${ammount}, the tip should be $${answer}`);
