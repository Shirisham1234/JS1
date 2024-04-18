class GP{
    constructor(){
        console.log("GP constructor")
    }
    m1(){
        console.log("GP m1 constructor")
    }
}
class Parent extends GP{
    constructor(){
        super()
        console.log("Parent class constructor")
        }
        m2(){
            console.log("Parent m2 constructor")
        }
    }
class Child extends Parent{
    constructor(){
        super()
        console.log("Child class constructor")
    }
    m3(){
        console.log("child m3 constructor")
    }
}
let c1=new Child()
c1.m1()
c1.m2()
c1.m3()