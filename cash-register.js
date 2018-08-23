function checkCashRegister(price, cash, cid) {
price
cash
cid
var totalINdrawer = [cid array];
var changeDue = cash - price ;	
if (cid == changeDue ) {
  var change = {status: "CLOSED", change: [cid]};
  }
    
else if (cid < changeDue || //denominations do not compute// ) {
  var change = {status: "INSUFFICIENT_FUNDS", change: []};
  }

else {
  var change = {status: "OPEN", change: [changeDue]},;
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
