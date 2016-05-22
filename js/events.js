//define functions here

function getIt(){
  alert("Hey!");
}
function frameIt(){
  $(this).addClass("tasty");
}
function pressIt(){
  alert("You pressed g key!");
}
function submitIt(){
  alert("your form is going to be submitted now");
  return;
}

$(document).ready(function(){

// call functions here
$("p").click(getIt);
$("img").load(frameIt);
$("input").keydown(pressIt);
$("form").submit(submitIt);
});