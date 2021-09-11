const print = (el) => console.log(el)

// navigator.geolocation.getCurrentPosition((position) => {
//     print(position.coords.latitude)
// })


// print(history.length)

document.querySelector('#history').addEventListener('click',function (){
    history.forward()
})


// localStorage.setItem('name','shahin')
// let storage = localStorage.key('name'); // key returns key of specific element
// print(localStorage.length)
// for (i = 0; i < localStorage.length; i++) {
//     x = localStorage.key(i);
//     print(x)
//   }

// print(localStorage.key(12))
// print(localStorage.removeItem('name'))
// print(localStorage.getItem('todos'))
localStorage.clear()
// if (typeof(Worker) !== "undefined") {
//     print('ok')
//   } else {
//     print('no')
//   }


const fetchData = async () => {
    let data = await fetch('https://talktoapi.abdulmajid.me/api/v1/todos')
    print(await data.json())
}
fetchData()

