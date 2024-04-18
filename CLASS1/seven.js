class account{
    acc_id=101;
    acc_name="siri";
    acc_bal=50000;
    open_acc(){
        console.log("account open successfully")
    }
    deposit_amt(){
        console.log("amount deposited successfully")
    }
    withdrawl(){
        console.log("Insufficient bal")
    }
    get_bal(){
        console.log("server busy")
    }
    close_acc(){
        console.log("bal minus please deposit more funds")
    }

}
let a1=new account()
console.log(a1)
a1.open_acc()
a1.deposit_amt()
a1.withdrawl()
a1.get_bal()
a1.close_acc()