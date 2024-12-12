
var emailInp = document.getElementById("email");
var passInp = document.getElementById("password");


var users = [
    { email: "test@example.com", password: "password123", name: "John Doe" }
];

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    var users = JSON.parse(localStorage.getItem("users"));
    if (users === null) {
        alert("No users found. Please register first.");
        return;
    }

    
    var user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) {
        alert("Invalid email or password. Please try again.");
        return;
    }

   
    localStorage.setItem("userName", user.name);
    window.location.href = "hello.html";
}


function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    var users = JSON.parse(localStorage.getItem("users"));
    if (users === null) {
        users = [];
    }

    var existingUser  = users.find(user => user.email === email);
    if (existingUser  !== undefined) {
        alert("Email already exists. Please try again.");
        return;
    }

   
    users.push({ email: email, password: password, name: name });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    window.location.href = "index.html"; 
}
function logout() {
    localStorage.removeItem("userName");
    window.location.href = "index.html";
}