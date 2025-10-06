// import React from 'react';
// import './About.css';
// import Aimg from '/Aimg.png'
// import Aimgb from '/Aimgb.png'
// import ImgA from '/HFCARDF.png'
// import Imgb from '/HFCARDG.png'
// import Imgc from '/HFCARDH.png'
// import { MdAccountBalance } from "react-icons/md";
// import { MdAddCall } from "react-icons/md";
// import { FaEnvelope } from "react-icons/fa";
// import { IoLocation } from "react-icons/io5";




// const contactDetails = [
//   { icon: <MdAddCall />,
//     text: '(414) 853-0107',
//     alt: 'Phone'
//   },
//   { icon: <FaEnvelope />,
//      text: 'Happytummy@restorant.com',
//       alt: 'Email' },
//   {
//     icon: <IoLocation />,
//     text: '837w. Marshall Lane, Marshalltown,\nIA 50158, Los Angeles',
//     alt: 'Location',
//   },
// ];

// const infoBoxes = [
//   { value: '3', label: 'Locations' },
//   { value: '1995', label: 'Founded' },
//   { value: '65+', label: 'Staff Members' },
//   { value: '100%', label: 'Satisfied Customers' },
// ];

// const testimonials = [
//   {
//     title: 'The best restaurant',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt eveniet suscipit dolore neque reprehenderit culpa! Eius.',
//     img: Imgc,
//     name: 'Sophire Robson',
//     location: 'Los Angeles, CA',
//   },
//   {
//     title: 'Simply Delicious',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt eveniet suscipit dolore neque reprehenderit culpa! Eius.',
//     img: Imgb,
//     name: 'Matt Cannon',
//     location: 'San Diego, CA',
//   },
//   {
//     title: 'One of a Kind Restaurant',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt eveniet suscipit dolore neque reprehenderit culpa! Eius.',
//     img: ImgA,
//     name: 'Andy Smith',
//     location: 'San Francisco, CA',
//   },
// ];

// function About() {
//   return (
//     <>
//       <div className="cardsA">
//         <div className="mainA">
//           <img src={Aimg} alt="Main Visual" />
//           <div className="rzsA">
//             <h3>Come and visit us</h3>
//             {contactDetails.map((item, index) => (
//               <div className="ddA" key={index}>
//                 <img src={item.icon} alt={item.alt} />
//                 <h4>{item.text}</h4>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="main1A">
//           <h1>
//             We provide healthy <br />
//             food for your family.
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
//             perferendis animi explicabo odit cumque voluptatum dolorum, nostrum
//             in nisi earum suscipit tempora excepturi? Vero consequatur qui nemo
//             totam officia ad?
//           </p>
//         </div>
//       </div>

//       <div className="main2A">
//         <div className="hadderA">
//           <iframe
//             src="https://www.youtube.com/embed/78z9wfm-Gtg"
//             frameBorder="0"
//             allowFullScreen
//             title="Promo Video"
//           ></iframe>
//         </div>
//         <div className="footerA">
//           {/* <img className="img3A" src={ImgA} alt="Promo 1" /> */}
//           <MdAccountBalance />
//           <img className="img4A" src="2.png" alt="Promo 2" />
//           <img className="img5A" src="3.png" alt="Promo 3" />
//         </div>
//       </div>

//       <div className="main3A">
//         <div className="hadder2A">
//           <h1>
//             A Little information <br />
//             for our valuable guest
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
//             atque! Blanditiis saepe sit tenetur voluptatum id eos qui illum,
//             numquam architecto nisi reprehenderit eum. Asperiores reprehenderit
//             minus deserunt atque itaque!
//           </p>
//           <div className="div1A">
//             {infoBoxes.map((box, index) => (
//               <div className="boxA" key={index}>
//                 <h1>{box.value}</h1>
//                 <h4>{box.label}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="footer2A">
//           <img src={Aimgb} alt="Food Box" />
//         </div>
//       </div>

//       <h1 className="hhA">What Our Customers Say</h1>
//       <div className="card6A">
//         {testimonials.map((item, index) => (
//           <div className="div5A" key={index}>
//             <div className="hadder3A">
//               <h3>"{item.title}"</h3>
//               <p>{item.text}</p>
//             </div>
//             <div className="footer3A">
//               <img src={item.img} width="60" height="50" alt={item.name} />
//               <div>
//                 <h4>{item.name}</h4>
//                 <h5>{item.location}</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }


import React from 'react';
import './About.css';


import Aimg from '/Aimg.png';
import Aimgb from '/Aimgb.png';
import ImgA from '/HFCARDF.png';
import Imgb from '/HFCARDG.png';
import Imgc from '/HFCARDH.png';

import { MdAccountBalance, MdAddCall } from 'react-icons/md';
import { FaEnvelope } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { IoTimeOutline } from "react-icons/io5";
import { FaBorderAll } from "react-icons/fa";


const contactDetails = [
  {
    icon: <MdAddCall style={{ fontSize: '24px', color: '#4CAF50' }} />,
    text: '(414) 853-0107',
    alt: 'Phone',
  },
  {
    icon: <FaEnvelope style={{ fontSize: '24px', color: '#2196F3' }} />,
    text: 'Happytummy@restorant.com',
    alt: 'Email',
  },
  {
    icon: <IoLocation style={{ fontSize: '24px', color: '#F44336' }} />,
    text: '837w. Marshall Lane, Marshalltown, IA 50158, Los Angeles',
    alt: 'Location',
  },
];


const infoBoxes = [
  { value: '3', label: 'Locations' },
  { value: '1995', label: 'Founded' },
  { value: '65+', label: 'Staff Members' },
  { value: '100%', label: 'Satisfied Customers' },
];


const testimonials = [
  {
    title: 'The best restaurant',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt eveniet suscipit dolore neque reprehenderit culpa! Eius.',
    img: Imgc,
    name: 'Sophire Robson',
    location: 'Los Angeles, CA',
  },
  {
    title: 'Simply Delicious',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt eveniet suscipit dolore neque reprehenderit culpa! Eius.',
    img: Imgb,
    name: 'Matt Cannon',
    location: 'San Diego, CA',
  },
  {
    title: 'One of a Kind Restaurant',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupt eveniet suscipit dolore neque reprehenderit culpa! Eius.',
    img: ImgA,
    name: 'Andy Smith',
    location: 'San Francisco, CA',
  },
];


function About() {
  return (
    <>

      <div className="cardsA">
        <div className="mainA">
          <img src={Aimg} alt="Main Visual" />
          <div className="rzsA">
            <h3>Come and visit us</h3>
            {contactDetails.map((item, index) => (
              <div className="ddA" key={index}>
                <span>{item.icon}</span>
                <h4>{item.text}</h4>
              </div>
            ))}
          </div>
        </div>


        <div className="main1A">
          <h1>
            We provide healthy <br />
            food for your family.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            perferendis animi explicabo odit cumque voluptatum dolorum, nostrum
            in nisi earum suscipit tempora excepturi? Vero consequatur qui nemo
            totam officia ad?
          </p>
        </div>
      </div>

    
      <div className="main2A">
        <div className="hadderA">
          <iframe
            src="https://www.youtube.com/embed/78z9wfm-Gtg"
            frameBorder="0"
            allowFullScreen
            title="Promo Video"
          ></iframe>
        </div>
       <div className="footerA">
         <div className="featureA">
           <MdAccountBalance style={{ fontSize: '40px', color: '#FF9800' }} />
           <p>Easy to Order</p>
         </div>
  
         <div className="featureA">
           <FaBorderAll style={{ fontSize: '40px', color: '#4CAF50' }} />
            <p>Well Organized</p>
         </div>

         <div className="featureA">
            <IoTimeOutline style={{ fontSize: '40px', color: '#2196F3' }} />
           <p>On Time Delivery</p>
         </div>
        </div>
      </div>

  
      <div className="main3A">
        <div className="hadder2A">
          <h1>
            A Little information <br />
            for our valuable guest
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            atque! Blanditiis saepe sit tenetur voluptatum id eos qui illum,
            numquam architecto nisi reprehenderit eum. Asperiores reprehenderit
            minus deserunt atque itaque!
          </p>
          <div className="div1A">
            {infoBoxes.map((box, index) => (
              <div className="boxA" key={index}>
                <h1>{box.value}</h1>
                <h4>{box.label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="footer2A">
          <img src={Aimgb} alt="Food Box" />
        </div>
      </div>

      <h1 className="hhA">What Our Customers Say</h1>
      <div className="card6A">
        {testimonials.map((item, index) => (
          <div className="div5A" key={index}>
            <div className="hadder3A">
              <h3>"{item.title}"</h3>
              <p>{item.text}</p>
            </div>
            <div className="footer3A">
              <img src={item.img} width="60" height="50" alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <h5>{item.location}</h5>
              </div>  
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;

