const colors = ['red','blue','green','yellow','pink','coral','purple']
const print = (d)=>{
    console.log(d);
}
const mainDiv = document.querySelector('#mainDiv')
const h4 = document.querySelector('h4')

const selectedColor =  document.querySelector('#selectedColor')
h4.className = 'mt-2'
h4.style.display = 'inline-block'


for (let color of colors){
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.background = color
    mainDiv.appendChild(box)
    box.addEventListener('click',function(){
        h4.innerHTML = 'You have selected -> '
        selectedColor.style.background = color
        selectedColor.innerHTML = color.toUpperCase()
    })


}


var x = typeof colors;
print(x)

let i =0
const btn = document.querySelector('#btn').addEventListener('click',function(e){
    e.preventDefault();
    this.style.background = colors[i]
    this.style.color = '#fff' 
    i == colors.length ? i=0: i++

})
