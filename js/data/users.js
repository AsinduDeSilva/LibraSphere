let USERS = {
    'admin@librasphere.com' : {
        first_name: 'Asindu',
        last_name : 'Silva',
        email : 'admin@librasphere.com',
        password : 'admin',
        role : 'admin',
        photo : './assets/images/users/admin.avif',
        mobile_number : '0714561789',
    },
    'user@librasphere.com' : {
        first_name: 'Thanilka',
        last_name : 'Udugama',
        email : 'user@librasphere.com',
        password : 'user',
        role : 'user',
        mobile_number : '0758561889',
        photo : './assets/images/users/1.avif',
        borrowed : {
            'B00001' : {
                'borrowed_date' : '2024-05-28',
                'allocated_days' : 10
            },
            'B00002' : {
                'borrowed_date' : '2024-05-29', 
                'allocated_days' : 8
            },
            'B00003' : {
                'borrowed_date' : '2024-05-30', 
                'allocated_days' : 2
            }
        }
    },
    'thanuj@gmail.com' : {
        first_name: 'Thanuj',
        last_name : 'Abeyrathne',
        email : 'thanuj@gmail.com',
        password : 'user',
        role : 'user',
        mobile_number : '0764521789',
        photo : './assets/images/users/2.avif',
        borrowed : {
            'B00004' : {
                'borrowed_date' : '2024-06-23', 
                'allocated_days' : 2
            },

            'B00006' : {
                'borrowed_date' : '2024-06-22', 
                'allocated_days' : 5
            }
        }
    },
    'nandun@gmail.com' : {
        first_name: 'Nandun',
        last_name : 'Ranasinghe',
        email : 'nandun@gmail.com',
        password : 'user',
        role : 'user',
        mobile_number : '0754267709',
        photo : './assets/images/users/3.avif',
        borrowed : {}
    },
    'thanilka@gmail.com' : {
        first_name: 'Thanilka',
        last_name : 'Udugama',
        email : 'thanilka@gmail.com',
        password : 'user',
        role : 'user',
        mobile_number : '0771300957',
        photo : './assets/images/users/4.avif',
        borrowed : {
            'B00005' : {
                'borrowed_date' : '2024-06-21', 
                'allocated_days' : 2
            }
        }
    },
    'asindu@gmail.com' : {
        first_name: 'Asindu',
        last_name : 'De Silva',
        email : 'asindu@gmail.com',
        password : 'user',
        role : 'user',
        mobile_number : '0774067089',
        photo : './assets/images/users/5.avif',
        borrowed : {
            'B00007' : {
                'borrowed_date' : '2024-05-30', 
                'allocated_days' : 2
            }
        }
    }
}

if(get('users')) USERS = get('users')
else post('users', USERS)


