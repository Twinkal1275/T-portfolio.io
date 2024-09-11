import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
const Backtotop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            if (window.pageYOffset > 300)
            {
                setShowButton(true);
            } else
            {
                setShowButton(false);
            }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    AOS.init({
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    

    return (
    <>
        {showButton && (
            <button onClick={scrollToTop} data-aos="fade-down" className="back-to-top"><FaAngleUp/></button>
        )}
    </>
    );
};

export default Backtotop;
