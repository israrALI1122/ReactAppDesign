import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/Darkmodecontext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {

  const {toggle} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
         <div className="left">
            <Link to='/' style={{textDecoration:"none"}}>
            <span>IsrarSocial</span>
            </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon onClick={toggle}/>
            <AppsOutlinedIcon/>
            <div className="search">
                <ZoomInOutlinedIcon/>
                <input type="text" placeholder='search' />
            </div>

         </div>
         <div className="right">
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsActiveOutlinedIcon/>
            <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>

            </div>

         </div>
    </div>
  )
}

export default Navbar