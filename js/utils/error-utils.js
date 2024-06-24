function show_error_message(message){
    const error_container = document.getElementById('error-container')
    const error_message = document.getElementById('error-message')
    error_container.style = {...error_container.style, display : 'none'}
    error_message.textContent = message

    error_container.style = {...error_container.style, display : 'block'}
}