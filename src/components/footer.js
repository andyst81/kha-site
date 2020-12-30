import React from "react";
import "./style.scss";
import "./App.css";

const Footer = () => (
  <div className="footer columns is-centered mb-0">
    <div className="pt-5 content container columns has-text-centered">
      <div className="column is-one-third">
        <h2 className="details">Opening Hours</h2>
        <p>
          Open everyday
          <br />
          4:00pm to midnight
        </p>
      </div>

      <div className="column is-one-third">
        <h2 className="details">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503.916118252118!2d100.5382668!3d13.7197194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4065cb2126eeaa0a!2sKha%20Eatery%20%26%20Bar!5e0!3m2!1sen!2sth!4v1604765152045!5m2!1sen!2sth"
          title="map"
        ></iframe>
        <p>
          Kha... Gastrobar,
          <br />
          433 Thanon Suan Phlu,
          <br />
          Thung Maha Mek, Sathon,
          <br />
          Bangkok, 10120
        </p>
      </div>

      <div className="column is-one-third">
        <h2 className="details">Contact Details</h2>
        <i className="fas fa-phone-alt"></i>{" "}
        <a className="details" href="tel:084-071-6435">
          {" "}
          084-071-6435{" "}
        </a>{" "}
        <br />
        <i className="fas fa-envelope"></i>{" "}
        <a className="details" href="mailto:khasathorn@gmail.com">
          {" "}
          khasathorn@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
