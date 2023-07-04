const name = document.getElementById('name');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('password-2');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (password.value.length <= 8){
        messages.push('Password must be longer than 8 characters')
    }
    if (password.value.length >= 22){
        messages.push('Password must be less than 22 characters')
    }
    if(password.value !== passwordTwo.value){
        messages.push('Password does not match the confirm password')
    }



    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})