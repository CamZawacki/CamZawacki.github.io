document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='../projects/project1.html'>Data</a></li>" +
"</ul>";

function myFunction() {
    document.getElementsByClassName("topnav")[0].innerHTML =
"<ul class='topnav'>" + 
  "<li><a href='#home'>Home</a></li>" + 
  "<li><a href='#news'>News</a></li>" + 
  "<li><a href='#contact'>Contact</a></li>" + 
  "<li><a href='#about'>About</a></li>" + 
  "<li class='icon'>" + 
    "<a href='javascript:void(0);' onclick='myFunction()'>&#9776;</a>" +
  "</li>" + 
"</ul>";
}