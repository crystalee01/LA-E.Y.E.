var btn = document.querySelector('button');
function random(number) { // generates a random number from 0 to number+1
  return Math.floor(Math.random()*(number+1));
}
btn.onclick= function() { // when the button is clicked, some function runs
  if(random(6) == 0){
    var rndImg = "url(https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/09/GettyImages-813937720-920x584.jpg)";
  }
  console.log(rndImg); // makes the background color equal the rgb value
}

