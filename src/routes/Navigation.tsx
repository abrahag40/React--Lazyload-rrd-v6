import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="reactLogo" />
                    <ul>
                        <li>
                            <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>Home Page</h1> 
            <Routes>
                <Route path="about" element={ <h1>About Page</h1> } />
                <Route path="users" element={ <h1>Users Page</h1> } />
                <Route path="home" element={ <h1>Home Page</h1> } />
                <Route path="/*" element={ <Navigate to="/home" /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation
