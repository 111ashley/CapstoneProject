const baseURL = `http://localhost:4444`;
const itemsCallback = ({ data: items }) => displayItems(items);
const errCallback = (err) => console.log(err);
const form = document.querySelector("form");
const itemsContainer = document.querySelector("#items-container");
const wantedContainer = document.querySelector("#wanted-container");
const eventsContainer = document.querySelector("#events-container");

const getItems = () => {
  axios
    .get(`${baseURL}/api/items`)
    .then((res) => {
      console.log(res.data);
      displayItems(res.data);
    })
    .catch((err) => console.log(err));
};

function createItemCard(item) {
  console.log(item);
  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");
  itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000; font-family: Carbon;" onclick="addToList(${item.id})">ADD TO LIST</button>
    `;
  itemsContainer.appendChild(itemCard);
}

function displayItems(arr) {
  itemsContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createItemCard(arr[i]);
  }
}
getItems();

const getList = () => {
  axios
    .get(`${baseURL}/api/list`)
    .then((res) => {
      console.log(res.data);
      displayList(res.data);
    })
    .catch((err) => console.log(err));
};

function displayList(arr) {
  wantedContainer.innerHTML = ``;
  for (let i = 0; i < arr.length; i++) {
    createWantedCard(arr[i]);
  }
}

getList();

function createWantedCard(item) {
  console.log(item);
  const itemCard = document.createElement("div");
  itemCard.classList.add("item-card");
  itemCard.innerHTML = `<img alt='${item.name}' src=${item.imgURL} class="item-image"/>
    <p class="name" style="color:#fff;">${item.name}</p> 
    <p class="price" style="color:#fff;">${item.price}</p>
    <button class="item-btn" style="background-color:#83D0CB; border: solid 2px #000; font-family: Carbon;" onclick="removeFromList(${item.id})">REMOVE FROM LIST</button>
    `;
  itemCard.setAttribute("id", `item-card-${item.id}`);
  wantedContainer.appendChild(itemCard);
}

function addToList(id) {
  // sending data from the front-end to the back-end
  const data = {
    id: id,
  };
  // once item id is found, a new card for that item will be created for the wanted list
  axios.post(`${baseURL}/api/wantedlist/add`, data).then((res) => {
    console.log(res.data);
    createWantedCard(res.data);
  });
}

// REMOVE ITEMS FROM LIST
function removeFromList(id) {
  axios
    .delete(`${baseURL}/api/wantedlist/remove/${id}`)
    .then((res) => {
      document.getElementById(`item-card-${id}`).remove();
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function createEventCard(event) {
  console.log(event);
  const eventCard = document.createElement("div");
  eventCard.classList.add("event-card");
  eventCard.innerHTML = `<p class="occassion">${event.occassion}</p>
    <p class="date">${event.date}</p>`;

  eventsContainer.appendChild(eventCard);
}

const addEventBtn = document.getElementById("add-event-btn");

const getEvent = () => {
  axios
    .get(`${baseURL}/api/events`)
    .then((res) => {
      console.log(res.data);
      displayEvents(res.data);
    })
    .catch((err) => console.log(err));
};

function displayEvents(arr) {
  console.log(eventsContainer.children);
  while (eventsContainer.children.length > 1) {
    eventsContainer.removeChild(eventsContainer.lastChild);
  }
  for (let i = 0; i < arr.length; i++) {
    createEventCard(arr[i]);
  }
}

const postEvent = (body) => {
  axios.post(`${baseURL}/api/events`, body).then((res) => {
    const data = res.data;
    displayEvents(data);
  });
};

function submitHandler(e) {
  e.preventDefault();

  let occassion = document.querySelector("#occassion");
  let date = document.querySelector("#date");

  let body = {
    occassion: occassion.value,
    date: date.value,
  };

  postEvent(body);
  occassion.value = "";
  date.value = "";
}

form.addEventListener("submit", submitHandler);
