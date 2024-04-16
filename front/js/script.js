document.getElementById('changeMessage').addEventListener('click', function() {
   document.getElementById('greetings').innerHTML = "Goodbye world!"; 
});

let counterValue = 0;

document.getElementById('incrementCounter').addEventListener('click', function() {
   document.getElementById('counter').innerHTML = counterValue++; 
});

document.getElementById("nameForm").addEventListener("submit", function(event) {
   event.preventDefault()
   const name = document.getElementById("name").value

   fetch('http://localhost:3000/api/customGreeting', {
      method: 'POST',
      headers: {
         'Content-Type': "application/json",
      },
      body: JSON.stringify({name: name})
   })
   .then(response => response.json())
   .then(data => {
      document.getElementById('serverResponse').innerHTML = data.greeting
   })
})