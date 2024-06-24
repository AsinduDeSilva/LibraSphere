function borrow_book(event, book_id){

    event.preventDefault()
    let date = new Date()
    user.borrowed = {...user.borrowed, [book_id] : {borrowed_date : date.toISOString().slice(0,10) ,allocated_days : Number(event.target['allocate'].value)}}

    update('books', book_id, {'available' : false, 'borrowed_by' : user.email})
    update('users', user.email, user)
    
    window.location.reload()

}

function book_selected(book_id){
    $('#add-borrow-book-search').css('display', 'none')
    let book_info = BOOKS[book_id]
    let selected_book = `
        <div class="grid grid-cols-2 gap-16 m-[1rem]">
            <div class="flex justify-center items-center bg-[${book_info.cover}] bg-cover bg-no-repeat bg-center"></div>

            <div class="flex items-center justify-center">
                <div class="w-[100%]">
                    <form class="flex flex-col items-center justify-center" onsubmit="borrow_book(event,'${book_id}')">
                        <div class="flex m-[0.5rem] w-[100%] justify-between">
                    <div>
                        Book Name
                    </div>

                    <div class="font-light">
                        ${book_info.name}
                    </div>
                </div>

                <div class="flex m-[0.5rem] w-[100%] justify-between"> 
                    <div>
                        Author
                    </div>

                    <div class="font-light">
                        ${book_info.author}
                    </div>
                </div>

                <div class="flex m-[0.5rem] w-[100%] justify-between">
                    <div>
                        Overdue Fine
                    </div>

                    <div class="font-light">
                        ${book_info.overdue_fine} LKR
                    </div>
                </div>
                        <div class="flex my-[0.5rem] w-[100%] justify-between">
                            <div>Allocated Days</div>
                            <input class="border-2 bg-zinc-100 outline-none border-none text-right py-[0.2rem] px-[1rem] rounded-md" type='number' min="1" max="365" name="allocate" required>
                        </div>
                        <div class="w-[100%] flex justify-center mt-[1rem]">
                            <input type="submit" class="bg-[#636363] text-sm hover:bg-[#4d4e4f] cursor-pointer w-[10rem] text-white font-semibold py-[1rem] px-4 rounded-full m-[1rem]">
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    `

    InjectComponent('add-borrow-book', selected_book)

}


function book_search(event){
    let query = event.target.value

    
    let book_results = ''

    if (query == ''){
        $('#add-borrow-book-search').css('display', 'none')
    }
    else{ 
        for (book_id of Object.keys(BOOKS)){
            let book_info = BOOKS[book_id]
            if(book_info.name.toLowerCase().includes(query.toLowerCase()) & book_info.available){
                book_results += `
                    <div class="text-sm text-left w-[80%] py-[0.1rem] text-[#4d4e4f] cursor-pointer hover:font-medium" onclick="book_selected('${book_id}')">
                        ${book_info.name}
                    </div>
                `
            }
        }
        $('#add-borrow-book-search').css('display', 'flex')  
        book_results = `<div class="w-[100%] flex justify-center absolute"><div class="w-[60%] py-[1rem] flex flex-col items-center rounded-b-md bg-zinc-100 justify-center">${book_results}</div></div>`
    }

    

    InjectComponent('add-borrow-book-search', book_results)
}