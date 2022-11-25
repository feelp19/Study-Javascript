const nome = document.querySelector("#name")

function Person (name, age, subscribed){
    this.name = name,
    this.age = age,
    this.subscribed = subscribed
}

let pessoa = new Person(nome.value)