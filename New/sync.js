const print = (el) => console.log(el)

// Sync 
// const takeOrder = (customer) => print(`Take order for ${customer}`)
// const completeOrder = (customer) => print(`Complete order for ${customer}`)
// const processOrder = (customer) => {
//     print(`Processing Order for ${customer}`);
//     let currentTime = new Date().getTime()
//     while(currentTime + 3000 >= new Date().getTime());
//     print(`Processed Order for ${customer}`)
// }

// takeOrder(`customer 1`)
// processOrder('customer 1')
// completeOrder('customer 1')


// Async
// const processOrder = (customer) => {
//     print(`Processing Order for ${customer}`);
//     setTimeout(()=> print('Cooking Complete!'),3000)
//     print(`Processed Order for ${customer}`)
// }

// takeOrder(`customer 1`)
// processOrder('customer 1')
// completeOrder('customer 1')

// Callback
const sayGoodBye = (customer) => print(`Good Bye ! ${customer}`)
const completeOrder = (customer,callback) => {
    print(`Complete order for ${customer}`)
    callback(customer)
}
const takeOrder = (customer,callback) => {
    print(`Take order for ${customer}`)
    callback(customer)
}
const processOrder = (customer,callback) => {
    print(`Processing Order for ${customer}`);
    setTimeout(()=> {
        print('Cooking Complete!')
        print(`Processed Order for ${customer}`)
        callback(customer)
    } ,1000)  
}


takeOrder('cus 1', (customer) => {
    processOrder(customer,(customer)=> {
        completeOrder(customer,(customer) =>{
            sayGoodBye(customer)
        })
    })
})

takeOrder('cus 1', (customer) => {
    processOrder(customer,(customer)=> {
        completeOrder(customer,sayGoodBye)
    })
})
print('hello')
// takeOrder()
