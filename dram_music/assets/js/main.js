let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)

window.addEventListener("load" ,function(){
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = $('.visual')

    const colors = [
 '#16a085','#27ae60','#2980b9','#8e44ad','#f39c12','#e74c3c'
    ]

    pads.forEach(function(pad, index){
         pad.addEventListener('click',function(){
             sounds[index].currentTime = 0
             sounds[index].play();
             createBubble(index)
         })
    })
    
    //create bubbles
    const createBubble = (index) => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.background = colors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this)
        })
    }
});
