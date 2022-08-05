import SuitController from './SuitController.js';

const SuitController = new SuitController(0);  

//soyyme function that does things 
// const addItemCard = (suit) => {
//     const plantHtml = <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="..."/>
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>

//   const suitController = document.querySelector('#list-items');
//   suitController.innerHTML += plantHtml;
// }

function addItemCard(suit){
    const plantHtml = `<div = "row"> <div class="card" style="width: 15rem;">
    <img src="${suit.img}" class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">${suit.name}</h5>
        <p class="card-text">${suit.description}</p>
        <a href="#" class="btn btn-primary">Get one today!</a>
    </div>
</div>
</div>`

  const suitController = document.querySelector('#list-items');
  suitController.innerHTML += plantHtml;
}


//storage function 
function localStorageSampleData() {
  if(!localStorage.getItem("items")){
    const sampleItems = [{'name': 'Phildendron Mican', 'description': 'Velvet leaf phildendron', 'img':'images/Mican_angle1.jpg'},{'name': 'Heartleaf Phildendron', 'description': ' Dark green heart-shaped leaves', 'img':'images/Philo_hederaceum_angle1.jpg'}]
    localStorage.setItem("items", JSON.stringify(sampleItems));
  }
}

function loadListFromPlantController() {
  for(let i = 0; i < SuitController._items.length; i++) {
    const item = SuitController._items[i];
    addItemCard(item);
  }
}


localStorageSampleData();
SuitController.loadItemsFromLocalStorage();
loadListFromSuitController();