var url = "https://randomuser.me/api";
var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullnameDisp = document.querySelector("#fullname");
var usernameDisp = document.querySelector("#username");
var emailDisp = document.querySelector("#email");
var cityDisp = document.querySelector("#city");
btn.addEventListener("click", function() {
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        var name = data.results[0].name.first + " " + data.results[0].name.last;
        var username = data.results[0].login.username;
        var email = data.results[0].email;
        var city = data.results[0].location.city;
        var image = data.results[0].picture.medium;
        fullnameDisp.innerText = name;
        usernameDisp.innerText = username;
        emailDisp.innerText = email;
        cityDisp.innerText = city;
        avatar.src = image;
    })
    .catch(function(err) {
        console.log(err);
    })
});