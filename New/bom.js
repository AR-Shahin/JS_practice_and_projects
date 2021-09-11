const print = (el) => console.log(el)

// let win = document.querySelector('body')

document.querySelector('#close').addEventListener('click',()=>{
    window.close()
})

// print(window.innerHeight)
// print(window.innerWidth)

// print(window.screen.pixelDepth)

// print(window.location.href)
// print(window.location.hostname)
// print(window.location.origin)
// print(window.location.pathname)
// print(window.location.protocol)
// print(window.location.port)
function newDoc() {
    window.location.assign("https://www.w3schools.com")
}
// print(window.navigator)
// print(window.navigator.appName)
// print(window.navigator.appCodeName)
// print(window.navigator.product)
// print(window.navigator.platform)
// print(window.navigator.userAgent)
// // confirm('Are you Sure?')
// let person = prompt("Please enter your name", "Harry Potter");
// let text;
// if (person == null || person == "") {
//   text = "User cancelled the prompt.";
// } else {
//   text = "Hello " + person + "! How are you today?";
// }
// print(text)


// print(document.cookie)
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie(name) {
    let user = getCookie(name);
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie(name, user, 365);
      }
    }
  }
  setCookie('shahin',1000,2)
print(getCookie('shahin'))
checkCookie('omi')
