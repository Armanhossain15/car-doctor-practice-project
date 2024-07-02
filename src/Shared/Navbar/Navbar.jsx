import { Link } from 'react-router-dom';
import logo from './../../assets/logo.svg'
import { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {signOutUser, user} = useContext(authContext)
    // console.log(user);

    const handleLogout =()=>{
        signOutUser()
        .then(()=>{
            console.log('signout successfully');
        })
        .catch((error)=> {
            console.log(error);
        })
    }


    const navItems = <>
        <Link to='/' className='btn btn-ghost'>Home</Link>
        <Link to='/' className='btn btn-ghost'>About</Link>
       {
        user &&  <Link to='/bookings' className='btn btn-ghost'>My Bookings</Link>
       }
    </>


    return (
        <div className="navbar bg-base-100 h-28 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                    {navItems}
                    </ul>
                </div>
                <Link to='/' className=" text-xl"><img src={logo}></img></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end">
               {
                user?.email ? 

                <button onClick={handleLogout} className="btn btn-outline"> log Out </button>  

                : <Link to='/login' className="btn btn-outline"> Login </Link>

                
               }
                
            </div>
        </div>
    );
};

export default Navbar;