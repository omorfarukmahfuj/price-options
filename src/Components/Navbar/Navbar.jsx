import { useState } from 'react';
import Link from './../Link/Link';
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:userId", name: "Profile" }
  ];

  return (
    <nav className='bg-[#4D6BF2]  text-white py-3'>
      <div className='text-3xl md:hidden static pl-2' onClick={() => setOpen(!open)}>
        {
          open == true ? <RxCross2 /> : <HiOutlineMenu />
        }
      </div>
      <ul className={`md:flex justify-center absolute md:static bg-[#4D6BF2] duration-1000 ${open ? 'left-0' : '-left-40'}`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;