let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)


const texts = ['Photographer','Web designer','Web developer']

let count = 0
let index = 0
let currentText = ''
let letter = '';


(function type(){
    if(count === texts.length){
        count = 0
    }
    currentText = texts[count]
    letter = currentText.slice(0,++index)
   // print(letter + index)
    $('#dynamicText').innerHTML = letter
    if(letter.length === currentText.length){
        count ++;
        index = 0;
    }
    setTimeout(type,400)
})()