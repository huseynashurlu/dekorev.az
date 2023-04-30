import { CgMenuLeft } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import '../../assets/css/common.css';
import { useState } from 'react';
import SideNav from './SideNav';


const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }
  return (
    <>
        <div id="mobile_nav">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-2">
                    <CgMenuLeft onClick={handleMenuClick}/>
                </div>
                <div className="col-6 text-center">
                    <Link to='/'>
                        <img src={Logo} alt="logo for dekorev.az" />
                    </Link>
                </div>
                <div className="col-2 text-end">
                    <CiSearch/>
                </div>
            </div>
        </div>
    </div>
     <SideNav visible={showMenu}/>
    </>
  )
}
export default MobileNav