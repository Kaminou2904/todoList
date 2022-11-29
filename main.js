console.log('Hello World!');

let deleteBtn = document.getElementById('deleteBtn');

showTodos();


// function to add in localStorage.
addBtn.addEventListener('click', function(e) {
  console.log('i am add button !');

  let addBtn = document.getElementById('addBtn');
  let deleteBtn = document.getElementById('deleteBtn');
  let inputTit = document.getElementById('inputTit');
  let inputDesc = document.getElementById('inputDesc');


  let todos = localStorage.getItem('todos');

  if (todos == null) {
    todosObj = [];
  } else {
    todosObj = JSON.parse(todos);
  }

  let myObj = {
    title: inputTit.value,
    desc: inputDesc.value,
  }

  todosObj.push(myObj);
  localStorage.setItem('todos', JSON.stringify(todosObj));

  inputTit.value = '';
  inputDesc.value = '';
  showTodos();
});

function showTodos(){
  let todos = localStorage.getItem('todos');

  if (todos == null) {
    todosObj = [];
  } else {
    todosObj = JSON.parse(todos);
  }
  
  let html = '';
  todosObj.forEach(function(element, index){
    html += `
      <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.desc}</p>
          <button id="${index}" class="btn btn-danger" onclick="deleteTodos(this.id)">Delete</button>
        </div>
      </div>
    `
  })
  
  let todosElm = document.getElementById('todosDiv');
  if (todosObj.length != 0) {
    todosElm.innerHTML = html
  } else {
    todosElm.innerHTML = `Nothing to show here !`
  }
};


// function to delete todos 
function deleteTodos(index){
  let todos = localStorage.getItem('todos');

  if (todos == null) {
    todosObj = [];
  } else {
    todosObj = JSON.parse(todos);
  }
  console.log(index);
  todosObj.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todosObj));
  showTodos();
}
