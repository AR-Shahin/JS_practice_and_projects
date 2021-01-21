function $(data){
    return document.querySelector(data);
}
function _(data){
    return document.createElement(data);
}
function print(data){
    console.log(data);
}
const parent = $('.card')
const table = _('table')
const tr   = _('tr')
const td = _('td')
const span = _('span')

parent.appendChild(span).innerHTML = 'ddd'
parent.appendChild(span).innerHTML = 44
parent.appendChild(span)
parent.appendChild(span)

const input = $('#input')
const text = $('#text')
input.onkeyup = function(){
    print(this.value)
    text.innerHTML = this.value
}


