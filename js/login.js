var emailLogin = document.querySelector('#emailLogin');
var passwordLogin = document.querySelector('#passwordLogin');
var btnlogin = document.querySelector('#btnlogin');
var success = document.querySelector('#success');
//signup page = click signup => {} => [{}]=> set signup users localStorage
//login page = get signup users from localStorage => copmare it

let users;
if (localStorage.getItem('dataLocal')) {
  users = JSON.parse(localStorage.getItem('dataLocal'));
  console.log(users);
} else {
  users = [];
  console.log(users);
}
console.log(users);
if (localStorage.getItem('username')) {
  location.replace('./home.html');
}
btnlogin.addEventListener('click', login);
function login() {
  const email = emailLogin.value;
  const password = passwordLogin.value;
  // [{},{},{},{}]

  for (let i = 0; i < users.length; i++) {
    // clearData();
    //

    if (email == users[i].email && password == users[i].password) {
      success.innerHTML = 'success';
      success.classList.add('text-success');
      success.classList.remove('text-danger');

      // console.log("ssss");

      // users[1];

      // localStorage.setItem('isLogedin', users[i]);
      var homename = users[i].name;
      localStorage.setItem('username', homename);
      window.location.replace('./home.html');
    }

    // console.log(dataArray[i]);
  }
}
// deleteData();

function clearData() {
  emailLogin.value = '';
  passwordLogin.value = '';
}
function vaidatedata(element) {
  var regex = {
    emailLogin: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    passwordLogin: /[A-Z]([0-9]|[a-z]){6,16}/,
  };
  if (regex[element.id].test(element.value) == true) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
  } else {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
  }
}
