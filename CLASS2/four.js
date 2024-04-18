class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount

    }
    deposit_amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
}
var a1=new Account(101,"siri",5000)
var a2=new Account(102,"anu",6000)
console.log(a1)
console.log(a2)
a1.deposit_amount(5)
a2.deposit_amount(4)
console.log("**********")
console.log(a1)
console.log(a2)
