NAVBAR = `
  <div class="bg-gradient-to-r bg-[#0A4C76] text-white">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/images/logo.png" class="h-10 scale-[1.3]" alt="Logo" />
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:gap-1">
          ${USER.role == 'guest' ? `
            <button type="button" onclick="route('signin.html')" class="hover:text-white border border-[#189ab4] hover:bg-[#189AB4] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Sign in</button>
            <button type="button" onclick="route('signup.html')" class="bg-[#189ab4d0] hover:bg-[#189AB4] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Sign up</button>
            ` : `
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"class="flex items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-9q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 7.5"/></svg>
            </button>
            
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                  ${USER.role == 'admin' ? `
                    <li>
                      <a href="manage-users.html" class="block px-4 py-2 hover:bg-gray-100 ">Manage Users</a>
                    </li>
                  `:``}
                  <li>
                    <a href="profile.html" class="block px-4 py-2 hover:bg-gray-100 ">Profile</a>
                  </li>
                  <li>
                    <a onclick="logout()" class="block px-4 py-2 hover:bg-gray-100 ">Logout</a>
                  </li>
                </ul>
            </div>
            
            `
          }
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
      </div>
      <div class="items-center justify-between hidden w-full text-md md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          <li>
            <a href="index.html" class="block py-2 px-3 md:p-0 bg-blue-700 rounded md:bg-transparent aria-current="page">Home</a>
          </li>
          <li>
            <a href="collection.html" class="block py-2 px-3 md:p-0 rounded">Collection</a>
          </li>
          <li>
            <a href="index.html#about" class="block py-2 px-3 md:p-0 rounded">About</a>
          </li>
          <li>
            <a href="index.html#footer" class="block py-2 px-3 md:p-0 rounded">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`
InjectComponent('nav-bar', NAVBAR)

const logout = () => {
  USER = {role: 'guest'}
  post('auth', {role: 'guest'})
  route('index.html');
}
