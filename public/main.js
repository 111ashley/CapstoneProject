const baseURL = `http://localhost:4444`
const itemsCallback = ({ data: items }) => displayItems(items)
const errCallback = err => console.log(err)
const form = document.querySelector('form')
const itemsContainer = document.querySelector('#items-container')
const wantedContainer = document.querySelector('#wanted-container')



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

// function createItemCard(item){
//     console.log(item)
//     const itemCard = document.createElement('div')
//     itemCard.classList.add('item-card')
//     itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
//     <p class="name" style="color:#fff;">${item.name}</p> 
//     <p class="price" style="color:#fff;">${item.price}</p>
//     <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000" onclick="chooseItem(${item.id}")">ADD TO LIST</button>
//     `
//     itemsContainer.appendChild(itemCard)
// }

function createItemCard(item){
    console.log(item)
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000; font-family: Carbon;" onclick="addToList(${item.id})">ADD TO LIST</button>
    `
    itemsContainer.appendChild(itemCard)
}

function displayItems(arr) {
    itemsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createItemCard(arr[i])
    }
}

getItems();

function createWantedCard(item){
    console.log(item)
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000; font-family: Carbon;" onclick="removeFromList(${item.id})">REMOVE FROM LIST</button>
    `
    wantedContainer.appendChild(itemCard)
}

function addToList(id){
    // sending data from the front-end to the back-end
    const data = { 
        id:id
    }
    // once item id is found, a new card for that item will be created for the wanted list
    axios.post(`${baseURL}/api/wantedlist/add`, data).then((res)=>{
        console.log(res.data);
        createWantedCard(res.data);
    })
}

// REMOVE ITEMS FROM LIST
function removeFromList(id){
    const data ={
        id:id
    }
    axios.delete(`${baseURL}/api/wantedlist/remove`, data)
    .then((res)=>{
            wantedContainer.innerHTML = ``
            console.log(res.data)
        })
        .catch(err => console.log(err))       
}

// WANTED LIST ARRAY
let list = [];

// // // // // ADD TO LIST 

// function addToList(id){
//     // check if item already exists in user's wanted list
//  if(list.some((product) => product.id === id)){
//         alert("Item already in list!")
//     } else{
//     // console.log(id);
//     const product = items.find((item) => item.id === id)
//     // console.log(product)
//     list.push(product);
//     // Future implementation of ranking list items
//     // list.push({
//     //     //destructure
//     //     ...product,
//     //     rankingNumber: 1,
//     // });
//     // console.log(list);
// }

// updateList();
// }1

// addToList();

// // update list
// function updateList(){
//     renderListItems();

// }
// //////// NEW LINES OF CODE /////////

// function renderListItems(){
//     wantedContainer.innerHTML = ""; //clear list element
//     wantedList.forEach((item)=> {
//         wantedContainer.innerHTML += `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
//         <p class="name" style="color:#fff;">${item.name}</p> 
//         <p class="price" style="color:#fff;">${item.price}</p>
//         <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000; font-family: Carbon;" onclick="removeFromList(${item.id})">REMOVE FROM LIST</button>
//         `})
// }

// // render list items
// function renderListItems(){
//     list.forEach(() =>)
// }


// end of this code







