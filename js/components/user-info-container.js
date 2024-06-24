const urlParams = new URLSearchParams(window.location.search);
const username_param = urlParams.get('username')
let user = USERS[username_param]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

if (user){
    let USER_INFO = `
        <div class="flex justify-center items-center w-[100%] my-[3rem]">
            <div class="flex  w-[80%] items-center bg-white">
                <div class="w-[25%] h-[100%] field flex flex-col justify-center items-center">
                    <img class="w-[20vw] h-[20vw] object-cover rounded-full object-center p-[2rem]" src="${user.photo}"> 
                </div>

                <div class="flex flex-col ml-[2rem] w-[70%]">
                    <div class="">
                        <div class="pt-[1rem] px-[1rem] text-[#636363]">
                            User Profile
                        </div>
                        <div class="flex w-[100%] pb-[1rem] px-[1rem]">
                            <div class="field flex flex-row m-2">
                                <div class="pr-[1.5rem] text-[#393939]">First Name</div>
                                <div class="font-semibold text-[#212121]">${user.first_name}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Last Name</div>
                                <div class="font-semibold text-[#212121]">${user.last_name}</div>
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
                                <div class="font-semibold text-[#212121]">${user.email}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Phone Number</div>
                                <div class="font-semibold text-[#212121]">${user.mobile_number}</div>
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
                                <div class="font-semibold text-[#212121]">${Object.keys(user.borrowed).length}</div>
                            </div>
                            <div class="field flex flex-row m-2 ml-[5rem]">
                                <div class="pr-[1.5rem] text-[#393939]">Unpaid Overdue Fee</div>
                                <div class="font-semibold text-[#212121]">LKR ${calculate_total_overdue_fine(user.email)}</div>
                            </div>                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
`

    InjectComponent('user-info-container', USER_INFO)
}
else{
    console.log('invalid')
}