var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [] //caso não encontre um valor no local storage, ele retorna uma string vazia

function renderTodos() {
    listElement.innerHTML = ''; /*coloca tudo que está dentro da ul vazio para que quando o botão adicionar seja pressionado
                                não repita o array todo novamente*/

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        
        var position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ position +')');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText); //adiciona elemento ao final do array de todos
    inputElement.value = "";
    renderTodos();
    saveToStorage(); 
}

buttonElement.onclick = addTodo;

function deleteTodo(position){
    todos.splice(position, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); //O json converte o array em uma string e salva no local storage

}