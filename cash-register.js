function checkCashRegister(price, cash, cid) {

var totalINdrawer = [cid];
var changeDue = cash - price ;	
if (cid == changeDue ) {
  var change = {status: "CLOSED", change: [cid]};
  console.log(change);
  }
    
else if (cid < changeDue || cid < changeDue ) {
  //denominations do not compute//
change = {status: "INSUFFICIENT_FUNDS", change: []};
console.log(change);  
  }

else {
 change = {status: "OPEN", change: [changeDue]};
 console.log(change);     
}
  // Here is your change, ma'am.
  return change;
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
