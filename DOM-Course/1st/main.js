const log = (el) => console.log(el);
const $ = (el) => document.querySelector(el);

const root = $('#root')

const div = document.createElement('div');
const h2 = document.createElement('h2');
h2.innerText = 'Custom H2'

const h3 = document.createElement('h3');
h3.innerText = 'Custom h3'

const p = document.createElement('p');
p.innerText = 'Custom p'

const a = document.createElement('a');
a.innerText = 'Custom a'
// div.appendChild(h2)
div.append(h2,h3,p)
div.prepend(a)

// a.setAttribute('href','google.com')
a.href = 'https://tutspack.com/'
a.setAttribute('id','btn')

a.classList.add('bg_red','text_white')
// a.classList.remove('bg_red')
log(a.classList)

root.appendChild(div)


let img = $('img')

img.setAttribute('width','200px')
img.dataset.test = 'test'
img.dataset.test1 = 'test1'
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'


a.addEventListener('click',function (e) {
    e.preventDefault();
    let body = $('body')
    body.classList.toggle('bg_purple');
})
