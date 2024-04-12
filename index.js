// Variable that holds the singleton instance
let bankBranchInstance = null;

// Singleton class for Bank branch
class BankBranch {
    constructor(branchInfo) {

      if (!bankBranchInstance) {
        this.branchInfo = branchInfo;
        bankBranchInstance = this;
      }
      return bankBranchInstance;
    }
  
    // Methods managing Bank information
    getBranchInfo() {
      return this.branchInfo;
    }
    
  }

// Usage
const branchA = new BankBranch("branch A Information");
console.log(branchA.getBranchInfo()); // Outputs: branch A Information 

const branchB = new BankBranch("branch B Information");
console.log(branchB.getBranchInfo()); // Still outputs: branch A Information, because it's a singleton


console.log(branchA === branchB); // true, both variables point to the same instance

