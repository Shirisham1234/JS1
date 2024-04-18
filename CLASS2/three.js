class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
        console.log("Account Class Constructor")
    }
    get_details(){
console.log("gm")
    }
}
    var a1=new Account(101,"siri",5000)
    console.log(a1)



