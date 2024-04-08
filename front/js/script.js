document.getElementById('changeMessage').addEventListener('click', function() {
   document.getElementById('greetings').innerHTML = "Goodbye world!"; 
});

let counterValue = 0;

document.getElementById('incrementCounter').addEventListener('click', function() {
   document.getElementById('counter').innerHTML = counterValue++; 
});