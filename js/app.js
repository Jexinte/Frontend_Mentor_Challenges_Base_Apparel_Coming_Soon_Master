// const arrow = document.querySelector('.arrow')
const mail = document.querySelector('.mail')
const form = document.querySelector('form')
const regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)
const displayErrorLogo = document.querySelector('.error-exclamation')
const errorMsg = document.querySelector('.errormsg');


form.addEventListener('submit',(e) =>  {
    e.preventDefault()

    if(!regexMail.test(mail.value)) {
     
        mail.style.border = "1px solid red"
        displayErrorLogo.style.visibility = "visible"
        errorMsg.classList.add('errormsgstyle')
        errorMsg.textContent = "Please provide a valid email"
    }

    else {
        errorMsg.classList.remove('errormsgstyle')
        errorMsg.textContent = ""
        mail.style.border = "none"
        displayErrorLogo.style.visibility = "hidden"
        alert("DO NOT LOOK HER EYES")
       
    }
})