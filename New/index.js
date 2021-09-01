
// let x = 10
// console.log(x)
// let also hoisted 
// temporal deadzone : kono variable declare na kore use krte chyle 
// name = 'shahin'
// let name
// console.log(name);
{
    let x = 10
    // console.log(x);
}

// let x = 20
// console.log(x);

// const fun = (e) => e * e
// const f = () => console.log(55);
// // console.log(fun(5))
// let x = f()

const print = (el = 'conent') => console.log(el)


// let text = "We \fare \bthe \\so \ncalled \"Vikings\" from\tthe \vnorth.";

// print(text)

// let x = 'ss'
// let y = new String('ss')

// if(x == y){
//     print('ok')
// }else{
//     print("no")
// }

// print(5)
// let x = new String("John");             
// let y = new String("John");
// if(x == y){
//     print('ok')
// }else{
//     print("no")
// }

// print(typeof y)

/* Slice */
// let arr = [10,20,30,40,50]
// let str = 'Shahin'
// print(str.length)

// print(str.slice(1,3))
// print(arr.slice(2,4))
// print(arr.slice(0,4))
// print(arr.slice(-2,-2))
// print(str.substr(2,4))
// print(str.substr(1,3))
// var tex = "5";
// print(tex.padStart(5,0))  // Returns 0005
// print(tex.padEnd(5,0))

// let bn = 'bangladesh'
// print(bn.indexOf('g'))
// let st = "Please locate where 'locate' occurs!";
// print(st.indexOf("locate") )   // Returns 7
// print(bn.indexOf('l',3))
// let t = "The rain in SPAIN stays mainly in the plain";
// print(t.match(/ain/g)  )

let text = "Hello world, welcome to the universe. ";
print(text.includes("world", 1))    // Returns false
print( `hwy may 
ss`)

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

print(html)
