function calculate_total_overdue_fine(user_email){
    let total_overdue_fine = 0
    const date = new Date()
    const current_date = new Date(`${date.toISOString()}`.slice(0,10))
    for(book_id of Object.keys(USERS[user_email].borrowed)){
        let borrowed_data = USERS[user_email].borrowed[book_id]
        let book_data = BOOKS[book_id]
        let issued_date = new Date(borrowed_data.borrowed_date)
        
        let has_gone = (current_date - issued_date)/86400000
        if (has_gone > borrowed_data.allocated_days){
            total_overdue_fine += book_data.overdue_fine * (has_gone - borrowed_data.allocated_days)
        }
    }

    return total_overdue_fine
}

function calculate_book_overdue_fine(user_email, book_id){
    const date = new Date()
    const current_date = new Date(`${date.toISOString()}`.slice(0,10))
    let borrowed_data = USERS[user_email].borrowed[book_id]
    let book_data = BOOKS[book_id]
    let issued_date = new Date(borrowed_data.borrowed_date)
        
    let has_gone = (current_date - issued_date)/86400000
        if (has_gone > borrowed_data.allocated_days){
            return book_data.overdue_fine * (has_gone - borrowed_data.allocated_days)
        }
        else{
            return 0
        }
}

function get_return_date(date, allocated_days){
    let returnDate = new Date(date)
    returnDate.setDate(returnDate.getDate() + allocated_days);
    return returnDate.toISOString().slice(0,10);
}

function get_remaining_days(date, allocated_days){
    let returnDate = new Date(get_return_date(date, allocated_days))
    let current_date = new Date()
    current_date = new Date(current_date.toISOString().slice(0,10))
    return (returnDate - current_date)/86400000
}