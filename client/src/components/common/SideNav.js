import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ModalBox from '../ModalBox';
import { RiStore3Line } from 'react-icons/ri'
import { MdFormatListNumbered } from 'react-icons/md'
import { BsTelephoneForward } from 'react-icons/bs'


const SideNav = (props) => {
  return (
        <>
            {
                props.visible ? <div id="sidenav">
                <div className="top">
                    <ModalBox />
                </div>
                <ul>
                    <li>
                        <RiStore3Line />
                        <Link to='/stores'>Mağazalar</Link>
                    </li>
                    <li>
                        <MdFormatListNumbered />
                        <Link to='/stores'>Bütün elanlar</Link>
                    </li>
                    <li>
                        <BsTelephoneForward />
                        <Link to='/contact'>Bizimlə əlaqə</Link>
                    </li>
                </ul>
            </div> : null
            }
        </>
  )
}
export default SideNav