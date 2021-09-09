let print = (el) => console.log(el)

const loadData = document.querySelector('#loadData')
const postData = document.querySelector('#postData')
const tbody = document.querySelector('tbody')
const table = document.querySelector('#table')

 print(tbody)
table.style.display = 'none';

loadData.addEventListener('click',sendGetRequest)
postData.addEventListener('click',sendPostRequest)

function sendGetRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://talktoapi.abdulmajid.me/api/v1/todos");
    xhr.send();
    xhr.responseType = "json"

    xhr.onload = () => {
        // let response = JSON.parse(xhr.response);
        let response = xhr.response;
        showAjaxData(response)
    }
}

function sendPostRequest() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://talktoapi.abdulmajid.me/api/v1/todos");
    const data = JSON.stringify({
        title : 'ajax',
        note : 'ajax note',
        comment : 'ajax comment'
    })
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
    xhr.responseType = "json"
    xhr.onload = () => {
        let response = xhr.response;
        print(response)
        sendGetRequest()
    }
}


const showAjaxData = (result) =>{
    let len = result.data.length
    if(len > 0){
        table.style.display = 'block';
        result.data.forEach(element => {
         createNewRow(element)
        });
    }
    
}

const createNewRow = (data) => {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    td1.innerText = data.id
    td2.innerText = data.title
    td3.innerText = data.note
    td4.innerText = data.comment

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tbody.appendChild(tr)
   // return tr
}
