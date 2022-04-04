const inputParagraph = document.getElementById("paragraph")
const inputPattern2 = document.getElementById("pattern")
const button2 = document.querySelector(".verify-button")
const invalid2 = document.querySelector(".no-match");
const displayErr = document.querySelector(".err")

button2.addEventListener("click",extractSubstring);

function extractSubstring()
{
    const paragraph = inputParagraph.value;
    const regexValue = inputPattern2.value;
    let regexPattern;

    try{
        if(paragraph == ""){
            throw displayErr.innerHTML = "Paragraph field is empty";
        }
        else if(regexValue == ""){
            throw displayErr.innerHTML = "Pattern field is empty";
        }
    }catch(err)
    {
        console.error(err);
        displayErr.style.display="block";
        setTimeout(function() {displayErr.style.display="none"}, 2000);
    }
    
    try{
        regexPattern = new RegExp(regexValue,'g');
    }catch(err)
    {
        console.error(err);
        displayErr.innerHTML = err;
        displayErr.style.display="block"
        setTimeout(function() {displayErr.style.display="none"}, 2000);
    }
    
    const matches = paragraph.match(regexPattern);

    if(matches == null && regexValue !="" && paragraph != ""){
        invalid2.style.display = "block";
        setTimeout(function() {invalid2.style.display="none"}, 2000);
    }
    else{
        console.log(matches);
        alert(matches);
    }
}