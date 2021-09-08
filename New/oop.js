let print = (el) => console.log(el)

const person = {
    name : 'shahin',
    age : 21,
    skills : ['php','js'],
    getName : function () {
        return this.name
    }
}

// for(props in person){
//     print(person[props])
// }


class User{
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    getName(){
        print(this.name)
    }

    get nameWithGreat(){
        print(`Hello ${this.name}`)
    }
   
    static details(x){
        print(`Name is ${x.name}. Age ${x.age}`)
    }
}

// let user = new User('Shahin',21);
// user.nameWithGreat;
// user.getName(user);
// print(user.age)
// User.details(user)
class Student extends User{
    constructor(name,age,roll){
        super(name,age)
        this.roll = roll
    }

    getMyRoll(){
        print(this.roll)
    }
    static details(x){
        print(`Name is ${x.name}. Age ${x.age}. Roll is ${x.roll}`)
    }

}

let student = new Student('omi',20,101)
// student.getName()
Student.details(student)
