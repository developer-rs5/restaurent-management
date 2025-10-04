import React from 'react';
import './Footer.css';
import { FaSquareXTwitter, FaFacebook, FaSquarePinterest } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";


import Nav from '/Nav.png'; 
import Imga from '/FooterC.png'
import Imgb from '/FooterD.png'
import Imgc from '/FooterB.png'
import Imgd from '/FooterA.png'
import Bia from '/blogsA.png'
import Bib from '/blogsB.png'
import Bic from '/blogsC.png'
import Bid from '/blogsD.png'

const products = [
  { front: Imga, back: Bia },
  { front: Imgb, back: Bib  },
  { front: Imgc, back: Bic },
  { front: Imgd, back: Bid},
];

function Footer() {
  return (
    <div className="div12">
     
      <div className="sr2">
        <div className="div-img">
          <img src={Nav} alt="Logo" className="logo-img" />
          <h1 className='sr2-htag'>Bistro Bliss</h1>
        </div>
        <p className="logo-text">
          In the new era of technology, we look to the future with certainty and pride in our company.
        </p>
        <div className="social-icons">
          <FaSquareXTwitter />
          <FaFacebook />
          <IoLogoInstagram />
          <FaSquarePinterest />
        </div>
      </div>

     
      <div className="sr">
        <div className="page-group">
          <h3>Pages</h3>
          <ul>
            {["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"].map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>
        <div className="page-group">
          <h3>Utility Pages</h3>
          <ul>
            {["Start Here", "Styleguide", "Password Protected", "404 Not Found", "Licenses", "Changelog", "View More"].map((page, index) => (
              <li key={index}>{page}</li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="sr1">
        <h1 className="insta-heading">Follow Us On Instagram</h1>
        <div className="div14">
          {products.map((img, index) => (
            <div className="cont4" key={index}>
              <div className="cardr4">
                <div className="front4">
                  <img src={img.front} alt={`Front ${index + 1}`} className="flip-img" />
                </div>
                <div className="back4">
                  <img src={img.back} alt={`Back ${index + 1}`} className="flip-img" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
