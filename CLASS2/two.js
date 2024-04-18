class Account{
    acc_bal=0;
    deposit_amt(amount){
        this.acc_bal=this.acc_bal+amount
    }
    get_bal(){
        return this.acc_bal
    }
    }
    let a1=new Account()
    console.log(a1.get_bal())
    a1.deposit_amt(2000)
    console.log(a1.get_bal())
    a1.deposit_amt(20)
    console.log(a1.get_bal())
    a1.deposit_amt(10)
    console.log(a1.get_bal())
