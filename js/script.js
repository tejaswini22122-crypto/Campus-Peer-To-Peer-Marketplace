// Welcome message
console.log("Campus Peer-to-Peer Marketplace Loaded");

// Post Item Button
const postForm = document.querySelector("form");

if (postForm) {
    postForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your item has been posted successfully!");
    });
}
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        alert("Login Successful!");
    });
}
const registerForm = document.querySelector("#registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(event){

event.preventDefault();

alert("Registration Successful!");

});

}