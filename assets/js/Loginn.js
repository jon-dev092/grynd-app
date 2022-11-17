var signInButton = document.querySelector("#sign-in");
var msgDiv = document.querySelector("#msg");

// Displays message if email or password is not entered
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

signInButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Must enter an email!");
  } else if (password === "") {
    displayMessage("error", "Must enter a password!");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);  
    document.location.replace('./index.html');
  }
});

// Quotes API
const apiKey = 'Nmp/fqCuCNi+rNQJkJeopA==ZzhTQpocvxTJEaOa';
var quoteEl = document.querySelector('.quote-element'); 
var authorEl = document.querySelector('.author-element');
var category = 'fitness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': apiKey},
    contentType: 'application/json',
    success: function(result) {
        quoteEl.innerHTML = '"' + result[0].quote + '"';
        authorEl.innerHTML = result[0].author;
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


