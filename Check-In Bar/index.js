const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error')

const formReg = document.getElementById('form-reg')
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const regEmail = document.getElementById('reg-email')
const regPassword = document.getElementById('reg-password')
const regPassword2 = document.getElementById('reg-password-2')
const errorReg = document.getElementById('error-reg')


form.addEventListener('submit', (e) => {
    let messages = []
    
    if(email.value == '' || email.value == null){
        messages.push('Email is required!')
    }
    if(password.value == '' || password.value == null){
        messages.push('Password is required!')
    }
    else if(password.value.length < 8){
        messages.push('Password must be longer than 8 characters long!')
    }
    
    if (messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(' , ')
    }
    
})

formReg.addEventListener('submit', (e) => {
    let regMessages = []

    if(name.value == '' || name.value == null){
        regMessages.push('Enter your name!')
    }
    if(surname.value == '' || surname.value == null){
        regMessages.push('Enter your surname!')
    }
    if(regEmail.value == '' || regEmail.value == null){
        regMessages.push('Enter your email!')
    }
    if(regPassword.value == '' || regPassword == null){
        regMessages.push('Password is required!')
    }
    else if(regPassword.value.length < 8){
        regMessages.push('Password must be longer than 8 characters long!')
    }
    if(regPassword2.value == '' || regPassword2.value == null){
        regMessages.push('Re-type your password!')
    }
    else if(regPassword2.value.length < 8){
        regMessages.push('Password must be longer than 8 characters long!')
    }
    else if(regPassword2.value != regPassword.value){
        regMessages.push('Your passwords dont match!')
    }
    if (regMessages.length > 0){
        e.preventDefault()
        errorReg.innerText = regMessages.join(' , ')
    }

})