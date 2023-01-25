// // Business logic

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

Account.prototype.firstDeposit = function(deposit) {
    this.initialDeposit = parseInt(this.initialDeposit) + parseInt(deposit);
    this.createRunningTotal();
}

Account.prototype.depositBalance = function(deposit) {
    this.runningTotal = parseInt(this.runningTotal) + parseInt(deposit);
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
}

Account.prototype.depositBalance = function(deposit) {
    this.runningTotal = parseInt(this.runningTotal) + parseInt(deposit);
}
// Account.prototype.withdrawBalance = function(withdraw) {
//     this.initialDeposit = this.initialDeposit - withdraw;
//     this.createRunningTotal();
// }


// UI logic
////////////////////////////////////
//declare global values and add array
const bankDB = new BankDB();
const custIds = [];

//on load choose log in type

window.addEventListener('load', function() {
    document.getElementById('radioForm').addEventListener('submit', function(e){
        e.preventDefault(e);
        chooseLoginType();
        document.getElementById('form').addEventListener('submit', function(e){
            e.preventDefault();
            initialSubmit();

            // unhideManip();
        });
    });
});

//on click of the submit, target the value of initialDeposit/runningTotal, and assign this to span
function updateAccount(id) {
    let accountValue = bankDB.accounts[id].initialDeposit;
    document.getElementById("bankAccountValue").innerText = accountValue;
    console.log('Account total is: ' + accountValue);
}

//user submits new account
function initialSubmit(){
    const userArray = userInput(); // Calls userInput() and stores return value in variable    
    const newAccount = new Account(userArray[0],userArray[1])
    bankDB.addAccount(newAccount);
    document.getElementById('hidden').removeAttribute('class');
    document.getElementById('deposit').addEventListener('submit', function(){
            let userDeposit = document.getElementById('depositInput').value;
            bankDB.accounts[1].firstDeposit(userDeposit);
    });
    let newCustId = bankDB.currentID;
    updateAccount(newCustId); 
    unHideMaster();
}

    // Show the deposit and withdraw options and input fields when called.
function unHideMaster() { 
    document.getElementById('hiddenMaster').removeAttribute('class');
}

// gathers the name and initail deposit amounts from New users
function userInput(){ 
    let inputUserName = document.getElementById('userName').value;
    let inputInitialDeposit = document.getElementById('userInitialDeposit').value;
    let userInfoArr = [inputUserName, inputInitialDeposit];
    return userInfoArr;
}

function depositFunc(){
    const depositAmount = document.getElementById('depositInput').value;
    console.log('deposit amount: ' + depositAmount);
    bankDB.accounts[1].depositBalance(depositAmount);
}

function withdrawFunc(){
    const withdrawAmount = document.getElementById('withdrawalInput').value;
    console.log('withdraw amount: ' + withdrawAmount);
    bankDB.accounts[1].withdrawBalance(withdrawAmount);
}

//choose log in type
function chooseLoginType() {
    let loginType = document.querySelector("input[name='typeOFCustomer']:checked").value;
    if(loginType === '1'){
        document.getElementById('form').removeAttribute("class");
        let testVar = document.getElementById('hiddenMaster').getAttribute("class");
        if (testVar === "hiddenMaster") {
        } else {
            document.getElementById("hiddenMaster").setAttribute("class", "hiddenMaster");
        }
    } else {
        document.getElementById('hiddenMaster').removeAttribute("class");
        let testVar = document.getElementById('form').removeAttribute("class");
        if (testVar === "form") {
        } else {
            document.getElementById("form").setAttribute("class", "hiddenMaster");
        }
    }
    document.getElementById('deposit').addEventListener('submit', function(e){
        e.preventDefault();
        depositFunc();
    });
    document.getElementById('withdraw').addEventListener('submit', function(e){
        e.preventDefault();
        withdrawFunc();
    });

}