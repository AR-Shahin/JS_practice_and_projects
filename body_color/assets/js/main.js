let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)

const hex = ['0','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
//select

const btn = $('#btn')
const body = $('body')
const h3 = $('h3')
const span = $('span')
let color = '#'
btn.addEventListener('click',colorGenerator);
function colorGenerator(e){
    e.preventDefault();
   for(let i =0;i<6;i++){
       let num = Math.floor(Math.random()*15);
       color+= hex[num]
   }
    body.style.background = color
    print(color)
    h3.innerHTML = 'Your Color is : ' + color
    this.style.color = color
    color = '#'
}