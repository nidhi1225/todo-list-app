let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let element = document.getElementsByClassName('itemAll');
let TaskCout = document.getElementById('task-count');

// function to be performed on clicking add button to add task in list
addToDoButton.addEventListener('click', function(){
    if(inputField.value){
    TaskCout.innerText = element.length + 1;
    let div = document.createElement('div');
    let listItem = document.createElement('h3');
    let deleteBtn=document.createElement('button');
    let checkBtn=document.createElement('button');
    let listItemBox = document.createElement('div');

    listItem.classList.add('itemAll')
    deleteBtn.innerHTML = `<i class="fa fa-trash-o action-btn" ></i>`;
    checkBtn.innerHTML = `<i class="fa fa-check action-btn"></i>`;
    listItemBox.classList.add('list-item');
    listItem.innerText = inputField.value;
    listItemBox.appendChild(listItem);
    div.appendChild(listItemBox);
    div.appendChild(checkBtn)
    div.appendChild(deleteBtn)
    div.classList.add('todo-item');
    toDoContainer.appendChild(div);
    inputField.value = "";


// it is to delete single task from list
    deleteBtn.addEventListener('click', function(){
        let parentNodee = this.parentNode;
        console.log(parentNodee)
        parentNodee.remove();

    })

// it is to mark task as complete
    checkBtn.addEventListener('click', function(){
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "lightgrey";
    })
    
    listItem.addEventListener('click', function(){
    listItem.style.textDecoration = "line-through";
    listItem.style.color = "lightgrey";

})
}

})
// it is to delete all task and emptying list
let deleteAll = document.getElementById('deleted');
let completeAll = document.getElementById('completed');

deleteAll.addEventListener('click', function(){
    
    const elements = document.getElementsByClassName('todo-item');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    TaskCout.innerText = element.length;
})
// it is to mark all task as readed
completeAll.addEventListener('click', function(){

    for(let i =0 ; i<element.length;i++){
        element[i].classList.add('complete-all');
    }
    
})