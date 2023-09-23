import { useContext, useState } from "react";
import icon from '../../../assets/assets/icons/person.svg'
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../authProvider/AuthContextProvider";



const Navbar = () => {

  const location = useLocation()

   const {user} = useContext(AuthContext)
   console.log();

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
     const {logOut} = useContext(AuthContext)

   const logOutSubmit = ()=>{
        logOut()
        .then(()=>{
          localStorage.removeItem('a-token')
        })

        .catch(error => console.log(error))


   }
  
  
    return (
      <nav className="bg-white  p-1 md:p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
                <img src={icon} alt="" />
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-black "
              >
                {isOpen ? 'Close' : 'Menu'}
              </button>
            </div>
            <div className="hidden lg:flex space-x-8 lg:items-center">
            <Link to='/' className={`block hover:text-gray-400 mb-2${
              location.pathname === '/' ? 'font-bold text-green-500' : ''}`}>Home</Link>
              <Link className="block hover:text-gray-400 mb-2">About</Link>
              <Link className="block hover:text-gray-400 mb-2">Services</Link>
              <Link className="block hover:text-gray-400 mb-2">Blog</Link>
              <Link className="block hover:text-gray-400 mb-2">Contact</Link>
              {user? <>
                <Link to='/booking'className={`block hover:text-gray-400 mb-2${
              location.pathname === '/booking' ? 'font-bold text-green-500' : ''}`}>My Booking</Link>
               <Link onClick={logOutSubmit} className="block hover:text-gray-400 mb-2">LogOut</Link>
              </> :<Link to='/login' className={`block hover:text-gray-400 mb-2${
              location.pathname === '/login' ? 'font-bold text-green-500' : ''}`}>Login</Link>}
             
              <Link className=" "><button className=" btn btn-outline btn-secondary">Appointment</button></Link>
            </div>
          </div>
          {isOpen && (
            <div className="lg:hidden mt-4">
              <Link to='/' className={`block hover:text-gray-400 mb-2${
              location.pathname === '/' ? 'font-bold text-green-500' : ''}`}>Home</Link>
              <Link className="block  hover:text-gray-400 mb-2">About</Link>
              <Link className="block  hover:text-gray-400 mb-2">Services</Link>
              <Link className="block  hover:text-gray-400 mb-2">Contact</Link>
              {user? <>
                <Link to='/booking' className={`block hover:text-gray-400 mb-2${
              location.pathname === '/booking' ? 'font-bold text-green-500' : ''}`}>My Booking</Link>
               <Link onClick={logOutSubmit} className="block hover:text-gray-400 mb-2">LogOut</Link>
              </> :<Link to='/login' className={`block hover:text-gray-400 mb-2${
              location.pathname === '/login' ? 'font-bold text-green-500' : ''}`}>Login</Link>}
              
              <Link className=" "><button className="btn  btn-outline btn-secondary">Appointment</button></Link>
           
            </div>
          )}
        </div>
      </nav>
    );
  };
  

export default Navbar;