// A callback is a function passed as an argument to another function.

// Without Callback

const print = (el = 'content') => console.log(el)


// function calculator(n1,n2) {
//     let sum = n1 + n2
//     print('Sum is ' + sum)
// }
// calculator(10,20)

// Callback

// function fun1(params) {
//     console.log('Function one ' + params)
// }
// function fun2(params) {
//     console.log('Function Two ' + params)
// }
// function calculator(n1,n2,callback) {
//     let sum = n1 + n2
//     callback(sum)
// }
// calculator(10,20,function (params) {
//     console.log('Reference Func' + params)
// })


function somethingDo(email,callback) {
    callback(email)
}
somethingDo('s@mail.com',function (email) {
    console.log(`Mail Sent By SMTP (${email})`)
})

somethingDo('s@mail.com',function (email) {
    console.log(`Mail Sent By Gmail (${email})`)
})
