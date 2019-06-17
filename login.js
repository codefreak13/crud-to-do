const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');
const lForm = document.querySelector('#lForm');
const signUp = document.querySelector('#signup')

lForm.addEventListener('submit', login);
signUp.addEventListener('click', goSign);

function loginCheck(a, b) {
  let savedData = JSON.parse(localStorage.getItem('details'));

  const matchArr = savedData.find(function (detail) {
    return a === detail['user Name'] && b === detail.password
  })

  if (matchArr) {
     location.replace('crud.html')
  } else {
    alert('put in the right values')
  }
}

function login(e) {
  let user = logUser.value;
  let pass = logPass.value;
  loginCheck(user, pass);
  e.preventDefault();
}


function goSign() {
  location.replace('signup.html')
}
