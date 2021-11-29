import { UserCircleIcon } from "@heroicons/react/solid";
import {Menu} from '@headlessui/react'
import { useRouter } from "next/dist/client/router";


const UserMenu = ({auth}) => {

  console.log(auth);
  let menu;

  if(auth){
    menu= (
      <h1>hola</h1>
    )
  }else{
    <h1>adios</h1>
  }

  
  const router = useRouter()

  

  const logout = async() =>{

    await fetch(`http://localhost:8000/api/logout`,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        credentials: 'include'
    }).then(setAuth(false))
  }


  return (
    <div className="hidden md:block" >
      <div className=" flex items-center">
        <Menu as='div' className=" relative">
          <div>
            <Menu.Button 
              type="button"
              className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-white"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <UserCircleIcon
                className="
                          bg-white
                          h-7
                          active:scale-105
                        "
              />
            </Menu.Button>
          </div>
          <Menu.Items
            className=" z-50 origin-top-right absolute right-0 mt-3 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex="-1"
          >
            {menu}
            {
              !auth &&(
                <>
                  <Menu.Item>
                    <p
                          onClick={() => router.push("/login")}
                          className="hover:scale-105 hover:bg-red-300 hover:text-white block px-4 py-2 text-sm text-gray-700  cursor-pointer  transition ease-out duration-200 hover:-translate-x-1 "
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                        >
                          Login
                    </p>
                  </Menu.Item>

                  <Menu.Item>
                    <p
                          onClick={() => router.push("/register")}
                          className="hover:bg-red-300 hover:text-white block px-4 py-2 text-sm text-gray-700  cursor-pointer hover:scale-105 transition ease-out duration-200 hover:-translate-x-1"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                        >
                          Register
                    </p>
                  </Menu.Item>
                </>
              )
            }
            <Menu.Item>
              <a
                href="#"
                className="hover:bg-red-300 hover:text-white block px-4 py-2 text-sm text-gray-700 hover:scale-105 transition ease-out duration-200 hover:-translate-x-1"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </a>
            </Menu.Item>

            <Menu.Item>
            <a
              href="#"
              className=" hover:bg-red-300 hover:text-white block px-4 py-2 text-sm text-gray-700 hover:scale-105 transition ease-out duration-200 hover:-translate-x-1"
              role="menuitem"
              tabIndex="-1"
              id="user-menu-item-1"
            >
              Settings
            </a>
            </Menu.Item>

            {
              auth &&(
                <Menu.Item>
                  <a
                    onClick={logout}
                    className="hover:bg-red-300 hover:text-white block px-4 py-2 text-sm text-gray-700 hover:scale-105 transition ease-out duration-200 hover:-translate-x-1"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </Menu.Item>
              )
            }
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default UserMenu;
