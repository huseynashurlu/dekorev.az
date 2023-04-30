import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormattedMessage } from "react-intl";
import { GrAdd } from 'react-icons/gr'

const ModalBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Button className='btn-warning' onClick={handleShow} style={{backgroundColor: 'transparent',"color": "#333","fontSize": "14px","display": "flex","alignItems": "center","marginLeft": "20px","border:":"1px solid orange"}}>
        <GrAdd style={{"marginRight": "5px"}}/>
        <FormattedMessage id="elan yerləşdir" defaultMessage="Elan yerləşdir" />
      </Button>

      <Modal style={{"zIndex": "111111111111"}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Elan yerləşdirmək üçün nə etməli?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bunun üçün 050 265 64 63 nömrəsi ilə əlaqə saxlamaq lazımdır və sizin üçün mağaza açılmalıdır</Modal.Body>
      </Modal>
    </>
  )
}
export default ModalBox