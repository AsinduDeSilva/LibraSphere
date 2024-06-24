console.log(USER)

function enable_edit(){
    InjectComponent('profile-container', PROFILE_EDIT)
}

function save_changes(event){
    event.preventDefault()
    const form = event.target
    let update_user = {first_name : form['first-name'].value, last_name: form['last-name'].value, mobile_number : form['phone-number'].value, photo: $('img').attr('src')}
    update('users', USER.email, update_user)

    window.location.reload()
}

if (USER.role === 'admin'){
    PROFILE_INFO = `
        <div class="flex flex-row justify-center items-center w-[100%] my-[3rem] ">
            <div class="flex  w-[80%] items-center bg-white">
                <div class="w-[25%] h-[100%] field flex flex-col justify-center items-center">
                    <img class="w-[20vw] h-[20vw] object-cover rounded-full object-center p-[2rem]" src="${USER.photo}"> 
                    <button class="w-[6rem] p-[0.4rem] text-white rounded-full bg-[#0a4d76] text-center" onclick='enable_edit()'>EDIT</button>
                    
                </div>

                <div class="flex flex-col w-[70%]">
                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            User Profile
                        </div>
                        <div class="flex w-[100%] pb-[1rem] px-[1rem]">
                            <div class="field flex flex-row m-2">
                                <div class="pr-[1.5rem] text-[#393939]">First Name</div>
                                <div class="font-semibold text-[#212121]">${USER.first_name}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Last Name</div>
                                <div class="font-semibold text-[#212121]">${USER.last_name}</div>
                            </div>                        
                        </div>
                    </div>

                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            Contact Information
                        </div>
                        <div class="flex w-[100%] pb-[1rem] px-[1rem]">
                            <div class="field flex flex-row m-2">
                                <div class="pr-[1.5rem] text-[#393939]">Email</div>
                                <div class="font-semibold text-[#212121]">${USER.email}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Phone Number</div>
                                <div class="font-semibold text-[#212121]">${USER.mobile_number}</div>
                            </div>                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
`   
}
else{
    PROFILE_INFO = `
        <div class="flex justify-center items-center w-[100%] my-[3rem]">
            <div class="flex  w-[80%] items-center bg-white">
                <div class="w-[25%] h-[100%] field flex flex-col justify-center items-center">
                    <img class="w-[20vw] h-[20vw] object-cover rounded-full object-center p-[2rem]" src="${USER.photo}"> 
                    <button class="font-light w-[6rem] p-[0.4rem] text-white rounded-full bg-[#0a4d76] text-center" onclick='enable_edit()'>EDIT</button>
                    
                </div>

                <div class="flex flex-col w-[70%]">
                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            User Profile
                        </div>
                        <div class="flex w-[100%] pb-[1rem] px-[1rem]">
                            <div class="field flex flex-row m-2">
                                <div class="pr-[1.5rem] text-[#393939]">First Name</div>
                                <div class="font-semibold text-[#212121]">${USER.first_name}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Last Name</div>
                                <div class="font-semibold text-[#212121]">${USER.last_name}</div>
                            </div>                        
                        </div>
                    </div>

                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            Contact Information
                        </div>
                        <div class="flex w-[100%] pb-[1rem] px-[1rem]">
                            <div class="field flex flex-row m-2">
                                <div class="pr-[1.5rem] text-[#393939]">Email</div>
                                <div class="font-semibold text-[#212121]">${USER.email}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Phone Number</div>
                                <div class="font-semibold text-[#212121]">${USER.mobile_number}</div>
                            </div>                        
                        </div>
                    </div>

                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            Borrow Information
                        </div>
                        <div class="flex w-[100%] pb-[1rem] px-[1rem]">
                            <div class="field flex flex-row m-2">
                                <div class="pr-[1.5rem] text-[#393939]"># of Borrowed Books</div>
                                <div class="font-semibold text-[#212121]">${Object.keys(USER.borrowed).length}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Unpaid Overdue Fee</div>
                                <div class="font-semibold text-[#212121]">LKR ${calculate_total_overdue_fine(USER.email)}</div>
                            </div>                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
`

}

let PROFILE_EDIT = `
    <form id="edit" onsubmit='save_changes(event)' class="flex justify-center items-center w-[100%] my-[3rem]">
            <div class="flex w-[80%] items-center bg-white">
                <div class="w-[40%] flex flex-col items-center justify-center field">
                    <img id="photo" class="w-[20vw] h-[20vw] object-cover rounded-full object-center p-[2rem] " src="${USER.photo}">
                    <div>
                        <input accept="image/png, image/gif, image/jpeg" class="cursor-pointer z-10 absolute opacity-0 font-light w-[10rem] p-[0.4rem] text-white rounded-full bg-[#4d4e4f] hover:bg-[#212121] text-center" value="upload" id="upload" name="upload" type="file" onchange = 'upload_image("#photo", "#upload")'>
                        <div class="cursor-pointer w-[10rem] p-[0.4rem] text-white rounded-full bg-[#0a4d76] text-center">Change Photo</div>
                    </div>
                </div>

                <div class="flex flex-col w-[70%] ml-[2rem]">
                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            User Profile
                        </div>
                        <div class="flex flex-row w-[100%] py-[0.2rem] px-[2rem] py-[0.3rem]">
                            <div class="field flex flex-row">
                                <div class="pr-[1.5rem] text-[#393939]">First Name</div>
                                <input spellcheck="false" name="first-name" type="text" value="${USER.first_name}" required>
                            </div>
                            <div class="field flex flex-row">
                                <div class="pr-[1.5rem] text-[#393939]">Last Name</div>
                                <input type="text" name="last-name" value="${USER.last_name}" required>
                            </div>                        
                        </div>
                    </div>

                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            Contact Information
                        </div>
                        <div class="flex flex-row w-[100%] pb-[1rem] px-[2rem]">
                            <div class="field flex flex-row py-[0.3rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Phone Number</div>
                                <input name="phone-number" type="text" pattern="[0-9]{10}" value="${USER.mobile_number}" required>
                            </div>                        
                        </div>
                    </div>
                    <div class="flex mt-[1rem] ml-[2rem]">
                        <input type="submit" class="cursor-pointer w-[7rem] mx-[0.5rem] p-[0.4rem] text-white rounded-full bg-[#0a4d76] text-center">
                        <div class="cursor-pointer w-[7rem] mx-[0.5rem] p-[0.4rem] text-white rounded-full bg-[#0a4d76] text-center" onclick='window.location.reload()'>Reset</div>
                    </div>
                </div>
            </div>
        </form>
`



InjectComponent('profile-container', PROFILE_INFO)