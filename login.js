const logUser = document.querySelector('#logUser');
const logPass = document.querySelector('#logPass');
const lForm = document.querySelector('#lf');

//This is a variable for the expected avatar name
let moniker;

//this function filters the localstorage of saved data for a match of the inputted value. 
function loginCheck(a, b) {

  let savedData = JSON.parse(localStorage.getItem('details'));

  let filterArr = savedData.filter(function (item) {
    return a === item['user Name'] && b === item.password
  })

  if (filterArr.length > 0) {
    //this is the value for the moniker expected in the global scope
     moniker = filterArr[0]['first Name'];
    alert('Login Successful');
    //redirects to the homepage if the inputed value has a match in the local storage
   return location.replace('crud.html')
  } else if(logUser.value === '' || logPass.value === '')
    { alert('Please put in your details')
}else{
    alert('Username or Password incorrect!')
  }
}

//This function gets the values from the inputs and runs the loginCheck() 
function login() {
  let user = logUser.value;
  let pass = logPass.value;
  loginCheck(user, pass);
}

//This is an event listener for the functions above.
lForm.addEventListener('click', login);




