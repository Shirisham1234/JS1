class Amount{
    acc_bal=5;
    deposit_amt(amount){
        this.acc_bal=this.acc_bal+amount
    }
    get_bal(){

    }
}
let a1=new Amount()
console.log(a1)
a1.deposit_amt(5000)
console.log(a1)
a1.deposit_amt(50)
console.log(a1)
a1.deposit_amt(500)
console.log(a1)