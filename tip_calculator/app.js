const $ = (d) => document.querySelector(d)
const create = (d) => document.createElement(d)
const print = (d) => console.log(d)

//select
const totalBill = $('#totalBill')
const tipInput = $('#tipInput')
const tipOutput = $('#tipOutput')
const tipAmount = $('#tipAmount')
const totalBillWithTip = $('#totalBillWithTip')
const result = $('#results')

//processing
tipInput.onchange = function(){
    if(totalBill.value == ''){
        alert('Field Must not be empty!')
    }else{
        result.style.display = 'block'
        tipOutput.innerHTML = `${tipInput.value}$`
        let tip = Number(totalBill.value) * (tipInput.value /100)
        tip = tip.toFixed(2)
        tipAmount.value = tip
        let total = Number(totalBill.value) + Number(tip)
        total = total.toFixed(2)
        totalBillWithTip.value = total
        
    }
}


