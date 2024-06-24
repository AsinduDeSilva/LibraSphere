const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
USERS = JSON.parse(localStorage.getItem('users'))

form.addEventListener('submit', e => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    e.preventDefault();
    console.log(validateInputs())
    if(validateInputs()){
        localStorage.setItem('auth', JSON.stringify(USERS[emailValue]))
        route('index.html')
    }

});


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPhoneNumber = phonenumber =>{
    return /^\d{10}$/.test(String(phonenumber))
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim(); 
    let valid = false

    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }
    else if(Object.keys(USERS).includes(emailValue)){
        setSuccess(email);
    }    
    else {
        setError(email, 'User doesn\'t exits');
    }


    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue === USERS[emailValue]['password'] ) {
        setSuccess(password);
        valid = true
    } else {
        setError(password, 'wrong password')
    }

    return valid
    

};

