let print = (el) => console.log(el)

let data = '{"name":"John", "age":30, "car":null}'

// print(typeof JSON.parse(data))
let obj = {
    name : 'shahin'
}
print(obj)
print( JSON.stringify(obj))
