import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function contactScreen() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <section className="contact-us section-padding">
            <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="map-info md-mb50">
                    <div className="map-box">
                    <div className="map" id="ieatmaps" />
                    </div>
                    <div className="con-info mt-30 dcrow">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="item md-mb30">
                            <h4>Our Location</h4>
                            <ul>
                            <li>
                                <span className="icon pe-7s-map-marker" />
                                <small>
                                <p>56 12th Ave, New York, NY 10011 ,</p>
                                <p>71 Madison Ave 10013 New York</p>
                                </small>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="item">
                            <h4>Contact Us</h4>
                            <ul>
                            <li>
                                <span className="icon pe-7s-call" />
                                <p>800-603-6035 , 914-309-7030</p>
                            </li>
                            <li>
                                <span className="icon pe-7s-mail" />
                                <p className="itemP"><a href="#0">mail@companyname.com</a></p>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="opening bg-img bg-repeat" data-background="img/dotz.png">
                    <div className="toup">
                    <h6 className="scfont">Opening Times</h6>
                    <h4>Check Availability</h4>
                    <div className="open-hour">
                        <ul>
                        <li>Sunday to Tuesday <span>10:00 - 22:00</span></li>
                        <li>Friday to Saturday <span>12:00 - 19:00</span></li>
                        </ul>
                    </div>
                    <div className="mt-80">
                        <a href="#0" className="btn-skew btn-color btn-bg">
                        <span>Make a Reservation</span>
                        <i />
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row justify-content-center mt-100">
                <div className="col-lg-9 col-md-11">
                <div className="contact-form">
                    <div className="sec-head text-center">
                    <h6>Get In Touch</h6>
                    <h3>Contact Us</h3>
                    <span className="icon">
                        <i className="flaticon-cutlery-2" />
                    </span>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <input type="text" name="user-name" placeholder="Your Name *" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <input type="email" name="user-email" placeholder="Your Email *" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <input type="text" name="user-phone" placeholder="Phone Number *" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <select className="wide">
                            <option value={0}>Subject</option>
                            <option value={1}>Find A Table</option>
                            <option value={2}>Upcoming Events</option>
                            <option value={3}>Other</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                        <textarea placeholder="Your Message" defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="text-center">
                        <div className="form-group mb-0">
                            <button className="btn-skew btn-color btn-bg">
                            <span>Send Message</span>
                            <i />
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
      <Footer />
    </div>
  );
};
