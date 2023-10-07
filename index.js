// Manipulation of the DOM
let todos = []

const todoLIst = document.getElementById('AllTodos')
const todoInput = document.getElementById('textInut')
const inputButton = document.getElementById('Add')
const showWriteTodo = document.getElementById('showWriteTodo')
const writeTodo = document.getElementById('writeTodo')


function showTodoInput(){
    writeTodo.style.display = 'block'
}

showWriteTodo.addEventListener('click', showTodoInput)

//The add todo function 
function addTodo(e){
    // e.preventDefault()
    let textValue = todoInput.value
    todos.push(textValue)
    todoLIst.innerHTML = ''  //reseting the inner html so that stuff is not repeated
    renderTodos()
    todoInput.value = ''

}

inputButton.addEventListener(addTodo)




//the remove todo function 
function removeTodo(index){
    todos = todos.filter((todo,i) => {
        return i === index ? false : true

    })
    todoLIst.innerHTML = ''  //reseting the inner html so that stuff is not repeated
    renderTodos()

}




//Edit the item in the todo List
function editTodo(index){
    //query selector allows you to target css elements
    const currElement = document.querySelector(`#AllTodos div:nth-child(${index + 1}) p`).innerText
    const splicedText = currElement.slice(3)
    removeTodo(index)
    todoInput.value = splicedText
}




inputButton.addEventListener('click', addTodo)

// On pageload, take every element in the todo list and append it to the Alltodos html tag
function renderTodos() {
    todos.forEach((todo, i) =>{
        let currentHTML = todoLIst.innerHTML
        let newHTML =(
            `<div class="todoItem">
            <p>${i+1}. ${todo}</p>

            <div class ="actions">
                <i onclick = "editTodo(${i})" class="fa-solid fa-pen"></i>
                <i onclick = "removeTodos(${i})"class="fa-solid fa-trash-can"></i>
            
            
            </div>
        
            </div>`
        )

        let amendedHTML = currentHTML + newHTML
        todoLIst.innerHTML = amendedHTML

    })


}

renderTodos()