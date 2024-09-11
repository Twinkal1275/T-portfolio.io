import React,{useEffect} from "react";
import fruit from './Images/fruit.jpg'
import { IoCloseOutline } from "react-icons/io5";

const Port1=()=>
{
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
return(
<>
<div id="portfolio-details" className="portfolio-details" data-aos="fade-up">
<a href="/portfolio"><button className="btn btn-sm text-white close-btn"><IoCloseOutline className="close-btns"/></button></a>
<div className="container">
<div className="row">
<div className="col-lg-8">
{/* <h2 class="portfolio-title text-white">This is an example of portfolio detail</h2> */}
<div className="portfolio-details-slider swiper">
<div className="swiper-wrapper align-items-center">
<div className="swiper-slide">
<img
src={fruit}
alt=""
className="v-card img-fluid"
/>
</div>
{/* <div class="swiper-slide">
<img src="images/visiting-card.jpg" alt="">
</div>

<div class="swiper-slide">
<img src="images/visiting-card.jpg" alt="">
</div> */}
</div>
<div className="swiper-pagination" data-aos="zoom-in"/>
</div>
</div>
<div className="col-lg-4 portfolio-info">
<h3 className="text-white" data-aos="zoom-in">Project information</h3>
<ul>
<li className="text-white" data-aos="zoom-in">
<strong data-aos="zoom-in">Category</strong> : React js
</li>
<li className="text-white" data-aos="zoom-in">
<strong data-aos="zoom-in">Project date</strong> : 28, June 2024
</li>
<li className="text-white" data-aos="zoom-in">
<strong data-aos="zoom-in">Project Name</strong> : Fruit & Vegetable Website
</li><br/>
<li className="text-white">
<strong data-aos="zoom-in">Project Details</strong> :
</li>
<p className="text-white" data-aos="zoom-in">
    This Project name is Fruitables Webpage.
This Website is making by React js. It is making by MDBBootstrap , Tailwind Css , MUI , Router , Css , Etc..
It is fully responsive web page.This Web Page was done in four days.      
</p>
</ul>
</div>
</div>
</div>
</div>

</>
)
}
export default Port1