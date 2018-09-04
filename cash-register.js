function checkCashRegister(price, cash, cid) {
    let total = cid.map(currency => currency[1]*100).reduce((total, amount) => total + amount);
let totalINdrawer = total/100; //use reduce method to sum the 2nd property of an array, do not use a loop
console.log(totalINdrawer);  
let changeDue = cash - price ;	
let change = {};//set default return

  if (totalINdrawer == changeDue ) {
  change = {status: "CLOSED", change: [cid]};
  console.log(change);}//end of if (totalINdrawer == changeDue )
    else if (totalINdrawer < changeDue) {
    change = {status: "INSUFFICIENT_FUNDS", change: []};
    console.log(change);}//end of// else if (totalINdrawer < changeDue)
    else {           // (totalINdrawer > changeDue)     ..so calculate change
     //calculate change object here
          if (totalINdrawer < changeDue) {
          //denominations not suffeicent, do not compute, as in 2 quarters in drawer, to convert to a dime, nickle & pennies)
          change = {status: "INSUFFICIENT_FUNDS", change: []};
          console.log(change);
          } else {  //just give his money bruh
          change = {status: "OPEN", change: [changeDue]};//calculate denominations of change.. 
          console.log(change);
          }// end of else, give him money bruh     
         }//end of else, give change as per calculation
  return change;}  // Here is your change, ma'am.//end offunction checkCashRegister(price, cash, cid)

function convertToRoman(num) {
let romanString = '';
while (num > 0){
switch (true) {
  // triple digits
  case (num > 999):
    romanString = romanString.concat('M');
    num = num -1000;
    break;
  case (num > 899):
    romanString = romanString.concat('CM');
    num = num -900;
    break;    
  case (num > 499):
    romanString = romanString.concat('D');
    num = num -500;
    break;    
  case (num > 499):
    romanString = romanString.concat('D');
    num = num -500;
    break;    
  case (num > 399):
    romanString = romanString.concat('CD');
    num = num -400;
    break;
  case (num > 99):
    romanString = romanString.concat('C');
    num = num -100;
    break;    
// double digits    
  case (num > 90):
    romanString = romanString.concat('XC');
    console.log(romanString);    
    num = num -90;
    break;
  case (num > 80):
    romanString = romanString.concat('LXXX');    
    num = num -80;
    break; 
  case (num > 50):
    romanString = romanString.concat('L');    
    num = num -50;
    break;
  case (num > 39):
    romanString = romanString.concat('XL');    
    num = num -40;
    break;
  case (num > 30):
    romanString = romanString.concat('XXX');    
    num = num -30;
    break;    
//single digits    
  case (num > 9):
    romanString = romanString.concat('X');
    console.log(romanString);    
    num = num -10;
    break;
  case (num > 8):
    romanString = romanString.concat('IX');    
    num = num -9;
    break;     
  case (num > 4):
    romanString = romanString.concat('V');    
    num = num -5;
    break;
  case (num > 3):
    romanString = romanString.concat('IV');    
    num = num -5;
    break;
  case (num > 0):
    romanString = romanString.concat('I');
    num = num -1;
    break;
  default:
    console.log(num);
  }//end of switch
  }//end of while..
  console.log(romanString);
  return romanString;
}//end of function convertToRoman(num)

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
{
//  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
//  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); //should return {status: "INSUFFICIENT_FUNDS", change: []}.
//  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
//  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
//  convertToRoman(3);
//  convertToRoman(4);
//  convertToRoman(5);
//  convertToRoman(6);
//  convertToRoman(7);
//  convertToRoman(8);
//  convertToRoman(9);
//  convertToRoman(10);
//  convertToRoman(11);
//  convertToRoman(12);
//  convertToRoman(13);
//  convertToRoman(14);
//  convertToRoman(15);
//  convertToRoman(16);
//  convertToRoman(17);
//  convertToRoman(18);
//  convertToRoman(19);
//  convertToRoman(20);
//  convertToRoman(21);
//  convertToRoman(22);
//  convertToRoman(23);
//  convertToRoman(36);
//  convertToRoman(39); // should return "XXXIX".
//  convertToRoman(42); // should return "XLII".
//  convertToRoman(40); //  should return "XL"
//  convertToRoman(44); // should return "XLIV".
//  convertToRoman(45); //  should return "XLV"
}//test block checkCashRegister
//convertToRoman(49); //  should return "XLIX"
{
//  convertToRoman(68); //  should return "LXVIII"
//  convertToRoman(96); //  should return "XCVI"
//  convertToRoman(97); //  should return "XCVII"
//  convertToRoman(98); //  should return "XCVIII"
//  convertToRoman(99); //  should return "XCIX"
//  convertToRoman(100); //  should return "C"
//  convertToRoman(333); //  should return "CCCXXXIII"
//  convertToRoman(400); //  should return "CD"
//  convertToRoman(500); //  should return "D"
//  convertToRoman(666); //  should return "DCLXVI"
//  convertToRoman(999); //  should return "CMXCIX"
//  convertToRoman(1000);
//  convertToRoman(649); //  should return "DCXLIX"
//  convertToRoman(798); //  should return "DCCXCVIII"
//  convertToRoman(891); //  should return "DCCCXCI"
//  convertToRoman(3999); //  should return "MMMCMXCIX"
}//test block convertToRoman
