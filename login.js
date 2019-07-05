const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');
const lForm = document.querySelector('#lf');

lForm.addEventListener('click', login);
let avatar;

function loginCheck(a, b) {

  let savedData = JSON.parse(localStorage.getItem('details'));

  let filterArr = savedData.filter(function (item) {
    return a === item['user Name'] && b === item.password
  })

  if (filterArr.length > 0) {
    avatar = filterArr[0]['first Name'];
    alert('Login Successful')
   return location.replace('crud.html')
  } else if(logUser.value === '' || logPass.value === '')
    { alert('Please put in your details')
}else{
    alert('Username or Password incorrect!')

    // const matchArr = savedData.find(function (detail) {
    //   return a === detail['user Name'] && b === detail.password
    // })

    // const firstName = matchArr.map(function (detail) {
    //   // if(matchArr){
    //    return detail

    // })
    // console.log(firstName['first Name'])

    // if (matchArr) {
    //   // console.log(firstName)
    //   // pFirstName.textContent = firstName["first Name"]
    //   //  location.replace('crud.html')
    // } else {
    //   alert('put in the right values')
  }

}

function login() {
  let user = logUser.value;
  let pass = logPass.value;
  loginCheck(user, pass);
}

function goSign() {
  location.replace('signup.html')
}
