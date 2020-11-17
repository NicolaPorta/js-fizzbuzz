var stamp = document.getElementById('list');
document.getElementById('btn').addEventListener("click",
function() {
  for (var i = 1; i < 101; i++) {

    if (i%3 == 0) {

      if (i%5 == 0) stamp.innerHTML += "<li>FizzBuzz</li>";

      else  stamp.innerHTML += "<li>Fizz</li>";

    } else if (i%5 == 0) stamp.innerHTML += "<li>Buzz</li>";

    else stamp.innerHTML += "<li>" + i + "</li>";
  }

  document.getElementById('btn').className = "hidden";
  stamp.className = "show";
})
