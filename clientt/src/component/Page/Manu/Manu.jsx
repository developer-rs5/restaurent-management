import React from 'react';
import './Manu.css'; 
import MA from '/ManuH.png'
import Mb from '/ManuG.png'
import Mc from '/ManuF.png'
import Me from '/ManuE.png'
import Mf from '/ManuD.png'
import Mg from '/ManuC.png'
import Mh from '/ManuB.png'
import Mi from '/ManuA.png'

import Logo from '/logo.png'



const menuItems = [
  {
    img: MA,
    price: '$9.99',
    title: 'Fried Eggs',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Mb,
    price: '$15.99',
    title: 'Hawaiian Pizza',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Mc,
    price: '$7.25',
    title: 'Martinez Cocktail',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Me,
    price: '$20.99',
    title: 'Butterscotch Cake',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Mf,
    price: '$5.89',
    title: 'Mint Lemonade',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Mg,
    price: '$18.89',
    title: 'Mint Lemonade',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Mh,
    price: '$12.55',
    title: 'Cheese Burger',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
  {
    img: Mi,
    price: '$12.99',
    title: 'Classic Waffles',
    desc: 'made with egge, lettuce, salt, oil, and other ingredients',
  },
];

function Manu() {
  return (
    <div>
      <h1 className="Mhh1">Our Menu</h1>
      <h4 className="Mhh2">
        We consider all drivers of change give you the components <br />
        you need to create a truly happens
      </h4>

      <div className="buttM">
        <button className="Mbu1">All</button>
        <button className="Mbu2">Breakfast</button>
        <button className="Mbu2">Main Dishes</button>
        <button className="Mbu2">Drinks</button>
        <button className="Mbu2">Desserts</button>
      </div>

      <div className="Mcards">
        {menuItems.map((item, index) => (
          <div className="Mdiv1" key={index}>
            <div className="Mhadder">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="Mfooter">
              <h2>{item.price}</h2>
              <h3>{item.title}</h3>
              <h4>{item.desc}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="Mlogo">
        <div className="Mhadder1">
          <h1 className="Mhh3">
            You can order <br />
            through apps
          </h1>
          <p className="Mhh4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            adipisci dolorum? Molestiae deleniti rem quasi beatae
          </p>
        </div>
        <div className="Mfooter2">
          <img src={Logo} alt="App Logos" />
        </div>
      </div>
    </div>
  );
}

export default Manu;
