const USER_RESTRICTED_PAGES = [
    'add-book.html',
    'edit-book.html',
    'signin.html',
    'signup.html',
    'manage-users.html',
    'user.html',
]

const ADMIN_RESTRICTED_PAGES = [
    'signin.html',
    'signup.html'

]

const GUEST_RESTRICTED_PAGES = [
    'add-book.html',
    'edit-book.html',
    'book.html',
    'profile.html',
    'manage-users.html',
]

function route(path){
    let current_path = window.location.pathname
    window.location.href = current_path.replace(current_path.split('/')[current_path.split('/').length - 1], path);
}

function isRestricted(role, path){
    switch(role){
        case 'user': return (USER_RESTRICTED_PAGES.includes(path))
        case 'guest': return (GUEST_RESTRICTED_PAGES.includes(path))
        case 'admin': return (ADMIN_RESTRICTED_PAGES.includes(path))
    }
}

function routecontrol(){
    let full_path = window.location.pathname
    let path = full_path.split('/')[full_path.split('/').length-1]
    if(isRestricted(USER.role, path)) route('index.html')
}

routecontrol();

