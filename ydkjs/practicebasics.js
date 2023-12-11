const threshold = 100000;
const tax = 0.08;
const mobileprice = 10000;
const accessories = 1500;

const bank_threshold = 120000;
let amount=0;

function calculateTax(amount){
    return amount*tax;
}
function formatamount(amount){
    return "Rs." + amount.toFixed();
}
while(amount<bank_threshold){
    amount = amount+mobileprice;
    if(amount<threshold){
        amount=amount+accessories;
    }
}
amount=amount+calculateTax(amount);
console.log("Your Purchase is: "+formatamount(amount));
if (amount>bank_threshold){
    console.log("You cant afford it");
}