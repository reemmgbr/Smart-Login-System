var nameSignup = document.querySelector('#nameSignup');
var emailSignup = document.querySelector('#emailSignup');

var passwordSignup = document.querySelector('#passwordSignup');
var btnSignup = document.querySelector('#btnSignup');
var loginBtn = document.querySelector('#loginBtn');
// console.log(nameSignup, emailSignup, passwordSignup, btnSignup);
var dataArray = [];
if (localStorage.getItem('dataLocal') == null) {
  dataArray = [];
} else {
  dataArray = JSON.parse(localStorage.getItem('dataLocal'));
}
if (localStorage.getItem('username')) {
  location.replace('./home.html');
}
function add() {
  var data = {
    name: nameSignup.value,
    email: emailSignup.value,
    password: passwordSignup.value,
  };
  dataArray.push(data);
  console.log(dataArray);
  localStorage.setItem('dataLocal', JSON.stringify(dataArray));
  clearData();
}

function clearData() {
  nameSignup.value = '';
  emailSignup.value = '';
  passwordSignup.value = '';
}
function vaidatedata(element) {
  var regex = {
    nameSignup: /[A-Z][a-z]{3,16}/,
    emailSignup: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    passwordSignup: /[A-Z]([0-9]|[a-z]){6,16}/,
  };
  if (regex[element.id].test(element.value) == true) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
  }
}

// loginBtn.addEventListener("click", loginPage);
// function loginPage() {
//   window.open("http://127.0.0.1:5501/", "_self	");
// }
