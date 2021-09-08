const print = (el) => console.log(el)
// const Methods = {
//     play(){
//         print('Playing!')
//     },
//     eat(){
//         print('Eating!')
//     }
// }

// const Romance = {
//     date(){
//         print('Going a Date!')
//     }
// }

// function Person(name) {
//     let person = Object.create(Methods)
//     person.name = name
//     return person
// } 

// const shahin = Person('Shahin');

//  shahin.play()
// print(shahin.name)

// function any() {}
// console.dir(any.prototype)

// Prototype : Sob function er ekta property jet ekta object k point kore
// Inheritance hoy prototype diye
// function Person(name) { // constructor function   
//     let person = Object.create(Person.prototype)
//     person.name = name
//     return person
// } 
// Person.prototype = {
//     play(pr = 'cricket'){
//         print(this.name + ' is Playing ' + pr)
//     },
//     eat(){
//         print('Eating!' )
//     }
// }

// let a = Person('a')
// a.play('f')

// If we use new keyword then 
// function Person(name) { // constructor function   
//     this.name = name
// } 
// Person.prototype = {
//     play(pr = 'cricket'){
//         print(`${this.name} is Playing ${pr.toUpperCase()}!`)
//     },
//     eat(){
//         print('Eating!' )
//     }
// }

// let omi = new Person('omi')
// omi.play()
// let shahin = new Person('shahin')
// shahin.play('football')


// class Person {
//     constructor(name){
//         this.name = name
//         this.age = 35
//     }
    
//     play(pr = 'cricket'){
//         print(`${this.name} is Playing ${pr.toUpperCase()}!`)
//     }
// }

// let x = new Person('Mr X');
// print(x.age)

// built in ghula prototype theke ase
let arr = new Array
console.dir(Array.prototype)
