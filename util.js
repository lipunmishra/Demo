function validateUser() {
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  if ("admin"==username && "admin"==password) {
    alert('hey ur sucessfully logged in ,accept the alert');
    window.location.replace('HomePage.html');

  }
  else {
    alert('oops !!! bad credentials');
  }
}
