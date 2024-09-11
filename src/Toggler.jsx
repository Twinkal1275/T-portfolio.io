import React, { useState,useEffect } from 'react';
import { FaBars, FaHome, FaUser, FaBriefcase, FaSearch } from 'react-icons/fa';
import { IoIosContacts } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import SearchModal from './Search';
const Toggler = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='togglemain'>
      <button id='togglebtn' onClick={toggle}>
        {isToggled ? <CloseIcon /> : <FaBars />}
      </button>
      {isToggled && (
        <div className={`toggle ${isToggled ? 'active' : ''}`}>
          <div className='togglecontent'>
            <div className='myDIV'><a href="/"><FaHome className='icons'/></a></div>
            <span className="hide">Home</span>
          </div>
          <br/>
          <div className='togglecontent'>
            <div className='myDIV'><a href="/about"><FaUser className='icons'/></a></div>
            <span className="hide">About</span>
          </div>
          <br/>
          <div className='togglecontent'>
            <div className='myDIV'><a href="/portfolio"><FaBriefcase className='icons'/></a></div>
            <span className="hide">Portfolio</span>
          </div>
          <br/>
          <div className='togglecontent'>
            <div className='myDIV'><a href="/contact"><IoIosContacts className='icons'/></a></div>
            <span className="hide">Contact</span>
          </div>
          {/* <div className='myDIV pb-4'><a href="#" onClick={openSearchModal}><FaSearch className='icons'/></a></div> */}
        </div>
      )}
      {/* <SearchModal isOpen={isSearchModalOpen} onRequestClose={closeSearchModal} data-aos="zoom-in"/> */}
    </div>
  );
};

export default Toggler;
