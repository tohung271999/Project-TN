import React from 'react'
import Footer from '../components/Footer';
import Header from "../components/Header";
export default function blogScreen() {
  return (
    <>
      <Header/>
        <div className="title">
          <div className="title-left">
            <p className="pad-bot-20">Welcome to Good Food</p>
            <h2 className="pad-bot-20">We are a modern restaurant in the center of the city</h2>
            <span className="pad-bot-20">From grilled Tandoori chicken burgers to simple chicken burgers with garlic rosemary mayonnaise, put a new twist on an old barbecue fYumyurite with these unique and chicken burger recipes</span>
            <div className="btn-box">
              <button type="button" className="btn btn-outline-secondary">Look More</button>
            </div>
          </div>
          <div className="title-right">
            <img src="/images/10.png"/>
          </div>
        </div>
        <div className="service">
        <div className="service-title">
          <h1>BEST SERVICE EVER</h1>
          <p>Our 3 Michelin Stars ensure that your experience regarding our cuisine will be one that you will not forget.</p>
        </div>
      </div>
    <div className="features">
      <div className="feature-top">
        <div className="guestbook-top">
          <p style={{"color":"#000"}}>SERVICES</p>
          <h1>Our Features</h1>
          <span><i className="icon-utensils fas fa-utensils" /></span>
        </div>
      </div>
      <div className="features-bottom">
        <figure className="snip0019">
          <img src="/images/11.png" alt="sample11" />
          <figcaption>
            <div><h2>What <span>state</span> do you live in?</h2></div>
            <div><p>Denial. Miss Wormwood: I don't suppose I can argue with that.</p></div>
            <a href="#" />
          </figcaption>			
        </figure>
        <figure className="snip0019">
          <img src="/images/12.png" alt="sample12" />
          <figcaption>
            <div><h2>If we wanted more <span>leisure</span></h2></div>
            <div><p>We'd invent machines that do things less efficiently.</p></div>
            <a href="#" />
          </figcaption>			
        </figure>
        <figure className="snip0019">
          <img src="/images/13.png" alt="sample13" />
          <figcaption>
            <div><h2>I <span>propose</span> we leave <span>math</span> </h2></div>
            <div><p>To the machines and go play outside.</p></div>
            <a href="#" />
          </figcaption>			
        </figure>
      </div>
    </div>
    <div className="booking">
      <div className="guestbook-top">
        <p style={{"-webkit-text-transform":"uppercase","text-transform":"uppercase"}}>Booking</p>
        <h1 style={{"color":"white","font-family":"'Times New Roman', Times, serif"}}>Book A Table</h1>
        <span><i className="icon-utensils fas fa-utensils" style={{"color":"white"}} /></span>
      </div>
      <div className="booking-bottom">
        <div className="form-sl1">
          <select className="form-select" aria-label="Default select example">
            <option selected>Time</option>
            <option value={5}>06.00 pm</option>
            <option value={6}>06.30 pm</option>
            <option value={7}>07.00 pm</option>
            <option value={8}>07.30 pm</option>
            <option value={9}>08.00 pm</option>
            <option value={10}>08.30 pm</option>
            <option value={11}>09.00 pm</option>
            <option value={12}>09.30 pm</option>
          </select>
        </div>
        <div className="form-sl2">
          <select className="form-select" aria-label="Default select example">
            <option selected>Party Size</option>
            <option value={1}>1 Person</option>
            <option value={2}>2 Person</option>
            <option value={3}>3 Person</option>
            <option value={4}>4 Person</option>
            <option value={5}>5 Person</option>
            <option value={6}>6 Person</option>
          </select>
        </div>
        <div className="form-sl3">
          <form action>
            <input type="date" id="date" name="date" placeholder="Booking date" size={500} /> 
          </form>
        </div>
        <button type="button" className="btn btn-outline-light">Find A Table</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};