var array = [];
for (var i = 1; i < 101; i++) {
  if (i%3 == 0) {

    if (i%5 == 0) array[i-1] = ("FizzBuzz");

    else  array[i-1] = ("Fizz");

  } else if (i%5 == 0) array[i-1] = ("Buzz");

  else array[i-1] = i;
}

var stamp = document.getElementById('list');

for (var i = 0; i < 100; i++) {
  stamp.innerHTML += "<li>- " + array[i] + "</li>";
}
