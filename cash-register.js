function checkCashRegister(price, cash, cid) {

if (cid < //change due// || //denominations do not compute// ) {
  var change = {status: "INSUFFICIENT_FUNDS", change: []};
  }

else if (cid == //change due// ) {
  var change = {status: "CLOSED", change: [cid]};
  }

else {
  var change = {status: "OPEN", change: [cid]},;
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
