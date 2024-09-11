// SearchModal.js
import React from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from 'react-bootstrap';

Modal.setAppElement('#root'); // This is important for accessibility

const customStyles = {
    content: {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '20px',
    border: 'none',
    color: '#000',
    background: '#111111',
    },
};  

const SearchModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Search Modal">
            <button className='closebtn' onClick={onRequestClose} style={{ float: 'right', margin: '10px' }}>
                <CloseIcon />
            </button>
            <div style={{ padding: '20px' }}>
                <Container className='modalcontainer'>
                    <div className='d-flex justify-content-start ps-4' style={{ height: '100' }}>
                        <input type="text" className="modalinput" placeholder="Search anything here...." aria-label="Search 
                        " aria-describedby="basic-addon1" />
                        <button className='btn-5' type="submit">Search</button>
                    </div>
                </Container>
            </div>
        </Modal>
    );
};

export default SearchModal;
