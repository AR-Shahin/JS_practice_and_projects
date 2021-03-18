let $ = (data) => document.querySelector(data)
$('.action-left').style.display = 'none'
function makeRandomNumber(){
    return Math.floor(1000 + Math.random() * 1000)
}

$('#generate-pin').addEventListener('click',function(){
    $('#random-number').value = makeRandomNumber()
})

function getRandomValue(){
    return $('#random-number').value
}
function getDisplayValue(){
    return $('#pin-area').value
}

function insertNumber(num){
    $('#pin-area').value = getDisplayValue() + num
}

function clearDisplay(){
    $('#pin-area').value = ''
}

function removeFromBack(){
    if($('#pin-area').value != ''){
        let currentNumber = getDisplayValue();
       currentNumber = currentNumber.substr(0,currentNumber.length
            -1)
        $('#pin-area').value = currentNumber
    }
}
let i = 0 
$('#submit').addEventListener('click',function(){
    if(getRandomValue() == ''){
        alert('Generate a Code!')
        return
    }

    if(getDisplayValue() === getRandomValue()){
        $('#pin-match').style.display = 'block'
        $('#pin-not-match').style.display = 'none'
    }else{
        i++
        if(i>3){
            $('#submit').setAttribute('disabled','true')
            $('.action-left').style.display = 'block'
            }
        $('#pin-match').style.display = 'none'
        $('#pin-not-match').style.display = 'block'
    }
})
