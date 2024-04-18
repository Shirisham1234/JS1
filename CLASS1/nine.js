class Account{
    acc_bal=5;
    deposit_amt(amount){
        this.acc_bal=this.acc_bal+amount
        console.log(amount)
    
    }
}
let a1=new Account
a1.deposit_amt(5000)
a1.deposit_amt(10)
console.log(a1)
