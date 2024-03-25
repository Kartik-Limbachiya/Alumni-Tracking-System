import React, {useEffect,useState} from 'react'
import { Link , useLocation} from 'react-router-dom'
import "./Header.css"

const Header = () => {
    const[activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() =>{
        if (location.pathname === "/") {
            setActiveTab("Home");
        } else if(location.pathname === "/add") {
            setActiveTab("AddContact");
        } else if (location.pathname === "/signin"){
            setActiveTab("Signin");
        }
    },[location]);
  return (
    <div className='Header'>
        <p className='logo'>Contact App</p>
        <div className="header-right">
            <Link to="/" >
                <p className={`${activeTab === "Home" ? "active-golden": ""}`}
                onClick={() => setActiveTab("Home")}>
                    Home
                </p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab === "AddContact" ? "active-golden": ""}`}
                onClick={() => setActiveTab("AddContact")}>
                    Add Contact
                </p>
            </Link>
            <Link to="/signin">
                <p className={`${activeTab === "Signin" ? "active-golden": ""}`}
                onClick={() => setActiveTab("Signin")}>
                    Sign in
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Header