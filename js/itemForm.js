import SuitController from './SuitController.js';

const SuitController = new SuitController(0);

const newItemForm = document.querySelector('#newItemForm');

//listener that handles the events and get input from user input. 
newItemForm.addEventListener('submit', (event) =>{
    
    event.preventDefault();

    const itemName = document.querySelector('#fname');
    const itemDescription = document.querySelector("#lname");
    const itemImg = document.querySelector('#dname');

    const name = itemName.value;
    const description = itemDescription.value;
    const imageUrl = itemImg.value;

    //console.log(name, description, imageUrl);

    SuitController.addItem(name, description, imageUrl);

    itemName.value = '';
    itemDescription.value = '';
    itemImg.value = '';
})
