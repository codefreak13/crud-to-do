const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const taskBtn = document.querySelector('#taskBtn');
// const li = document.querySelector('.pTask');


taskBtn.addEventListener('click', fire);
document.addEventListener('DOMContentLoaded', persistor);
taskList.addEventListener('click', removeTask)

function fire() {
  
    addTask()
   saveTask();

  taskInput.value = '';
}

function addTask() {
  if(taskInput.value === ''){
    alert('please input a task')
    li.style.display = 'none';}
  let li = document.createElement('li');
  li.className = 'pTask';
  li.appendChild(document.createTextNode(taskInput.value));
  let a = document.createElement('a');
  let img = document.createElement('img');
  img.setAttribute('src', 'images/cancel.svg');
  img.className = 'delete';
  a.appendChild(img);
  li.appendChild(a);
  taskList.appendChild(li)
}

function saveTask() {
  let taskArr = [];
  if (localStorage.getItem('task') == null) {
    taskArr.push(taskInput.value);
    localStorage.setItem('task', JSON.stringify(taskArr))
  } else {
    taskArr = JSON.parse(localStorage.getItem('task'));
    taskArr.push(taskInput.value);
    localStorage.setItem('task', JSON.stringify(taskArr))
  }
}

function persistor() {
  const savedData = JSON.parse(localStorage.getItem('task'));
  savedData.forEach(element => {
    let li = document.createElement('li');
    li.className = 'pTask';
    li.appendChild(document.createTextNode(element));
    let a = document.createElement('a');
    let img = document.createElement('img');
    img.setAttribute('src', 'images/cancel.svg');
    img.className = 'delete';
    a.appendChild(img);
    li.appendChild(a);
    taskList.appendChild(li)
  });
}

function removeTask(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove()
  };
  removeTaskFromLS(e.target.parentElement.parentElement)
}

function removeTaskFromLS(value) {
  const savedData = JSON.parse(localStorage.getItem('task'));
  savedData.forEach(function (element, index) {
    if (element === value.textContent) {
      savedData.splice(index, 1)
    }
  });
  localStorage.setItem('task', JSON.stringify(savedData))
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', clearTask);

function clearTask(){
  taskList.innerHTML = '';
  localStorage.removeItem('task')
}