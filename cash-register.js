function checkCashRegister(price, cash, cid) {
  
var total = cid.map(currency => currency[1]*100)
    .reduce((total, amount) => total + amount);
console.log(total);

var totalINdrawer = total/100; //use reduce method to sum the 2nd property of an array, do not use a loop
console.log(totalINdrawer);  

var changeDue = cash - price ;	

  if (totalINdrawer == changeDue ) {
  var change = {status: "CLOSED", change: [cid]};
  console.log(change);
  }
    
  else if (totalINdrawer < changeDue) {
  change = {status: "INSUFFICIENT_FUNDS", change: []};
  console.log(change);  
  }
     else {           // (totalINdrawer > changeDue)     ..so calculate change
       
       
  //calculate change object here     
       
       
          if (totalINdrawer > changeDue) {
          //denominations not suffeicent, do not compute, as in 2 quarters in drawer, to convert to a dime, nickle & pennies)
          change = {status: "INSUFFICIENT_FUNDS", change: []};
          console.log(change);
          } else {  //just give his money bruh
          change = {status: "OPEN", change: [changeDue]};//calculate denominations of change.. 
          console.log(change);
          }// end of else, give him money bruh     
         }//end of else, give change as per calculation
  // Here is your change, ma'am.
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
