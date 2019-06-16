const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const uName = document.querySelector('#uName');
const mail = document.querySelector('#mail');
const pWord = document.querySelector('#pWord');
const sex = document.querySelector('#sex');
const age = document.querySelector('#age');
const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');

const sForm = document.querySelector('#sForm');

const lForm = document.querySelector('#lForm');

sForm.addEventListener('submit', signUp);

lForm.addEventListener('submit', login);

function signUp(e) {
  let pDetails = {
    'first Name': fName.value,
    'last Name': lName.value,
    'user Name': uName.value,
    email: mail.value,
    password: pWord.value,
    sex: sex.value,
    age: age.value
  }

  let detailsArr = [];
  if (localStorage.getItem('details') == null) {
    detailsArr.push(pDetails);
    localStorage.setItem('details', JSON.stringify(detailsArr))
  } else {
    detailsArr = JSON.parse(localStorage.getItem('details'));
    detailsArr.push(pDetails);
    localStorage.setItem('details', JSON.stringify(detailsArr))
  }

  location.replace('login.html');
  e.preventDefault()
}

function login(e){
  loginCheck(logUser.value, logPass.value);

  if(filterArr){
    location.replace('crud.html')
  }else{
    alert('Your details are not correct')
  }

  e.preventDefault()
}


function loginCheck(a, b) {
 
 let savedData = JSON.parse(localStorage.getItem('details'));

 let filterArr = savedData.filter(function(detail){
   detail['user Name'] === a && detail.password === b
 })
 return filterArr;
}





function getUserById(id) {
  return JSON.parse(localStorage.getItem('users')).filter(users => users.id === id)
}

getUserById(0)