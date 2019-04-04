const bottonReference = document.querySelector('#botao');
const inputReference = document.querySelector('input');
const ulReference = document.querySelector('#app ul');


const listaDeTodos = JSON.parse(localStorage.getItem('lista_todos')) || [];

const renderTodos = () => {
  ulReference.innerHTML = '';
  for (x of listaDeTodos){
    let todoELement = document.createElement('li');
    let textoTodos = document.createTextNode(x);
    let linkElement = document.createElement('a');
    let textoLink = document.createTextNode(' Excluir');
    let posicao = listaDeTodos.indexOf(x) 

    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deleteTodo('+ posicao +')')

    linkElement.appendChild(textoLink);

    todoELement.appendChild(textoTodos);
    todoELement.appendChild(linkElement);

    ulReference.appendChild(todoELement);

  
  };
}; renderTodos();

bottonReference.onclick = function addTodos(){
  let textoInput = inputReference.value;
  listaDeTodos.push(textoInput);
  inputReference.value = '';
  renderTodos();
  local();
};

const deleteTodo = (pos) => {
  listaDeTodos.splice(pos, 1);
  renderTodos();
  local();
};

const local =  () => localStorage.setItem('lista_todos', JSON.stringify(listaDeTodos));
