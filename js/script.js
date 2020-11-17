document.getElementById('btn').addEventListener("click",
function() {
  var array = [];
  for (var i = 1; i < 101; i++) {

    if (i%3 == 0) {

      if (i%5 == 0) array[i-1] = ("FizzBuzz");

      else  array[i-1] = ("Fizz");

    } else if (i%5 == 0) array[i-1] = ("Buzz");

    else array[i-1] = i;
  }

  for (var i = 0; i < 100; i++) {
    document.getElementById('list').innerHTML += "<li>" + array[i] + "</li>";
  }

  document.getElementById('btn').className = "hidden";
  document.getElementById('list').className = "show";
})
