const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const uName = document.querySelector('#uName');
const mail = document.querySelector('#mail');
const pWord = document.querySelector('#pWord');
const sex = document.querySelector('#sex');
const age = document.querySelector('#age');
const login = document.querySelector('#login')

const sForm = document.querySelector('#sForm');

sForm.addEventListener('submit', signUp);

let savedData = JSON.parse(localStorage.getItem('details'));

function signUp(e) {
  e.preventDefault()
  let pDetails = {
    'first Name': fName.value,
    'last Name': lName.value,
    'user Name': uName.value,
    email: mail.value,
    password: pWord.value,
    sex: sex.value,
    age: age.value
  }

  let detailsArr;
  if (fName.value == '' || lName.value == '' || uName.value == '' || mail.value == '' || pWord.value == '' || sex.value == '' || age.value == '') {
    alert('Please fill in all the details')

  } else if (localStorage.getItem('details') == null) {

    detailsArr = [];
    detailsArr.push(pDetails);
    localStorage.setItem('details', JSON.stringify(detailsArr));
    location.replace('login.html');
  } else if (localStorage.getItem('details')) {
    detailsArr = JSON.parse(localStorage.getItem('details'));
    let filterArr = detailsArr.filter((item) => {
      return item['user Name'] === uName.value
    });

    if (filterArr.length > 0) {
      alert('User name is already in use. Please choose another user name')
    } else {
      detailsArr.push(pDetails);
      localStorage.setItem('details', JSON.stringify(detailsArr));
      location.replace('login.html');
    }
  }
  

}

login.addEventListener('click', logIn);

function logIn() {
  location.replace('login.html')
}


