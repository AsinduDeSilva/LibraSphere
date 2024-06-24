const bookId = new URLSearchParams(window.location.search).get('id');

if (!bookId || !(bookId in BOOKS)) route('404.html');

const BOOK = BOOKS[bookId];

const bookInfo = `
<div class="container flex justify-center items-center my-12">
    <div id="add-book-info-container" class="w-[85%] flex">
        <div class="flex-[5]">
            <div class="rounded-t-lg bg-center bg-cover bg-no-repeat w-[82%] aspect-[1] rounded-xl shadow-lg" style='background-image: ${BOOK.cover}' alt=""></div>
        </div>
            
        <div class="flex-[7]">
            <div class="flex items-center">
                <h1 class="text-4xl font-semibold flex-[7]">${BOOK.name}</h1>
                ${USER.role == 'admin' ? `
                    <div class="flex-[3] ml-2 flex justify-end"> 
                        <button onclick="route('edit-book.html?id=${bookId}')" class="text-white bg-[#0a4d76] hover:bg-[#0a6076] hover:bg-[#] font-medium rounded-lg text-sm px-5 py-2.5  mb-2" >Edit</button>
                        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="ml-1 text-white bg-red-700 hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Delete</button>
                    </div>` : ''
                }
                
            </div>
            <p class="text-[18px] font-medium mt-4 text-gray-600">${BOOK.author}</p>
            <p class="my-6 text-justify text-[15px]">${BOOK.description}</p>

            ${BOOK.available ? `<p class="text-green-600 text-xl font-medium">Available</p>` : 
                USER.role == 'admin' ? `
                    <p>Borrowed by <a href="user.html?username=${BOOK.borrowed_by}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">${BOOK.borrowed_by}</a></p>
                ` : `
                    <p class="text-red-600 text-xl font-medium">Not Available</p>
                `
            }

            <br>

            ${BOOK.eBook ? `
                <a href="${BOOK.eBook}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" download="${BOOK.name} - ${BOOK.author}">
                    Click here to download the e-Book
                </a>` : ''
            }
        </div>

    </div>
</div>
`

InjectComponent('book-info-container', bookInfo);

const btnDeleteOnClick = () => {
    delete BOOKS[bookId];
    post('books', BOOKS);
    route('collection.html');
}


