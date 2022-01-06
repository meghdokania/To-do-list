// Selectors
 const todoInput= document.querySelector('.todo-input');
 const todoButton= document.querySelector('.todo-button');
 const todoList= document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

function addTodo(event){
    // prevent form from submitting  
    event.preventDefault();
    // ToDo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    const completeButton = document.createElement('button');
    completeButton.innerHTML= '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);

    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    // DELETE TODO 
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    // CHECK TODO 
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}