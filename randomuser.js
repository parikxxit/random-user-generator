var url = "https://randomuser.me/api";
var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullnameDisp = document.querySelector("#fullname");
var usernameDisp = document.querySelector("#username");
var emailDisp = document.querySelector("#email");
var cityDisp = document.querySelector("#city");
btn.addEventListener("click", function() {
    fetch(url)
    .then(parseJSON)
    .then(updateProfile)
    .catch(handelError)
}); 

function parseJSON(res){
    return res.json().then(function(parsedData) {
        return parsedData.results[0];
    });
}
function updateProfile(data) {
    var name = data.name.first + " " + data.name.last;
    var username = data.login.username;
    var email = data.email;
    var city = data.location.city;
    var image = data.picture.medium;
    fullnameDisp.innerText = name;
    usernameDisp.innerText = username;
    emailDisp.innerText = email;
    cityDisp.innerText = city;
    avatar.src = image;
}
function handelError(err) {
    console.log(err);
}