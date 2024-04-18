class Account{
    acc_Id;
    acc_Email;

    constructor( id,email){
        this.acc_Id=id
        this.acc_Email=email
          
    }
}
class SA extends Account{
    acc_Name;
    acc_Bal;
    min_Bal=300

constructor(id,email,name,amount){
    super(id,email)
    this.acc_Name=name
    this.acc_Bal=amount
    
}
get_Bal(){
    return this.acc_Bal-this.min_Bal
}
}
let sa1=new SA(101,"rg@gmail.com","siri",5000)
console.log(sa1)
console.log(sa1.get_Bal())