const container = document.querySelector(".container"),
    passwordhidden = document.querySelectorAll(".showpass"),
    showpassword = document.querySelectorAll(".password"),
    signup = document.querySelector(".signup-link"),
    signin = document.querySelector(".login-link");


// mudando o icone para hidden  e show.

passwordhidden.forEach(eyeIcon => {

    eyeIcon.addEventListener("click", ()=> {
        showpassword.forEach(pwField => {
            if(pwField.type === "password"){
                pwField.type = "text";

                passwordhidden.forEach(icon => {
                    icon.classList.remove("uil-eye-slash");
                    icon.classList.add("uil-eye");
                    
                })

            }else{
                pwField.type = "password";

                passwordhidden.forEach(icon => {
                    icon.classList.add("uil-eye-slash");
                    icon.classList.remove("uil-eye");
                    
                })
            }
        })
    })  
});


// código para ir pra login e signup.
signup.addEventListener("click", ( )=>{
    container.classList.add("active");
});
signin.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

