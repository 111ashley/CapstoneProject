const baseURL = `http://localhost:4444`
const itemsCallback = ({ data: items }) => displayItems(items)
// const datesCallback = ({data: dates}) => displayCards(dates)
const errCallback = err => console.log(err)
const form = document.querySelector('form')
const itemsContainer = document.querySelector('#items-container')
const wantedContainer = document.querySelector('#wanted-container')
const datesContainer = document.querySelector('#dates-container')


const getItems = () => {
     axios
.get(`${baseURL}/api/items`)
.then((res) => {
console.log(res.data);
displayItems(res.data);
})
.catch((err) => console.log(err));
 };

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

let list = [];
const getList = () => {
    axios
    .get(`${baseURL}/api/list`)
    .then((res)=> {
        console.log(res.data);
        displayList(res.data);   
    })
    .catch((err) => console.log(err));
 };

 function displayList(arr) {
    wantedContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++){
        createWantedCard(arr[i])
    }
 }

getList();

function createWantedCard(item){
    console.log(item)
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')
    itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000; font-family: Carbon;" onclick="removeFromList(${item.id})">REMOVE FROM LIST</button>
    `
    itemCard.setAttribute("id", `item-card-${item.id}`)
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
            document.getElementById(`item-card-${id}`).remove()
            console.log(res.data)
        })
        .catch(err => console.log(err))       
}

let dates = []

// function createDateCard(date){
//     console.log(date)
//     const dateCard = document.createElement('div')
//     dateCard.classList.add('date-card')
//     dateCard.innerHTML = `<p class="occassion">${date.occassion}</p>
//     <p class="date">${date.date}</p>`
    
// }


// function submitHandler(e){
//     e.preventDefault()
//     let occassion = document.querySelector('#occassion')
//     let date = document.querySelector('#date')

//     let body = {
//         occassion: occassion.value,
//         date: date.value
//     }

//     postDate(body)
//         occassion.value =''
//         date.value = ''
// }

// const postDate = () => {
//     let body = {
//         occassion: occassion.value,
//         date: date.value
//     }

//     axios.post(`${baseURL}/api/date/add`, body)
//     .then((res)=>{
//         console.log(res.data);
//         occassion.value = ``
//         date.value = ``
//         createDateCard(res.data)
// })
//     .catch(err => console.log(err))
// }

// //////////



const addDateBtn = document.getElementById("add-date-btn")


const datesCallback = ({data : posts}) => displayDates(posts)

// function displayDates(arr) {
//     itemsContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++){
//         createDateCard(arr[i])
//     }
// }

const displayDates = (date) => {
    const showDate = document.createElement("h3")
        showDate.textContent = date
        datesContainer.appendChild(showDate)
}



const postItem = body => {
    axios.post(`${baseURL}/api/dates`, body)
    .then (res => {
        const data = res.data;
        console.log(data);
    });
}


function submitHandler(e) {
    e.preventDefault()

    let occassion = document.getElementById('occassion')
    let date = document.getElementById('date')
  

    let body = {
        occassion: occassion.value,
        date: date.value
    }

    postItem(body)
        occassion.value = ""
        date.value = ""
       
}

form.addEventListener('submit', submitHandler)


// WANTED LIST ARRAY


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







