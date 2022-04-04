const inputPattern = document.getElementById("pattern")
const inputString = document.getElementById("string")
const button = document.querySelector(".verify-button")
const invalid = document.querySelector(".no-match");
const valid = document.querySelector(".match");
const displayErr = document.querySelector(".err")

button.addEventListener("click", checkPattern);

function checkPattern()
{
    const pattern = inputPattern.value;
    const string = inputString.value;
    let regex;
    
    if(pattern == ""){
        displayErr.innerHTML = "Pattern field is empty";
        displayErr.style.display="block"
        setTimeout(function() { displayErr.style.display="none"}, 2000);
    }
    if(string == ""){
        displayErr.innerHTML = "String field is empty";
        displayErr.style.display="block"
        setTimeout(function() { displayErr.style.display="none"}, 2000);
    }

    try{
        regex = new RegExp(pattern);
    }
    catch(err){
        console.error(err);
        displayErr.innerHTML = err;
        displayErr.style.display="block"
        setTimeout(function() {displayErr.style.display="none"}, 2000);
    }

    const isFound = regex.test(string);

    if(isFound == true){
        valid.style.display = "block";
        setTimeout(function() {valid.style.display="none"}, 2000);
    }
    else{
        invalid.style.display = "block"
        setTimeout(function() {invalid.style.display="none"}, 2000);
    }
}

