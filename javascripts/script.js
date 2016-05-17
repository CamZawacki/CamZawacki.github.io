document.getElementById("nav01").innerHTML =
"<ul id='topnav'>" +
	"<li><a href=''>Home</a></li>" + 
  	"<li><a href='../projects/project1'>Project 1</a></li>" + 
  	"<li><a href='../projects/project1'>Project 2</a></li>" + 
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