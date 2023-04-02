import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Contact",
          path: "/contact"
        },
        {
            id: 4,
            name: "Products",
            path: "/products"
          },
          {
            id: 5,
            name: "Service",
            path: "/service"
          }
      ];
      
    return (
        <div>
            <div onClick={()=>setIsOpen(!isOpen)} className='md:hidden bg-purple-400'>
            
            <span>{isOpen ?  <XMarkIcon className="h-6 w-6 text-danger-500" /> : <Bars3Icon className="h-6 w-6 text-purple-500"/>}</span>
            </div>
            <ul className={`md:flex gap-5 absolute md:static bg-purple-500  p-3 ${isOpen ? 'top-6': '-top-36' }`}>
                {
                routes.map(route => 
                <Link 
                    key={route.id}
                    route ={route}
                />)
                }
            </ul>
        </div>
    );
};

export default Navbar;