import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";


const Navber = () => {
    return (
        <div className="navbar bg-purple-800 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-purple-800 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
                        <NavLink to={'/'} className={({ isActive }) => `text-2xl ${isActive ? "text-warning" : "hover:text-warning"}`}>Home</NavLink>

                        <NavLink to={'/statistic'} className={({ isActive }) => `text-2xl ${isActive ? "text-warning" : "hover:text-warning"}`}>Statistic</NavLink>

                        <NavLink to={'/dashborad'} className={({ isActive }) => `text-2xl ${isActive ? "text-warning" : "hover:text-warning"}`}>Dashboard</NavLink>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-2xl text-white">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4  text-white">

                    <NavLink to={'/'} className={({ isActive }) => `text-2xl ${isActive ? "text-warning" : "hover:text-warning"}`}>Home</NavLink>

                    <NavLink to={'/statistic'} className={({ isActive }) => `text-2xl ${isActive ? "text-warning" : "hover:text-warning"}`}>Statistic</NavLink>

                    <NavLink to={'/dashborad'} className={({ isActive }) => `text-2xl ${isActive ? "text-warning" : "hover:text-warning"}`}>Dashboard</NavLink>

                </ul>
            </div>
            <div className="navbar-end text-2xl">
                <a className="text-white flex items-center">Cart<FiShoppingCart /></a>
            </div>
        </div>
    );
};

export default Navber;