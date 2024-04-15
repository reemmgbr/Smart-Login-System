// const logout = document.querySelector('#logout');
// logout.innerHTML = localStorage.getItem('username');
// function ifUser() {
//   if (users != null) {
//     window.location.replace('./login.html');
//   }
// }
// ifUser();
// logout.addEventListener('click', () => {
//   localStorage.removeItem('username');
//   window.location.replace('./login.html');
// });
// logout.addEventListener('click', function () {
//   localStorage.removeItem('username');
// });
if (!localStorage.getItem('username')) {
  window.location.replace('./login.html');
}
document.getElementById('username').innerHTML = localStorage.getItem('username');
document.getElementById('logout').addEventListener('click', function () {
  localStorage.removeItem('username');
  location.replace('./login.html');
});
