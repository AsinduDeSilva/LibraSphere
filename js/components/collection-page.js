if(USER.role == 'admin') document.getElementById('btn-addBook').style.display = 'block';

const bookTemplate = (bookId, bookName, bookCover) => {
  return `
    <div class="drop-shadow-xl bg-gray-100 border-gray-200 rounded-lg shadow-md hover:shadow-xl cursor-pointer" onclick="route('book.html?id=${bookId}')">
      <div class="rounded-t-lg bg-center bg-cover bg-no-repeat h-72" style='background-image: ${bookCover}' alt=""></div>
      <div class="p-5">
        <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900">${bookName}</h5>
      </div>
    </div>
  `
}

const loadAllBooks = () => {
    let book_list = "";
    
    for(let [id, book] of Object.entries(BOOKS)){
        book_list = bookTemplate(id, book.name, book.cover) + book_list;
    }
        
    InjectComponent('book-list', book_list);
}
        
loadAllBooks();

document.getElementById('txtSearch').addEventListener('keyup', (e)=> {
  searchBooks();
})

const noResultsFound = document.getElementById('noResultsFound');
const searchBooks = () => {
  noResultsFound.hidden = true;
  let searchInput = document.getElementById('txtSearch').value.toLowerCase();
  if(!searchInput) {
		loadAllBooks();
		return;
	};

	let book_list = "";
  for(let [id, book] of Object.entries(BOOKS)){
    if(book.name.toLowerCase().includes(searchInput)){
			book_list = bookTemplate(id, book.name, book.cover) + book_list;
		}
  }

  if(book_list) { 
    InjectComponent('book-list', book_list);
  }else{
    noResultsFound.hidden = false;
    InjectComponent('book-list', '')
  }
}
