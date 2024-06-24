let index = 0
const items_per_page = 5
function show_users(){
    let search_phrase = $('#q').val()
    let result_users = {}

    if (search_phrase){
        for (user of Object.keys(USERS)){
            if(user.toLowerCase().includes(search_phrase.toLowerCase()) & (USERS[user].role !== 'admin')) result_users[user] = USERS[user]
        }
        
    }else{
        result_users = USERS
    }

    let items = Object.keys(result_users)

    let RESULTS = ''
    let i = 0
    if(items.length != 0){
        for (item of items){
                if ((USERS[item].role) === 'admin') continue
                let user_info = USERS[item]
                let bg_color = (i%2 == 0) ? '#ffffff' : '#fafafa'
                i += 1
                
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
                            LKR ${calculate_total_overdue_fine(user_info.email)}
                        </td>
                    </tr>
            `
            
        }

        RESULTS = `
            <thead class="bg-zinc-100 text-[#4d4e4f]"> 
                <tr>
                    <th></th>
                    <th><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg></div></th>
                    <th><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"/></svg></div></th>
                    <th><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg></div></th>
                    <th><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9V7h-2V6h2V4h1v2h2v1h-2v2zM6 19.5V4h7.77q-.386.596-.578 1.197T13 6.5q0 1.742 1.157 3.012T17 10.958q.288.036.5.036t.5-.036V19.5l-6-2.583z"/></svg></div></th>
                    <th><div class="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M24.039 6c-4.517 0-8.632 1.492-11.067 2.711q-.33.165-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768L36.6 9.6a16 16 0 0 0-1.689-.957C32.488 7.437 28.471 6 24.04 6m-6.442 4.616a25 25 0 0 1-2.901-.728C16.978 8.875 20.377 7.8 24.04 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081m15.96 5.064l-.246.124c-5.606 2.828-13.042 2.828-18.648 0l-.233-.118C6.008 24.927-.422 41.997 24.039 41.997S41.913 24.61 33.557 15.68M23 24a2 2 0 1 0 0 4zm2-2v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4 4 0 0 0 25 22m0 8v4a2 2 0 1 0 0-4" clip-rule="evenodd"/></svg></div></th>
                </tr>
            </thead>
            <tbody class="">
            ${RESULTS}
            </tbody>
    `
    }
    else{
        RESULTS = `
                    <div class='w-[100%] h-[60vh] text-[#e7e9eb] flex justify-center items-center'>
                        <div class='w-[20%]'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.18 10.94c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6c-.52 0-1 .12-1.44.32z"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 13c-2.32 0-4.45.8-6.14 2.12A7.957 7.957 0 0 1 4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 0 0 2.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15m6.31 1.9L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.54-1.69 4.9"/></svg>
                        </div>
                    </div>
                    `
    }
    InjectComponent('results', RESULTS)

}


function next_items(){
    index += 1;
    show_users()
}

function prev_items(){
    index -= 1;
    show_users()
}

show_users()