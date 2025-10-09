
import React from 'react';
import './Pags.css'; 

import PImg from '/blogsK.png';
import Pimga from '/blogsB.png';


import BlogA from '/blogsA.png';
import BlogC from '/blogsC.png';
import BlogD from '/blogsD.png';
import BlogE from '/blogsE.png'; 

function Pags() {
  const blogCards = [
    { img: BlogA, date: 'January 3, 2023', title: 'How to prepare a delicious gluten-free sushi' },
    { img: BlogC, date: 'February 10, 2023', title: 'Secrets to perfect pizza at home' },
    { img: BlogD, date: 'March 5, 2023', title: '5 Mistakes to Avoid While Making Burger' },
    { img: BlogE, date: 'April 12, 2023', title: 'Top 10 Toppings You Must Try' },
  ];

  return (
    <>
      <div className="backP">
        <h1 className="hh1P">
          The secret tips & tricks to prepare a <br />
          perfect burger & pizza for our customers
        </h1>
      </div>

      <div className="div1P">
        <div className="div2P">
          <img src={PImg} alt="Burger Preparation" />
        </div>

        <div className="footerP">
          <h2>What do you need to prepare a homemade burger</h2>
          <p className="m2P">
            Dolor sit amet consectetur adipisicing elit. Eius dolore esse beatae officiis dicta inventore deleniti error
            a tenetur labore perspiciatis quam, est, eveniet enim! Quidem magni ipsum sed nobis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus commodi laborum, minima numquam
            porro recusandae error ratione ducimus? Aut ducimus suscipit quo quaerat cum fugit itaque repellat?
          </p>

          
          {[
            'Quality Beef',
            'Seasoning',
            "Don't overwork the Meat",
            'Cooking',
            'Resting',
          ].map((title, index) => (
            <h4 key={index}>
              {index + 1}. {title}:{' '}
              <span className="spanP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum, modi placeat
                qui eaque eligendi fugiat atque asperiores id ipsum. Soluta molestiae ipsam odit placeat.
              </span>
            </h4>
          ))}

          <h3 className="mP">What are the right ingredients to make it delicious</h3>
          <p className="m2P">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere alias magnam quas doloribus
            corporis eius, officiis sint veniam? Aliquid voluptates minima itaque fugit qui culpa, animi veritatis
            veniam aliquam.
          </p>

          
          {[
            'Quality Beef',
            'Seasoning',
            "Don't overwork the Meat",
            'Cooking',
            'Resting',
          ].map((title, index) => (
            <h4 key={`repeat-${index}`}>
              {index + 1}. {title}:{' '}
              <span className="spanP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rerum, modi placeat
                qui eaque eligendi fugiat atque asperiores id ipsum. Soluta molestiae ipsam odit placeat.
              </span>
            </h4>
          ))}
        </div>

        
        <div>
          <div className="div3P">
            <img src={Pimga} alt="Pizza Ingredients" />
          </div>
          <div className="div4P">
            <h1>What are the right ingredients to make it Delicious</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo vitae enim hic voluptas ducimus animi quam,
              excepturi optio provident ipsam, dignissimos deserunt soluta. Accusamus ipsum nisi numquam quis natus.
            </p>
          </div>
        </div>
      </div>

     
      <h1 className="hh3P">Our Blog & Articles</h1>
      <h4 className="hh2P">
        We consider all drivers of change give you the components you need <br />
        to change to create a truly happiness
      </h4>

      <div className="cardP">
        {blogCards.map((card, i) => (
          <div key={i}>
            <div className="hadderP">
              <img src={card.img} alt={`Blog ${i}`} />
            </div>
            <div className="fooderP">
              <h4>{card.date}</h4>
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Pags;


