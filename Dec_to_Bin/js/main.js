let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)

//select
let btn = $('#submit')
let number = $('#number')
let result = $('#result')
//calculation
btn.addEventListener('click',function(e){
    e.preventDefault()
    if(number.value < 0){
        alert('Input a valid number.')
    }else if(number.value  == ''){
        alert('Enter a number.')
    }else{
        let bin = Number(number.value).toString(2)
        result.innerHTML = bin
    }
})




