import React,{useEffect} from 'react'
import Toggler from './Toggler'
import Footer from './Footer'
import { FaLink } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import work1 from './Images/work1.jpg'
import work2 from './Images/work2.jpg'
import work3 from './Images/work3.jpg'
import work4 from './Images/work4.jpg'
import work5 from './Images/work5.jpg'
import work6 from './Images/work6.jpg'
import Backtotop from './BackTop';



const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
return (
<>
 <div id="abouts">
  <Toggler/>
     <h1 className='fw-bolder text-center' data-aos="zoom-in">Portfolio </h1>
  </div>

<div className="container">
<div id="portfolio" className="portfolio"data-aos="zoom-in">

{/* <div class="row">
<div class="col-lg-12 d-flex justify-content-center">
<ul id="portfolio-flters">
<li data-filter="*" class="filter-active">All</li>
<li data-filter=".filter-app">Adobe Illustrator</li>
<li data-filter=".filter-card">Coreldraw</li>
</ul>
</div>
</div>
*/}
<div className="row portfolio-container" data-aos="zoom-in">
<div
className="col-lg-4 col-md-6 portfolio-item filter-app"
data-aos="fade-up"
>
<div className="portfolio-wrap">
<img src={work1} className="img-fluid" alt="" data-aos="zoom-in"/>
<div className="portfolio-info">
<h4 data-aos="zoom-in">Work 1</h4>
<p data-aos="zoom-in">Fruit&Vegetable Website</p>
<div className="portfolio-links" data-aos="zoom-in">
<a href={work1} data-gallery="portfolioGallery" data-aos="zoom-in"  className="portfolio-lightbox" title="work 1">
  <FaPlus/>
</a>
<a href="/port1" data-gallery="portfolioDetailsGallery" data-aos="zoom-in" data-glightbox="type: external" className="portfolio-details-lightbox"
title="Portfolio Details"
>
<FaLink/>
</a>
</div>
</div>
</div>
</div>
<div
className="col-lg-4 col-md-6 portfolio-item filter-app"
data-aos="fade-up"
>
<div className="portfolio-wrap">
<img src={work2} className="img-fluid" alt="" data-aos="zoom-in"/>
<div className="portfolio-info">
<h4 data-aos="zoom-in">Work 2</h4>
<p data-aos="zoom-in">Wedding Website</p>
<div className="portfolio-links">
<a href={work2} data-gallery="portfolioGallery" data-aos="zoom-in" className="portfolio-lightbox" title="Work 2">
<FaPlus/>
</a>
<a href="/port2" data-aos="zoom-in" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox"
title="Portfolio Details"
>
<FaLink/>
</a>
</div>
</div>
</div>
</div>
<div
className="col-lg-4 col-md-6 portfolio-item filter-app"
data-aos="fade-up"
>
<div className="portfolio-wrap" data-aos="zoom-in">
<img src={work3} className="img-fluid" alt="" data-aos="zoom-in"/>
<div className="portfolio-info">
<h4>Work 3</h4>
<p>Portfolio</p>
<div className="portfolio-links">
<a href={work3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="work 3">
  <FaPlus/>
</a>
<a href="/port3" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox"
title="Portfolio Details"
>
<FaLink/>
</a>
</div>
</div>
</div>
</div>
<div
className="col-lg-4 col-md-6 portfolio-item filter-app"
data-aos="fade-up"
>
<div className="portfolio-wrap">
<img src={work4} className="img-fluid" alt="" data-aos="zoom-in" />
<div className="portfolio-info">
<h4>Work 4</h4>
<p>ABC-Cinema Website</p>
<div className="portfolio-links">
  <a href={work4} data-gallery="portfolioGallery" className="portfolio-lightbox" title="work 3">
  <FaPlus/>
</a>
<a href="/port4" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox"
title="Portfolio Details"
>
<FaLink/>
</a>
</div>
</div>
</div>
</div>
<div
className="col-lg-4 col-md-6 portfolio-item filter-app"
data-aos="fade-up"
>
<div className="portfolio-wrap">
<img src={work5} className="img-fluid" alt="" data-aos="zoom-in"/>
<div className="portfolio-info">
<h4>Work 5</h4>
<p>WhatsApp Webpage</p>
<div className="portfolio-links">
<a href={work5} data-gallery="portfolioGallery" className="portfolio-lightbox" title="work 3">
<FaPlus/>
</a>
<a href="/port5" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox"
title="Portfolio Details"
>
<FaLink/>
</a>
</div>
</div>
</div>
</div>
<div
className="col-lg-4 col-md-6 portfolio-item filter-app"
data-aos="fade-up"
>
<div className="portfolio-wrap">
<img src={work6} className="img-fluid" alt="" data-aos="zoom-in"/>
<div className="portfolio-info">
<h4>Work 6</h4>
<p>Medical Manufacturing Webpage</p>
<div className="portfolio-links">
<a href={work6} data-gallery="portfolioGallery" className="portfolio-lightbox" title="work 3">

<FaPlus/>
</a>
<a href="/port6" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox"
title="Portfolio Details"
>
  <FaLink/>
</a>
</div>
</div>
</div>
</div>


</div>
</div>

</div>
<Backtotop/>
<Footer/>
</>    
)
}

export default Portfolio
