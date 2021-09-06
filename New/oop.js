let print = (el) => console.log(el)

const person = {
    name : 'shahin',
    age : 21,
    skills : ['php','js'],
    getName : function () {
        return this.name
    }
}

for(props in person){
    print(person[props])
}
