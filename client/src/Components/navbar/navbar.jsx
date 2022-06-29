import React,{useState} from 'react'
import './navbar.scss'
import netflixlogo from '../../../src/assets/netflix-logo-png-2562.png'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import netflixavatar from '../../../src/assets/Netflix-avatar.png'



const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }
    console.log(isScrolled)

    return (
        <div className={isScrolled ? "navbar scrolled": ' navbar'} >
            <div className="container">
                <div className="left">
                    <img src={netflixlogo} alt="" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KID</span>
                    <Notifications className='icon' />
                    <img src={netflixavatar} alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>settings</span>
                            <span>logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar