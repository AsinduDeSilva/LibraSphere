const bookId = new URLSearchParams(window.location.search).get('id');
const book = BOOKS[bookId]

if (!book) route('404.html');

const bookCover = document.getElementById('bookCover');
const txtBookId = document.getElementById('txtBookId');
const txtName = document.getElementById('txtName');
const txtAuthor = document.getElementById('txtAuthor');
const txtDescription = document.getElementById('txtDescription');
const txtOverdueFine = document.getElementById('txtOverdueFine');

bookCover.style.backgroundImage = book.cover;
txtBookId.value = bookId;
txtName.value = book.name;
txtAuthor.value = book.author;
txtDescription.value = book.description;
txtOverdueFine.value = book.overdue_fine;


const coverUpload = document.getElementById('dropzone-file')
coverUpload.addEventListener('change', () => {
    //coverUpload.files[0].size >  
    const filereader = new FileReader()
    filereader.readAsDataURL(coverUpload.files[0])
    filereader.addEventListener('load', () => {
        bookCover.style.backgroundImage = `url(${filereader.result})`
    })
})

let eBook;
const eBookUpload = document.getElementById('eBookUpload');
eBookUpload.addEventListener('change', () => {
  const filereader = new FileReader()
  filereader.readAsDataURL(eBookUpload.files[0])
  filereader.addEventListener('load', () => {
    eBook = filereader.result
  })
})


const validateFields = () => {
  txtName.value ? setSuccess(txtName) : setError(txtName, 'Name is required');
  txtAuthor.value ? setSuccess(txtAuthor) : setError(txtAuthor, 'Author is required');
  txtDescription.value ? setSuccess(txtDescription) : setError(txtDescription, 'Description is required');
  txtOverdueFine.value >= 0 ? setSuccess(txtOverdueFine) : setError(txtOverdueFine, 'Enter a valid fine');

  return txtName.value && txtAuthor.value && txtDescription.value && (txtOverdueFine.value >= 0);
}

document.getElementById('editBookForm').addEventListener('submit', (e) => {
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

    alert("Book updated successfully");
    window.history.back()
})