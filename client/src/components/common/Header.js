import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png'
import { CiSearch } from 'react-icons/ci';
import { BsCart } from 'react-icons/bs'
import { IoIosGitCompare } from 'react-icons/io'
import ModalBox from '../ModalBox';

import { FormattedMessage } from "react-intl";
import SearchBar from '../SearchBar';


const Header = (props) => {
    const [selectedLocale, setSelectedLocale] = useState('az');
    const [showModal, setShowModal] = useState(false);


    const handleLocaleChange = (locale) => {
        props.onChange(locale)
        setSelectedLocale(locale);
    }

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

  return (
    <header>
        <div className="header-top">
                <div className="container">
                <div className="left">
                    <Link to='/about'>
                        <FormattedMessage id="haqqımızda" defaultMessage="Haqqımızda" />
                    </Link>
                    <Link to='/contact'>
                        <FormattedMessage id="əlaqə" defaultMessage="Əlaqə" />
                    </Link>
                    
                    <DropdownButton size='sm' variant="outline-*" id="dropdown-basic-button" title={selectedLocale.toUpperCase()}>
                        <Dropdown.Item onClick={() => handleLocaleChange('az')} href="#/action-1" selected={selectedLocale === 'az'}>AZ</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLocaleChange('en')} href="#/action-2" selected={selectedLocale === 'en'}>EN</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLocaleChange('ru')} href="#/action-3" selected={selectedLocale === 'ru'}>RU</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="right">
                    <Link to='/stores'>
                        <FormattedMessage id="mağazalar" defaultMessage="Mağazalar" />
                    </Link>
                    
                </div>
                </div>
        </div>
            <div className="header-bottom">
               <div className="container">
                <div className="logo">
                        <Link to='/'>
                            <img src={Logo} alt="Logo for Dekorev.az" />
                        </Link>
                    </div>
                    <div className="search-area">
                        <form action="">
                            <SearchBar />
                            <CiSearch />
                        </form>
                    </div>
                    <div className="basket-profile-area">
                        <div className="compare">
                        <IoIosGitCompare />
                        <Link to='/compare'>
                            <span>
                                <FormattedMessage id="müqayisə" defaultMessage="MÜQAYİSƏ" />
                            </span>
                        </Link>
                        </div>
                        <div className="basket">
                            <BsCart />
                            <Link to='/basket'>
                                <span>
                                    <FormattedMessage id="səbətim" defaultMessage="SƏBƏTIM" />
                                </span>
                            </Link>
                            <ModalBox onClick={handleModalOpen} show={showModal} handleClose={handleModalClose} />
                        </div>
                    </div>
               </div>
            </div>
    </header>
  )
}
export default Header