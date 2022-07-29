const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm-password");

function samePassword(){
    if (password.value === confirmedPassword.value)
    {
        console.log("Same password!");
        return true;
    }
    else
    {
        console.log("Not the same password.");
        return false;
    }
}


password.addEventListener("change", () =>{
    if (samePassword()){
        password.classList.add("outline-correct");
        password.classList.remove("outline-wrong");
    }
    else{
        password.classList.add("outline-wrong");
        password.classList.remove("outline-correct");
    }
})

password.addEventListener("change", () => {
    if (samePassword()){
        confirmedPassword.classList.add("outline-correct");
        confirmedPassword.classList.remove("outline-wrong");
    }
    else{
        confirmedPassword.classList.add("outline-wrong");
        confirmedPassword.classList.remove("outline-correct");
    }
})


confirmedPassword.addEventListener("change", () =>{
    if (samePassword()){
        password.classList.add("outline-correct");
        password.classList.remove("outline-wrong");
    }
    else{
        password.classList.add("outline-wrong");
        password.classList.remove("outline-correct");
    }
})


confirmedPassword.addEventListener("change", () =>{
    if (samePassword()){
        confirmedPassword.classList.add("outline-correct");
        confirmedPassword.classList.remove("outline-wrong");
    }
    else{
        confirmedPassword.classList.add("outline-wrong");
        confirmedPassword.classList.remove("outline-correct");
    }
})