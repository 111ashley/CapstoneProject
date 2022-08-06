const baseURL = `http://localhost:4444`
const itemsCallback = ({ data: items }) => displayItems(items)
const errCallback = err => console.log(err)
const form = document.querySelector('form')
const itemsContainer = document.querySelector('#items-container')
const browseBtn = document.querySelector('#see-all')
const choicesDiv = document.querySelector('#choices')
const userListDiv = document.querySelector('#user-list')
const browseHeader = document.querySelector('#browse-header')
const yourListHeader = document.querySelector('#your-list-header')


const getItems = () => {
     axios
.get(`${baseURL}/api/items`)
.then((res) => {
console.log(res.data);
displayItems(res.data);
})
.catch((err) => console.log(err));
 };

let choices = []
let userList = []

yourListHeader.classList.add('hide')


function createItemCard(item){
    console.log(item)
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000" onclick="chooseItem(${item.id}")">ADD TO LIST</button>
    `
    itemsContainer.appendChild(itemCard)
}

function createUserItemCard(item){
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000" onclick="putItemBack(${item.id}")">REMOVE FROM LIST</button>
    `
    itemsContainer.appendChild(itemCard)
}

function displayItems(arr) {
    itemsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
    }
}

const changeItems = () => {
    choicesDiv.innerHTML = ''
    browseHeader.classList.remove('hide')

    choices.forEach(choice => {
        let itemHtml = createItemCard(choice)
        choicesDiv.innerHTML += itemHtml
    })
}

const changeItemsList = () => {
    choicesDiv.innerHTML = ''
    browseHeader.classList.remove('hide')

    choices.forEach(choice => {
        let itemHtml = createItemCard(choice)
        choicesDiv.innerHTML += itemHtml
    })
}

const putItemBack = (id) => {
    let index = userList.findIndex(item => item.id === id)
    choices.push(userList[index])
    userList.splice(index, 1)
    changeItems()
    changeItemsList()
    // duelBtn.classList.add('hide')
    if (userList.length === 0) {
        yourListHeader.classList.add('hide')
    }
}


getItems()


const makeItemCard = (item) => {
    return `
        <div class="item-card outline">
        <img src='${item.imgURL}' alt='${item.name}'/>
        <h3>${item.name}</h3>
        <h4>${item.price}</h4>
        <button class="item-btn" onclick="putItemBack(${item.id})">Remove from List</button>
        </div>
    `
}

const makeItemDisplayCard = (item) => {
    return `
        <div class="item-card outline">
        <img src='${item.imgURL}' alt='${item.name}'/>
        <h3>${item.name}</h3>
        <h4>${item.price}</h4>
        </div>
    `
}


