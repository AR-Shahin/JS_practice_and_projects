let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)
let create = (data) => document.createElement(data)

//select
$('#todoForm').addEventListener('submit',function(e){
    e.preventDefault()
    let name = $('#name').value
    let phone = $('#phone').value
    if(name == '' || phone == ''){
        alert("Empty not Allowed!");
        return;
    }
    //addRow(name,phone);
    createNewRow(name,phone)
    clearData()
    //delete
    $('.deleteRow').addEventListener('click',function(){
    this.parentNode.parentNode.style.background = 'red'
})
})

function createNewRow(name,phone){
  let i = 0
    const newRow = create('tr')

    //new Sl
    const newSl = create('td')
    newSl.innerHTML = '#'
    newRow.appendChild(newSl)

    //new name
    const newName = create('td')
    newName.innerHTML = name
    newRow.appendChild(newName)
    //new Phone
    const newPhone = create('td')
    newPhone.innerHTML = phone
    newRow.appendChild(newPhone)

    //new Delete
    const newDelete = create('td')
    newDelete.className = 'text-center'
    newDelete.innerHTML = '<a class="btn btn-sm btn-danger text-light deleteRow">Delete</a>'
    newRow.appendChild(newDelete)

    $('#tbody').appendChild(newRow)
}

function clearData(){
    let name = $('#name').value = ''
    let phone = $('#phone').value = ''
}


