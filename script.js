class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount) {
    
    if(amount > 0) {
      this.balance += amount;
      this.transactions.push({type: 'deposit', amount});
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }

  }

  withdraw(amount) {
    
    if(amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({type: 'withdraw', amount});
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
        return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance(){
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits(){
    const deposits = this.transactions
    .filter(tx => tx.type === 'deposit')
    .map(tx => tx.amount)
    .join(',');
    return `Deposits: ${deposits}`
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
    .filter(tx => tx.type === 'withdraw')
    .map(tx => tx.amount)
    .join(',');

    return `Withdrawals: ${withdrawals}`
  }

}

const myAccount = new BankAccount();


console.log(myAccount.deposit(100));
console.log(myAccount.deposit(35));
console.log(myAccount.deposit(90));

console.log(myAccount.withdraw(50));
console.log(myAccount.withdraw(20));


console.log(myAccount.checkBalance());


console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
