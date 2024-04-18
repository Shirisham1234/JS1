class Account{
    acc_bal=0
    deposit_amt(amount){
this.acc_bal=this.acc_bal+amount
console.log("amount deposited successfully")
    }
}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
a1.deposit_amt(5000)
a1.deposit_amt(50)
a2.deposit_amt(6000)
console.log(a1)
console.log(a2)