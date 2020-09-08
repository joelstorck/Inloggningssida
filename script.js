let namn = "test";
let lösenord = "1234";

let succesfulDiv = document.createElement("div");
let welcomeMessage = document.createElement("p");
let signOut = document.createElement("button");
let signOutNode = document.createTextNode("Sign Out!");

let failedDiv = document.createElement("div");
let notWelcomeMessage = document.createElement("p");
let tryAgain = document.createElement("button");
let tryAgainNode = document.createTextNode("Try Again!");
    
    succesfulDiv.setAttribute("id", "succesfulDiv");
    succesfulDiv.appendChild(welcomeMessage);
    succesfulDiv.appendChild(signOut);
    welcomeMessage.innerHTML = "<strong>" + "Hjärtligt välkommen till din sida " + "</strong>" + "<i>" + (name) +"!" + "</i>";
    signOut.setAttribute("id", "signOut");
    signOut.appendChild(signOutNode);

    failedDiv.setAttribute("id", "failedDiv");
    failedDiv.appendChild(notWelcomeMessage);
    failedDiv.appendChild(tryAgain);
    notWelcomeMessage.innerHTML = "<strong>" + "Fel användarnamn/lösenord, var god försök igen! </strong>";
    tryAgain.setAttribute("id", "tryAgain");
    tryAgain.appendChild(tryAgainNode);

    // Testar funktioner
    function showSuccess() {
        document.body.appendChild(succesfulDiv).style.display = "block";
        console.log("HEJ HEJ HEJ");
    };
    
    // showSuccess();

let checkLS = localStorage.getItem("username");
if(checkLS){
    document.body.appendChild(succesfulDiv).style.display = "block";
    document.body.appendChild(start).style.display = "none";
    
    document.getElementById("signOut").addEventListener("click",function() {
        localStorage.removeItem("username");
        localStorage.removeItem("password");  
        document.body.appendChild(start).style.display = "block";
        document.body.appendChild(succesfulDiv).style.display = "none";
        })
}

document.getElementById("login").addEventListener("click",function() {
    let nameInput = document.getElementById("user").value;
    let username = String(nameInput);
    let passwordInput = document.getElementById("password").value;
    let password = String(passwordInput);

    if(username == namn && password == lösenord){
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        document.body.appendChild(succesfulDiv).style.display = "block";
        document.body.appendChild(start).style.display = "none";
            console.log(username);
            console.log(password);
    }
    else {
        document.body.appendChild(start).style.display = "none";
        document.body.appendChild(failedDiv).style.display = "block";

    
    }
    
    document.getElementById("tryAgain").addEventListener("click",function() {
        document.body.appendChild(start).style.display = "block";
        document.body.appendChild(failedDiv).style.display = "none";
        })
});
