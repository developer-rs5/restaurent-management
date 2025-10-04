import React from 'react';
import './Contact.css'; // Link your styles here

function Contact() {
  return (
    <div className="backC">
      <h1 className="hh1C">Contact Us</h1>
      <h3 className="hh2C">
        We consider all the drivers of change give you the components <br />
        you need to create a truly happiness
      </h3>

      <div className="cardC">
        <div className="rrC">
          <div>
            <label htmlFor="name">Name</label><br />
            <input className="inpC" type="text" placeholder="Enter your name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label><br />
            <input className="inpC" type="email" placeholder="Enter your Email" id="email" />
          </div>
        </div>

        <div className="label1C">
          <label htmlFor="subject">Subject</label><br />
          <input className="inp2C" type="text" placeholder="Write a subject" id="subject" />
        </div>

        <div className="label1C">
          <label htmlFor="message">Message</label><br />
          <input className="inp3C" type="text" placeholder="Write your Message" id="message" />
        </div>

        <button>Send</button>
      </div>

      <div className="card2C">
        <div className="callC">
          <h3>Call Us:</h3>
          <br />
          <h5>+1-234-567-8900</h5>
        </div>
        <div className="callC">
          <h3>Hours:</h3>
          <br />
          <h6>Mon-Fri: 11am - 8pm</h6>
          <h6>Sat, Sun: 11am - 8pm</h6>
        </div>
        <div className="callC">
          <h3>Our Location:</h3>
          <br />
          <h6>123 Bridge Street</h6>
          <h6>Nowhere Land, LA 12345</h6>
          <h6>United States</h6>
        </div>
      </div>
    </div>
  );
}

export default Contact;

