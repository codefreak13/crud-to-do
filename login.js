const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');
const lForm = document.querySelector('#lForm');
const signUp = document.querySelector('#signup')

lForm.addEventListener('submit', login);
signUp.addEventListener('click', goSign);

function loginCheck(a, b) {

  let savedData = JSON.parse(localStorage.getItem('details'));
  console.log(savedData)
  savedData.forEach(function (detail) {
    if (a === detail['user Name'] && b === detail.password) {
      location.replace('crud.html')
    } else {
      alert('correct inputs please!')
    }
  })
}

function login(e) {
  let user = logUser.value;
  let pass = logPass.value;
  loginCheck(user, pass)
 
  e.preventDefault()
}


function goSign() {
  location.replace('signup.html')
}