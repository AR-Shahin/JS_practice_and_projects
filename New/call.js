const print = (el) => console.log(el)

// Kono ekta function k object er maddome call korte chyle call(),bind(),apply() method use krte hy

// call and apply method same kaj kore . difference holo call individual params ney r apply array te params ney

// bind call er mto but ekta method return kore then oi method ta k call krte hy
let printName = function (p1,p2) {
    print(`Name is ${this.name} | ${p1} ${p2}`)
}

let obj = {
    name : 'shahin',
    age : 21
}

// printName.call(obj,1,'d')
// printName.apply(obj,[1,'d'])
let binding = printName.bind(obj,1,'d')
binding()
