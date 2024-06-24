function uploadImage(image_placeholder_id, image_input_element_id){
    const book_cover = document.querySelector(image_placeholder_id)
    const cover_upload = document.querySelector(image_input_element_id)

    const filereader = new FileReader()
    filereader.readAsDataURL(cover_upload.files[0])
    filereader.addEventListener('load', () => book_cover.src = filereader.result)
}

const setError = (element, message) => {
    const errorDisplay = element.nextElementSibling;
  
    errorDisplay.innerText = message;
    errorDisplay.hidden = false;
    element.classList.add('bg-red-50', 'border-red-500', 'text-red-900','placeholder-red-700', 'focus:ring-red-500')
}

const setSuccess = (element) => {
  const errorDisplay = element.nextElementSibling;

  errorDisplay.innerText = '';
  errorDisplay.hidden = true;
  element.classList.remove('bg-red-50', 'border-red-500', 'text-red-900','placeholder-red-700', 'focus:ring-red-500')
};