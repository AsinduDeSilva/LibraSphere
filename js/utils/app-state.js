let USER = get('auth')
if(!USER) {
    USER =  {role : 'guest'}
    post('auth', USER)
}