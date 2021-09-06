const print = (el) => console.log(el)
const addTen = async (el) =>{
    return   el + 10
}

let bool = true
let promise = new Promise((resolve,reject) => {
    if(bool){
        const data = {name:'shahin',age : 21}
        resolve(data)
    }else{
        reject(new Error('Promise Has Been Rejected!'))
    }
})

let anotherPromise = (data) => {
    return Promise.resolve(`Hello ${data.name}!`)
}

// promise
//     .then(anotherPromise)
//         .then(res => {
//             print(res)
//         })
//     .catch(err => {
//         print(err)
//     })
 addTen(10).then(res => print(res))
print('Hey')

