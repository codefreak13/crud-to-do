const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');
const lForm = document.querySelector('#lf');
const signUp = document.querySelector('#signup')
// const pFirstName = document.getElementById('pFirstName');

lForm.addEventListener('click', login);
signUp.addEventListener('click', goSign);

function loginCheck(a, b) {
  let savedData = JSON.parse(localStorage.getItem('details'));
console.log(savedData.password, 'hdgxd')
  const filterArr = savedData.filter(function(item){
    return a === item['user Name'] && b === item.password
  })
  // savedData.map(data => console.log(data['first Name'], 'paaaaa'))                                                           
  console.log(filterArr, 'hhhh')

  // let firstName = filterArr.map(i => {
  //   i.password
  // })

  // console.log(firstName, 'kjdc')
let name;

  if (filterArr.length>0) {
 name = filterArr[0]['first Name'];
 alert('Login Successful')
     // console.log(firstName)
      // pFirstName.textContent = firstName["first Name"]
       location.replace('crud.html')
    } else {
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
  console.log(name)
}

function login() {
  let user = logUser.value;
  let pass = logPass.value;
  loginCheck(user, pass);
}


function goSign() {
  location.replace('signup.html')
}
