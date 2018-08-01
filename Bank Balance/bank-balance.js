var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === true) {
    console.log("Thank you. Have a nice day!");
} else if (balance > 0 && isActive === true) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (isActive === false) {
    console.log("Your account is no longer active.");
} else (balance <= 0); {
    console.log("Your balance is negative. Please contact bank.");
}
}



var balance = 5;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance = false) {
    console.log("Thank you. Have a nice day!");
} else if (balance > 0 && isActive === true) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
} else if (isActive === false) {
    console.log("Your account is no longer active.");
} else (balance = 0); {
    console.log("Your balance is negative. Please contact bank.");
}



var balance = 22;
var checkBalance = true;
var isActive = true;

if (checkBalance === true && isActive === true && balance > 0) {
    
    console.log("Your balance is $" + balance.toFixed(2) + ".");
    
}   else if (isActive === true && balance === 0) {
    
        console.log("Your account is empty.");
        
    } else if (isActive === true && balance < 0) {
        
        console.log("Your balance is negative. Please contact bank.");
        
    } else if (isActive === false) {
        
        console.log("Your account is no longer active");
} else {
    console.log("Thank you. Have a nice day!");
}

    
