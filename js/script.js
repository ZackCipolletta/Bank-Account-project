// // Business logic

// function Account(x, y) {
//     let variable1 = x;
//     let variable2 = y;
// }


// It will: Assign two variables  
// Code: 
// Expected output: Name: , Initial deposit: 

// const userName = "Joseph Morrissey";
// const initialDeposit = 1000;

// It will: Make a constructor that will create an account object
// Code: 
// Expected output: object


// const testName = "Joseph Morrissey";
// const testDeposit = 1000;

// function Account(userName, initialDeposit) {
//     this.userName = userName;
//     this.initialDeposit = initialDeposit;
// }





// It will: create a bank database
// Code: 
// Expected output: {}


// const testName = "Joseph Morrissey";
// const testDeposit = 1000;

// function Account(userName, initialDeposit) {
//     this.userName = userName;
//     this.initialDeposit = initialDeposit;
// }

// function BankDB() {
//     this.accounts = {};
//     this.currentID = 0;
// }



// It will: add accounts to bank database
// Code: 
// Expected output: {accountX, accountY}

const testName = "Joseph Morrissey";
const testDeposit = 1000;

function Account(userName, initialDeposit) {
    this.userName = userName;
    this.initialDeposit = initialDeposit;
}

function BankDB() {
    this.accounts = {};
    this.currentID = 0;
}

BankDB.prototype.assignID = function() {
    this.currentID++;
    return this.currentID;
}

BankDB.prototype.addAccount = function(account) {
    account.id = this.assignID();
    this.accounts[account.id] = account;
}



// It will: find a specific account by id
// Code: 
// Expected output: account.id _____

BankDB.prototype.findAccount = function(id) {
    if (this.accounts[id] !== undefined) {
        return this.accounts[id];
    }
    return false;
}



// It will: It will add to and return total balance
// Code: account.id.add(_)
// Expected output: 


function Account(userName, initialDeposit) {
    this.userName = userName;
    this.initialDeposit = initialDeposit;
}

Account.prototype.depositBalance = function(deposit) {
    this.initialDeposit = this.initialDeposit + deposit;
    this.createRunningTotal();
    return this.initialDeposit;
}

Account.prototype.createRunningTotal = function() {
    if(this.initialDeposit) {
        this.runningTotal = this.initialDeposit;
        delete this.initialDeposit;
    }
}

// It will: It will subtract from and return total balance
// Code: 
// Expected output: 

Account.prototype.withdrawBalance = function(withdraw) {
    this.initialDeposit = this.initialDeposit - withdraw;
    this.createRunningTotal();
    return this.initialDeposit;
}


// UI logic


window.addEventListener('load', function(){
    document.getElementById('submit').addEventListener('submit');
    document.getElementById('reset').addEventListener('click');
});




