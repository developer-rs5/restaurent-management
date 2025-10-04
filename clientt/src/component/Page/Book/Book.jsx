import React from 'react';
import './Book.css'; // Optional CSS file

function Book() {
  return (
    <div>
      <h1 className="hh1Book">Book A Table</h1>
      <h4 className="hh2Book">
        we consider all the drivers of change give you the components <br />
        you need to change to create a truly happenes
      </h4>

      <div className="div1Book">
        <div className="div2Book">
          <div className="rrBook">
            <div className="div3Book">
              <div className="labelBook">
                <label>Date</label><br />
                <input className="rr2B" type="date" />
              </div>
            </div>
            <div className="div3Book">
              <div className="labelBook">
                <label>Time</label><br />
                <input className="rr2Book" type="time" />
              </div>
            </div>
          </div>

          <div className="rrBook">
            <div className="div3Book">
              <div className="labelBook">
                <label>Name</label><br />
                <input className="rr2Book" type="text" placeholder="Name" />
              </div>
            </div>
            <div className="div3Book">
              <div className="labelBook">
                <label>Phone</label><br />
                <input className="rr2Book" type="text" placeholder="Phone" />
              </div>
            </div>
          </div>

          <div className="div3Book">
            <div className="label1Book">
              <label>Total Person</label><br />
              <input className="rr3Book" type="text" placeholder="1 person" />
            </div>
          </div>

          <button className="aaBook">Book A Table</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
