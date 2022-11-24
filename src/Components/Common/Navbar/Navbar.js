// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
// import { AuthContext } from '../../../Contexts/AuthProvider';





const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext);

    // const handelLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.error(error))
    // }

    const navManu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/login'>LogIn</NavLink></li>
        {/* {user?.uid ? <li><button onClick={handelLogOut}><NavLink to='/login'>SignOut</NavLink></button></li> :
            <li><NavLink to='/login'>Login</NavLink></li>} */}
    </>



    return (
        <div className="navbar flex justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navManu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">SSH-MOBILE</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navManu}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;