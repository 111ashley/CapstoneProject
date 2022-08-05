const baseURL = `http://localhost:4444`
const itemsCallback = ({ data: items }) => displayItems(items)
const errCallback = err => console.log(err)
const form = document.querySelector('form')
const itemsContainer = document.querySelector('#items-container')
const browseBtn = document.querySelector('#see-all')


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

function displayItems(arr) {
    itemsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
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


