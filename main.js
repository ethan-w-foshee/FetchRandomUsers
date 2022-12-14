let data
let userList = document.getElementById("userList")
let ul = document.createElement('ul')
let li = document.createElement('li')
let li2 = document.createElement('li')
let br = document.createElement('br')


window.onload = function () {
    onload()
}

function onload() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(users => {
            data = users
            // console.log(data)
        });
}

function userAmountTest() {
    resetPage()
    let count = document.getElementById("userCount").value
    fetch(`https://randomuser.me/api/?results=${count}`)
        .then(res => res.json())
        .then(users => {
            data = users
        })
        .then(() => loadList())
}

function loadList() {
    // console.log(data)
    data.results.map((results, index) => {
        li = document.createElement('li')
        li.innerHTML = `#${index + 1}, Name: ${results.name.title} ${results.name.first} ${results.name.last} <button class="userCountButton" onclick="moreInfo(this.parentElement)">More Info</button>
        <br>
        <img src=${results.picture.large}>`
        userList.append(li)
    })
}

function moreInfo(contact) {
    ul.innerHTML = ""
    contact.append(ul)
    let number = Array.from(contact.parentElement.children).indexOf(contact)
    let index = data.results[number]
    li2 = document.createElement('li')
    li2.innerHTML = `Email: <u>${index.email}</u>
    <br>
    Age: ${index.dob.age}
    <br>
    Address:
    <br><i>
    ${index.location.street.number} ${index.location.street.name} <br>${index.location.city}, ${index.location.state} <br>${index.location.country} </i>`
    ul.append(li2)
}

function resetPage() {
    // console.log(data)
    userList.innerHTML = ""
    ul.innerHTML = ""
    data = []
}