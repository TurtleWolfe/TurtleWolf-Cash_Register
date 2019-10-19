// @ts-check
function everybodiesGoodEnoughForSomeChange (changeDue) {
let romanString = ''; // let while loop equal funtion call
while (changeDue > 0){
    CountingChangeDue();//end of switch
  }//end of while..
//refactor while loop as anounoumous function?      
console.log('7 romanString = ',romanString);
return romanString;

  function CountingChangeDue() {
    switch (true) {
      // hundreds
      case (changeDue > 99):
        romanString = romanString.concat('ONE HUNDRED');
        changeDue = changeDue - 100;
        break;
      // twenties 
      case (changeDue > 19):
        romanString = romanString.concat('TWENTY');
        changeDue = changeDue - 20;
        break;
      // tens 
      case (changeDue > 9):
        romanString = romanString.concat('TEN');
        changeDue = changeDue - 10;
        break;
      // fives
      case (changeDue > 4):
        romanString = romanString.concat('FIVE');
        changeDue = changeDue - 5;
        break;
      // ones
      case (changeDue > 99):
        romanString = romanString.concat('ONE');
        changeDue = changeDue - 100;
        break;
      // quarters
      case (changeDue > 24):
        romanString = romanString.concat('QUARTER');
        changeDue = changeDue - 25;
        break;
      // dimes
      case (changeDue > 9):
        romanString = romanString.concat('DIME');
        changeDue = changeDue - 10;
        break;
      // nickles
      case (changeDue > 4):
        romanString = romanString.concat('NICKLE');
        changeDue = changeDue - 5;
        break;
      // pennies
      case (changeDue > 0):
        romanString = romanString.concat('PENNY');
        changeDue = changeDue - 1;
        break;
      default:
        console.log('51 changeDue = ', changeDue);
    }
  }
//refactor while loop as anounoumous function?
}//end of  function everybodiesGoodEnoughForSomeChange

function checkCashRegister(price, cash, cid) {
let total = cid.map(currency => currency[1]*100).reduce((total, amount) => total + amount);
let totalINdrawer = total/100; //use reduce method to sum the 2nd property of an array, do not use a loop
console.log('totalINdrawer = ',totalINdrawer);  
let changeDue = cash - price ;
totalINdrawer = total / 100;	
let change = {};//set default return
console.log('72 change = ', change);
console.log('73 changeDue = ',changeDue);  
console.log('74 totalINdrawer = ',totalINdrawer);  
  if (totalINdrawer == changeDue ) {
  change = {status: "CLOSED", change: cid};
  }//end of if (totalINdrawer == changeDue )
    else if (totalINdrawer < changeDue) {
    change = {status: "INSUFFICIENT_FUNDS", change: []};
    }//end of// else if (totalINdrawer < changeDue)
    else {// (totalINdrawer > changeDue)     ..so calculate change     
//calculate change object here
let romanString = everybodiesGoodEnoughForSomeChange(changeDue);
console.log('82romanString = ',romanString);
console.log('83 totalINdrawer = ',totalINdrawer);	
console.log('84 changeDue = ',changeDue);
      
//         if (totalINdrawer > changeDue) {
//           //denominations not suffeicent, do not compute, as in 2 quarters in drawer, to convert to a dime, nickle & pennies)
// //line 88, add a variable!          
//           change = {status: "INSUFFICIENT_FUNDS", change: []};
//           console.log('89 change  ',change);
//           } 
//         else {  //just give his money bruh
          change = {status: "OPEN", change: changeDue};//calculate denominations of change.. 
          console.log('89 change = ',change);
          }// end of else, give him money bruh     
//      }//end of else, give change as per calculation
  console.log('L96 change = ', change);
  return change;}  // Here is your change, ma'am.//end of function checkCashRegister(price, cash, cid)
// Passed
//  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  //should return an object.
  
  // checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
  
  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  
// Passed
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  //should return {status: "INSUFFICIENT_FUNDS", change: []}.
  
//  Passed
//  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  //should return {status: "INSUFFICIENT_FUNDS", change: []}.
  
//  Passed
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.