const customer = {
    name: 'John Doe',
    balance: 5000,
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
    },
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient balance. Unable to withdraw ${amount} from ${this.name}'s account.`);
      }
    }
  };
  
  // Example usage
  customer.deposit(2000); // Output: Deposited 2000 into John Doe's account. New balance: 7000
  customer.withdraw(3000); // Output: Withdrawn 3000 from John Doe's account. New balance: 4000
  customer.withdraw(6000); // Output: Insufficient balance. Unable to withdraw 6000 from John Doe's account.
  