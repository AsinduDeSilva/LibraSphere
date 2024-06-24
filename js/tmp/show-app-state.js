const APP_STATE = `
<h4>APP STATE</h4>
    <p>${JSON.stringify(USER)}</p>
    <p>${JSON.stringify(USERS)}</p>
    <p>${JSON.stringify(BOOKS)}</p>
`

document.getElementById('tmp').innerHTML = APP_STATE