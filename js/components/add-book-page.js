const txtBookId = document.getElementById('txtBookId');
txtBookId.value = generateBookId();
let eBook = '';

const coverUpload = document.getElementById('dropzone-file')
const coverUploadError = document.getElementById('coverUploadError')
const bookCover = document.getElementById('bookCover')
coverUpload.addEventListener('change', () => {
    if(coverUpload.files[0].size > 300000) {
      coverUploadError.hidden = false;
      return;
    }
    coverUploadError.hidden = true;
    const filereader = new FileReader()
    filereader.readAsDataURL(coverUpload.files[0])
    filereader.addEventListener('load', () => {
        bookCover.style.backgroundImage = `url(${filereader.result})`
    })
})

const eBookUpload = document.getElementById('eBookUpload');
const eBookUploadError = document.getElementById('eBookUploadError');
eBookUpload.addEventListener('change', () => {
  if(eBookUpload.files[0].size > 600000) {
    eBookUploadError.innerHTML = 'Too Large'
    eBookUploadError.classList.add('text-red-600')
    return;
  }
  eBookUploadError.innerHTML = '(Max. 600KB)'
  eBookUploadError.classList.remove('text-red-600')
  const filereader = new FileReader()
  filereader.readAsDataURL(eBookUpload.files[0])
  filereader.addEventListener('load', () => {
    eBook = filereader.result
  })
})

const txtName = document.getElementById('txtName');
const txtAuthor = document.getElementById('txtAuthor');
const txtDescription = document.getElementById('txtDescription');
const txtOverdueFine = document.getElementById('txtOverdueFine');

const validateFields = () => {
  txtName.value ? setSuccess(txtName) : setError(txtName, 'Name is required');
  txtAuthor.value ? setSuccess(txtAuthor) : setError(txtAuthor, 'Author is required');
  txtDescription.value ? setSuccess(txtDescription) : setError(txtDescription, 'Description is required');
  ////////////
  txtOverdueFine.value < 0 || (Number)(txtOverdueFine.value) === NaN ? setError(txtOverdueFine, 'Enter a valid fine') : setSuccess(txtOverdueFine);

  return txtName.value && txtAuthor.value && txtDescription.value && (txtOverdueFine.value >= 0);
}

document.getElementById('addBookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateFields()) return;

    BOOKS[txtBookId.value] = {
        name : txtName.value,
        author : txtAuthor.value,
        description : txtDescription.value,
        available : true,
        borrowed_by : null,
        overdue_fine: (Number)(txtOverdueFine.value),
        eBook : eBook,
        cover: bookCover.style.backgroundImage
    }

    post('books', BOOKS);

    alert("Book added successfully");
    window.location.reload();
})





