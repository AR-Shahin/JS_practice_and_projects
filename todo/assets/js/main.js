let $ = (data) => document.querySelector(data);
let print = (data) => console.log(data)
let create = (data) => document.createElement(data)

//1. selection
let form = $('#todoForm')
let name = $('#name')
let phone = $('#phone')
let tbody = $('#tbody')
let deleteRow = $('.deleteRow')
//2. eventListener
form.addEventListener('submit',function(e){
    e.preventDefault()
    if(name.value == '' || phone.value == ''){
        alert('Filed must not be empty!')
    }else{
//        tbody.appendChild((addNewRow(name.value , phone.value)))
        addNewRow(name.value , phone.value)
        name.value = ''
        phone.value = '';
    }
    
          //delete
    let deleteRow = $('.deleteRow')
    deleteRow.addEventListener('click',function(){
        print(55)
    })
    
    })

//3. template design
function addNewRow(name,phone){
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

     tbody.appendChild(newRow)
    
    //return newRow
}




