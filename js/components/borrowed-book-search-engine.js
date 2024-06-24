function borrow_search(){
    if(Object.keys(user_borrowed_books).length) InjectComponent('borrowed-search', `
        <div class="flex w-[100%] justify-center items-center text-[#4d4e4f]">
            <i class="bg-zinc-100 w-[20%] h-[3rem] w-[3rem] p-2 rounded-l-lg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.75 22q-1.125 0-1.937-.763T4 19.35V5.4q0-.95.588-1.7t1.537-.95L16 .8v16l-9.475 1.9q-.225.05-.375.238T6 19.35q0 .275.225.463T6.75 20H18V4h2v18zM9 16.175l5-.975V3.25l-5 .975zm-2 .4V4.625l-.375.075q-.275.05-.45.238T6 5.4v11.425q.125-.05.263-.087t.262-.063zm-1-11.8v12.05z"/></svg>
                </i>
            <input placeholder="Search Borrowed Book" class="bg-zinc-100 w-[80%] focus:outline-none h-[3rem] rounded-r-lg caret-[#4d4e4f] text-[#4d4e4f] pr-[2rem]" type="text" id="query" onkeyup='search()'>
        </div>
            `)
        
    else InjectComponent('borrowed-search', ``)
}

borrow_search()