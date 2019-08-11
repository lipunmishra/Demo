function validateUser() {
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  if ("admin"==username && "admin"==password) {
    alert('hey ur sucessfully looged in ,accept the alert');
    window.location.replace('HomePage.html');

  }
  else {
    alert('oops !!! bad credentials');
  }
}


  function welcomeMessage() {

     var msg=prompt("Enter username");

    alert("Hi "+msg+" how r u ?");

    alert(msg+" Have a nice day");
  }

function loveCalculator() {

  var pname1=document.getElementById('username').value;
  var pname2=document.getElementById('username').value;
  console.log(pname1+ " "+pname2);

  var cal=Math.random()*100;
  cal=Math.floor(cal)+10;
  alert("test is  "+cal +"%");

}
