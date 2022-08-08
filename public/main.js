const baseURL = `http://localhost:4444`
const itemsCallback = ({ data: items }) => displayItems(items)
const errCallback = err => console.log(err)
const form = document.querySelector('form')
const itemsContainer = document.querySelector('#items-container')



const getItems = () => {
     axios
.get(`${baseURL}/api/items`)
.then((res) => {
console.log(res.data);
displayItems(res.data);
// addToList(res.data);
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


// WANTED LIST ARRAY
// let list = [];

// // // // // ADD TO LIST 

// function addToList(id){
//     // check if item already exists in user's wanted list
//     if(list.some((product) => product.id === id)){
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

// // render list items
// function renderListItems(){
//     list.forEach(() =>)
// }


// end of this code


// const itemBtn = document.getElementById("item-btn")
// const getItem = () => {
//     axios.get("http://localhost:4444/api/item/")
//     .then(res => {
//         const data = res.data;
//         alert(data);
//     });
// };

// itemBtn.addEventListener('click', getItems)

// function createUserItemCard(item){
//     const itemCard = document.createElement('div')
//     itemCard.classList.add('item-card')
//     itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
//     <p class="name" style="color:#fff;">${item.name}</p> 
//     <p class="price" style="color:#fff;">${item.price}</p>
//     <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000" onclick="putItemBack(${item.id}")">REMOVE FROM LIST</button>
//     `
//     itemsContainer.appendChild(itemCard)
// }



// const itemBtn = document.getElementById("item-btn")
// console.log("Button Was Clicked!")
// const getItem = () =>{
//     axios.get("http://localhost:4444/api/items")
//     .then(res => {
//         const data = res.data;
//         alert (data);
//     })
// }
// itemBtn.addEventListener('click', getItem)

// (function(){
//     const itemBtn = document.querySelectorAll(".item-btn")
//     itemBtn.forEach(function(btn){
//         btn.addEventListener('click',function(event){
//             console.log(event.target)
//         })
//     })

// })();




