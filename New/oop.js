let print = (el) => console.log(el)

// class Base{
//     any(){
//         print('base')
//     }
// }

// class Car extends Base{
//     constructor(name,price){
//         super()
//         this.name = name
//     }

//     getName(){
//         print(this.name.toUpperCase())
//     }
// }


// let car = new Car('audi',450)
// car.any()
// print(Math.max([1,8,10,3]))
// function findLongestWordLength(str) {
//     let arr =  str.split(" ")
//     let brr = []
//     for(let i = 0;i<arr.length;i++){
// //   print(arr[i].length)
//       brr.push(arr[i].length)
//     }
//     print(brr)
//   let max = Math.max([1,8,10,3])
//   print(max)
//     return 1
//   }
  
//   console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
//   print(6)
let name = 'shahin'

function printName() {
    return function() {
        print(name)
    }
}

console.dir(printName())

