const log = (el) => console.log(el);
const $ = (el) => document.querySelector(el);

// DOM Traverse 

let grandParent = $('#grandParent');

// changeBg(grandParent)
// log(grandParent)
let grandChildrens = grandParent.children


let parent1 = grandChildrens[0];




let childsOfParentOne = parent1.children
let parentOneChildThree = childsOfParentOne[2]
// changeBg(parentOneChildThree)

let parentOneChildTwo = parentOneChildThree.previousElementSibling

let parentOneChildOne = parentOneChildTwo.previousElementSibling

let parentOneChildTwoFromChildOne = parentOneChildOne.nextElementSibling


let parentTwo = grandChildrens[1]

let parentTwoChilds = parentTwo.children

let parentTwoSecondChild = parentTwoChilds[1]

log()



let child22_3 = $('.child22_c')

log(child22_3.parentNode)

changeBg(child22_3.parentNode.parentElement.parentElement)
// changeBg(parentTwoSecondChild.children[1]);
function changeBg(el) {
    el.style.backgroundColor = 'red'
}
