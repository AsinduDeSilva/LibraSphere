function BookInfo(book_info){
    return `
                    <td class="text-center text-sm">
                            ${book_info.name}
                    </td>

                    <td class="text-center text-sm">
                            LKR ${book_info.overdue_fine}
                    </td>`
}

function returned(book_id){
    update('books', book_id, {'available': true, 'borrowed_by' : null})
    delete user['borrowed'][book_id]
    update('users', user.email, user)
    delete display_user_borrowed_books[book_id]

    BOOKS = get('books')
    USERS = get('users')
    user = USERS[user.email]

    borrow_search()
    generate_borrowed_books(display_user_borrowed_books)
    
}

function paid_returned(book_id){
    update('books', book_id, {'available': true, 'borrowed_by' : null})
    delete user['borrowed'][book_id]
    update('users', user.email, user)
    delete display_user_borrowed_books[book_id]

    window.location.reload()
}

function BorrowInfo(book_borrowed_info, book_id){
    if(USER.role == 'user') user = USER;
    let borrow_info = `
                    <td class="text-center text-sm">
                            ${book_borrowed_info.borrowed_date}
                    </td>

                    <td class="text-center text-sm">
                            ${get_return_date(book_borrowed_info.borrowed_date, book_borrowed_info.allocated_days)}
                    </td>
    `
    
    let num_of_remainig_days = get_remaining_days(book_borrowed_info.borrowed_date, book_borrowed_info.allocated_days)

    if (num_of_remainig_days < 0){
        borrow_info += `
                <td class="text-sm">LKR ${calculate_book_overdue_fine(user.email, book_id)}</td>
        `

        if (admin_view){
            borrow_info += `<td class="text-center text-sm">
                                <button class="bg-[#0A4C76] hover:bg-[#0a6076] text-white font-medium py-2 px-4 rounded" onclick='paid_returned("${book_id}")'>Over Due Fee Paid & Returned</button>
                            </td>`
        }
    }
    else{
        borrow_info += `
                <td class="text-center text-sm">${num_of_remainig_days} Days Left</td>
        `

        if (admin_view){
            borrow_info += `<td>
                                <div class="flex justify-center items-center w-[100%] h-[100%]">
                                    <button class="bg-[#0A4C76] text-sm hover:bg-[#0a6076] text-white text-medium font-medium py-2 px-4 rounded" onclick='returned("${book_id}")'>Returned</button>
                                </div>
                            </td>`
        }
    }

    return borrow_info
}

let index = 0

function search(){
    search_borrowed_books($('#query').val())
    generate_borrowed_books(display_user_borrowed_books)
}

function reset(){
    search_borrowed_books($('#query').val())
    generate_borrowed_books(user_borrowed_books)
}





function generate_borrowed_books(user_borrowed_books){
    let items = Object.keys(user_borrowed_books)
    let BORROWED_BOOKS = ''
    if(items.length){
        for (let i = index*items_per_page; i < items.length; i++){
                let book_info = BOOKS[items[i]]
                let book_borrowed_info = user_borrowed_books[items[i]]
                let bg_color = (i%2 == 0) ? '#ffffff' : '#fafafa'
                BORROWED_BOOKS += `
                <tr class='bg-[${bg_color}] hover:bg-zinc-100' onclick="route('book.html?id=${items[i]}')">   
                        <td>
                            <div class="h-[10rem] p-[1rem] border bg-cover bg-no-repeat bg-center cursor-pointer" style="background-image: ${book_info.cover}"></div>
                        </td>

                            ${BookInfo(book_info)}

                            ${BorrowInfo(book_borrowed_info, items[i])}

                </tr>
            `
            
        }

        BORROWED_BOOKS = `
            <thead class="text-zinc-100 bg-[#0A4C76] rounded-t-xl"> 
                <tr>
                    <th></th>
                    <th>
                        <div class="flex justify-center items-center font-light">
                            Book Name
                        </div>
                    </th>
                    <th>
                        <div class="flex justify-center items-center font-light">
                            Overdue Fee
                        </div>
                    </th>
                    <th>
                        <div class="flex justify-center items-center font-light">
                            Borrowed Date
                        </div>
                    </th>
                    <th>
                        <div class="flex justify-center items-center font-light">
                            Return Date
                        </div>
                    </th>
                    <th>
                        <div class="flex justify-center items-center font-light">
                            Left Days / Fine
                        </div>
                    </th>
                    
                    <th></th>
                </tr>
            </thead>
            <tbody class=" h-[85%]">
            ${BORROWED_BOOKS}
            </tbody>
        `
        InjectComponent('borrowed-books-container', BORROWED_BOOKS)
    }
    else{
        const NO_BOOK = `<div class='w-[100%] h-[40%] flex justify-center items-center'>
                            <div class='w-[10%] h-[10%] text-[#e7e9eb]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m14.167 7.833l4.666-4.666M20 5.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"/><path d="M19 11.5v6.48c0 2.307 0 3.46-.773 3.872c-1.497.8-4.304-1.867-5.637-2.67c-.773-.465-1.16-.698-1.59-.698s-.817.233-1.59.698c-1.333.803-4.14 3.47-5.637 2.67C3 21.44 3 20.287 3 17.981V9.708c0-3.634 0-5.45 1.172-6.58C5.29 2.052 7.06 2.003 10.5 2m-7 5H10"/></g></svg>
                            </div>
                        </div>`
        InjectComponent('borrowed-books-container', NO_BOOK)
    }
}

function next_items(){
    index += 1;
    generate_borrowed_books(display_user_borrowed_books)
}

function prev_items(){
    index -= 1;
    generate_borrowed_books(display_user_borrowed_books)
}

function search_borrowed_books(query){
    display_user_borrowed_books = {}
    for (book_id of Object.keys(user_borrowed_books)){
        if(BOOKS[book_id].name.toLowerCase().includes(query.toLowerCase())) display_user_borrowed_books[book_id] = user_borrowed_books[book_id]
    }
}

generate_borrowed_books(display_user_borrowed_books)



RESULTS += ` 
                    <tr style="z-index: ${i};" class="hover:bg-zinc-100 bg-[${bg_color}] hover:cursor-pointer" onclick="route('user.html?username=${item}')">
                        <td class="flex items-center justify-center">
                            <img class="w-[5rem] h-[5rem] object-cover rounded-full object-center" src="${user_info.photo}">
                        </td>
                        
                        <td class="text-sm">
                            ${user_info.first_name+" "+user_info.last_name}
                        </td>

                        <td class="text-sm text-wrap">
                            ${user_info.email}
                        </td>

                        <td class="text-sm">
                            ${user_info.mobile_number}
                        </td>

                        <td class="text-sm">
                            ${Object.keys(user_info.borrowed).length}
                        </td>

                        <td class="text-sm">
                            ${calculate_total_overdue_fine(user_info.email)}$
                        </td>
                    </tr>
            `