import {t} from './test.js'
const print = (e) => console.log(e)

let arr = [1,2,3,4,5]

// array reduce 
// let sum = arr.reduce((prev,next,index,arr)=>{
//     return prev + next
// },0)
// print(sum)
// print(arr)

// let obj = {
//     name : 'shahin',
//     age : 21,
//     skills : ['PHP','JS','Python'],
//     getName : function(){
//         return this.name
//     }
// }
// let keys = Object.keys(obj)
// let values = Object.values(obj)
// let entries = Object.entries(obj)
// print(entries)


//spread operator 
// let tempArr = [50,60,96]
// let newArr = [...arr,...tempArr]
// let obj1 = {
//     name : 'test'
// }
// let obj2 = {
//     age : 21
// }

// let shahin = {
//     ...obj1,
//     ...obj2,
//     t : 4
// }
// print(shahin)
// print(newArr)

// Rest Operator

// function rest(...params){
//     print(params[3])
// }

// const rest = (...params) => print(params)
// rest('ars',10,5.6,{name : 'hi'},function(){print('func')})

// Destructuring 

// let obj = {
//     name : 'shahin',
//     age : 21,
//     skills : ['PHP','JS','Python'],
//     getName : function(){
//         return this.name
//     },
//     education : {
//         degree : 'HSC',
//         school :{
//             name : 'Model'
//         }
//     }
// }

// const {name :n,skills , education : {degree,school : {name}}} = obj

// // print(skills)
// print(n)

// let des = [1,2,3,4,5]
// const [,a] = des
// let d = [1,2,[20,50]]
// const [,,[,a]] = d
// print(a)

// import * as H from './inc/inc.js'


// print(H.A)

// globalThis.alert(5)


// print(Number.MAX_SAFE_INTEGER)

// check object value exists or not 
// let obj = {
//     name : 'shahin',
//     age : 21,
//     skills : ['PHP','JS','Python'],
//     getName : function(){
//         return this.name
//     },
//     education : {
//         degree : 'HSC',
//         school :{
//             name : 'Model'
//         }
//     }
// }

// let school = obj?.education?.school?.name
// print(school)

// (async function(){
//     const {PI} = await import('./inc/inc.js')
// })()
// print(PI)


// Promise 
// let isMeeting = true
// let myPromise = new Promise((resolve,reject)=>{
//     if(isMeeting){
//         resolve('OK')
//     }else{
//         reject('Failed!!')
//     }
// })

// myPromise.then((res) => {
//     print(res)
// })
// .catch(err => {
//     print(err)
// })
