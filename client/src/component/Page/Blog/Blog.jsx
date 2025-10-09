import React from 'react';
import './Blog.css'; 
import Ba from '/blogsA.png'
import Bb from '/blogsB.png'
import Bc from '/blogsC.png'
import Bd from '/blogsD.png'
import Be from '/blogsE.png'
import Bf from '/blogsF.png'
import Bg from '/blogsG.png'
import Bh from '/blogsH.png'
import Bi from '/blogsI.png'
import Bj from '/blogsJ.png'
import Bk from '/blogsK.png'
import Bl from '/blogsL.png'

function Blog() {
  // Image filenames
  const blogImages = [
    Ba, Bb, Bc, Bd,
    Be, Bf, Bg, Bh,
    Bi, Bj, Bk, Bl
  ];

  return (
    <div className="backB">
      <h1 className="hh1B">Our Blog & Articles</h1>
      <h4 className="hh2B">
        We consider all drivers of change give you the components you need <br />
        to change to create a truly happenes
      </h4>

      <div className="cardB">
        {blogImages.map((img, index) => (
          <div key={index}>
            <div className="hadderB">
              <img src={img} alt={`blog-${index}`} />
            </div>
            <div className="fooderB">
              <h4>January 3, 2023</h4>
              <h2>
                How to prepare a delicious <br />
                gluten free sushi
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
