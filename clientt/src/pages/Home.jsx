import React from 'react'
import "./Home.css"
import Nav from '../components/Nav'
import Manu from '/manu-cardC.png';
import ManuA from '/manu-cardD.png';
import ManuB from '/manu-cardB.png';
import ManuC from '/manu-card.png';
import Img from '/HCH.png';
import Imga from '/HCG.png';
import Imgb from '/HCF.png';
import Imgc from '/HCE.png';
import Imgd from '/HCD.png';
import Imge from '/HCC.png';
import Imgf from '/HCB.png';
import Imgg from '/HCA.png';
import Imgh from '/HFCARDH.png';
import Imgi from '/HFCARDG.png';
import Imgj from '/HFCARDF.png';
import Imgk from '/HFCARDE.png';
import Imgl from '/HFCARDD.png';
import Imgm from '/HFCARDC.png';
import Imgn from '/HFCARDB.png';
import Imgo from '/HFCARA.png';
import FooterA from '/FooterA.png'
import FooterB from '/FooterB.png'
import FooterC from '/FooterC.png'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TbDiscountFilled } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";




const products = [
  {
    id: 1,
    image: Manu,
    title: "Breakfast",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    id: 2,
    image: ManuA,
    title: "Main Dishes",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    id: 3,
    image: ManuB,
    title: "Drinks",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    id: 4,
    image: ManuC,
    title: "Desserts",
    description:
      "In the new era of technology we look in the future with certainty and pride for our life."
  }
];

function Home() {
  return (
    <>
     <Nav />
      <div className="home-main">
        <div className="main">
          <h1>
            Best food for <br /> your taste
          </h1>
          <p>
            Discover delectable cuisine and unforgettable moments <br /> in our
            welcoming, culinary haven.
          </p>
          <div>
            <button className="H-MainbA">Book A Table</button>
            <button className="H-MainbB">Explore Menu</button>
          </div>
        </div>
      </div>

      <div className="name-plat">Browse Our Menu</div>

      <div className="main-card">
        {products.map((item) => (
          <div className="m-card" key={item.id}>
            <div className="header">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="footer">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h2>Explore Menu</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="card2">
        <div className="card3">
          <div className="hadder">
            <img src={Img} alt="Main" />
          </div>
          <div className="footerR">
            <h1>
              We Provide healthy <br /> Food For your Family
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem soluta maiores assumenda quod, commodi amet quas
              doloremque laudantium minus voluptatum voluptatibus odio
              consequatur itaque, officiis quos qui rem ducimus modi!
            </p>
            <button>More About Us</button>
          </div>
        </div>
      </div>

      <h1 className="hh1">
        We also offer unique <br /> Services For your events
      </h1>

      <div className="card4">
        {[Imga, Imgb, Imgc, Imgd].map((src, i) => (
          <div key={i}>
            <div className="hadder1">
              <img src={src} alt={`Service ${i + 1}`} />
            </div>
            <div className="footer1">
              <h3>Caterings</h3>
              <h4>
                In the new era of technology we look <br /> in the future with
                certainty for life
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="card5">
        <div className="cont">
          <div className="cardr">
            <div className="front">
              <img src={Imge} alt="Chef" />
            </div>
            <div className="back">
              <img src={FooterA} alt="Transform" />
            </div>
          </div>
        </div>

        <div className="div2">
          <div className="cont2">
            <div className="cardr2">
              <div className="front2">
                <img src={Imgf} alt="Flip" />
              </div>
              <div className="back2">
                <img src={FooterB} alt="Back" />
              </div>
            </div>
          </div>

          <div className="cont3">
            <div className="cardr3">
              <div className="front3">
                <img src={Imgg} alt="Front" />
              </div>
              <div className="back3">
                <img src={FooterC} alt="Back" />
              </div>
            </div>
          </div>
        </div>

        <div className="div3">
          <h1>
            Fastest Food <br /> Delivery in city
          </h1>
          <p>
            Our visual designs let your <br /> way to custom apps for both desktop
          </p>
          <div>
            <div className="div4">
              <MdOutlineAccessTimeFilled size={28} />
              <h2>Delivery within 30 minutes</h2>
            </div>
            <div className="div4">
              <TbDiscountFilled size={28} />
              <h2>Best offer & prices</h2>
            </div>
            <div className="div4">
              
              <FaShoppingCart size={28} />
              
              <h2>Online Services Available</h2>
            </div>
          </div>
        </div>
      </div>

      <h1 className="hh">What Our Customers Say</h1>
      <div className="card6">
        {[
          {
            title: "The best restaurant",
            img: Imgh,
            name: "Sophire Robson",
            city: "Los Angeles, CA"
          },
          {
            title: "Simply Delicious",
            img: Imgi,
            name: "Matt Cannon",
            city: "San Diego, CA"
          },
          {
            title: "One of a Kind restaurant",
            img: Imgj,
            name: "Andy Smith",
            city: "San Francisco, CA"
          }
        ].map((item, index) => (
          <div className="div5" key={index}>
            <div className="hadder3">
              <h3>{`"${item.title}"`}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate eveniet suscipit dolore neque reprehenderit culpa!
                eius.
              </p>
            </div>
            <div className="footer3">
              <img
                src={item.img}
                width="60px"
                height="50px"
                alt={item.name}
              />
              <div>
                <h4>{item.name}</h4>
                <h5>{item.city}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="div11">
        <div className="div6">
          <h1>Our Blog & Articles</h1>
          <button className="budiv6">Read ALL Articles</button>
        </div>

        <div className="card7">
          <div className="div7">
            <div className="hadder4">
              <img src={Imgk} alt="Blog 1" />
            </div>
            <div className="footer4">
              <h4>
                The secret tips & tricks to prepare a perfect burger & pizza <br />
                for our Customers
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda dolores voluptas doloremque aspernatur totam eveniet
                architecto mollitia iure quo dolorum. Rem perspiciatis veritatis
                incidunt quaerat nisi sunt laborum aspernatur repudiandae.
              </p>
            </div>
          </div>
          <div className="div8">
            <div className="div9">
              <div className="hadder5">
                <img src={Imgl} alt="" />
              </div>
              <div className="footer5">
                <p>january 3 2023</p>
                <h3>How  prepare the perfect french fries air fryer</h3>
              </div>
            </div>
            <div className="div9">
              <div className="hadder5">
                <img src={Imgn} alt="" />
              </div>
              <div className="footer5">
                <p>january 3 2023</p>
                <h3>7 delicious cheesecake recipes you can prepare</h3>
              </div>
            </div>
          </div> 
          <div className="div8">
            <div className="div9">
              <div className="hadder5">
                <img src={Imgm} alt="" />
              </div>
              <div className="footer5">
                <p>january 3 2023</p>
                <h3>How to prepare delicious chicken tenders</h3>
              </div>
            </div>

            <div className="div9">
              <div className="hadder5">
                <img src={Imgo} alt="" />
              </div>
              <div className="footer5">
                <p>january 3 2023</p>
                <h3>5 great pizza restaurants you should visit this city</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
