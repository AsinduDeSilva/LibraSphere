const form = document.getElementById('form');
const firstname = document.getElementById('first_name');
const lastname = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phonenumber = document.getElementById('number');
USERS = JSON.parse(localStorage.getItem('users'))

form.addEventListener('submit', e => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const password2Value = password2.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    e.preventDefault();
    if(validate()){
        let user_data = {'email': emailValue, 'first_name' : firstnameValue, 'last_name' : lastnameValue, 'password' : password2Value, 'role' : 'user', 'mobile_number' : phonenumberValue, 'photo' : './assets/no-profie.jpg', borrowed : {}}
        console.log(user_data)
        localStorage.setItem('users', JSON.stringify({...USERS, [emailValue] : user_data }))
        localStorage.setItem('auth', JSON.stringify(user_data))
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

const validate = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const numberValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenumberValue = phonenumber.value.trim();  
    let isValid = true

    if(firstnameValue === '') {
        setError(firstname, 'First Name is required');
        isValid = false
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last Name is required');
        isValid = false
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        isValid = false
    }else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        isValid = false
    }
    else if(Object.keys(USERS).includes(emailValue)){
        setError(email, 'User Exists!');
        isValid = false
    }    
    else {
        setSuccess(email);
    }

    if(numberValue === '') {
        setError(number, 'number is required');
        isValid = false
    } else if(numberValue.length<10) {
        setError(number,'Phone Number must have 10 numbers');
        isValid = false
    }else{
        setSuccess(number);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        isValid = false
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        isValid = false
    } else {
        setSuccess(password);
    }

    if (phonenumberValue === ''){
        setError(phonenumber, 'Phone number is required')
        isValid = false
    }
    else if(isValidPhoneNumber(phonenumberValue)){
        setSuccess(phonenumber);
    }
    else{
        setError(phonenumber, 'Phone number doesn\'t match patter')
        isValid = false
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        isValid = false
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        isValid = false
    } else {
        setSuccess(password2);
    }
    return isValid
    

};

