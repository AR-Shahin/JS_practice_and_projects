const print = (el) => console.log(el)
const dir = (el) => console.dir(el)
const id = (el) => document.getElementById(el)
const getClass = (el) => document.getElementsByClassName(el)
const tag = (el) => document.getElementsByTagName(el)
const $ = (el) => document.querySelector(el)
const _$ = (el) => document.querySelectorAll(el)
// print(document.head)
let h1 = id('h1');
// print(id('h1').innerText)
// print(id('h1').textContent)
// print(id('h1').innerHTML)
// dir(h1)
// h1.style.backgroundColor = 'red'
// print(h1.className = 'k')
// print(h1.classList)
// let parent = id('ul')
// let parent = getClass('first_ul')
// let items = parent[0].getElementsByClassName('item')
// print(items)
// for (let index = 0; index < items.length; index++) {
//     items[index].style.color ='red'   
// }

// let parent = getClass('first_ul')
// let li = parent[0].getElementsByTagName('li')
// print(li)

// let li = $('.first_ul .item')
// print(li.innerText)

// let li = _$(' .item')
// print(li)


// let li = $('.first_ul .item:first-child')
// print(li)

let li = $('.first_ul .item:nth-child(4)')
print(li.innerText)
