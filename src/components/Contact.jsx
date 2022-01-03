import Footer from "./Footer";
import "../styles/Contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="container">
        <div className="info">
          <h2>Her kan du finde info vedrørende kontaktmuligheder:</h2>
          <p>
            Du kan med fordel udfylde vores kontaktformular. Vi sørger altid for
            at vende tilbage inden for 24 timer på hverdage.
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <b> Email: </b>
            <a href="mailto:someone@example.com">hello@support.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <b> Nummer:</b> <a href="tel:52724388">52 72 43 88</a> │
            <a href="tel:60939500">60 93 95 00</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <b> Addresse: </b>
            <a
              href="http://maps.google.com/?q=Nørre Voldgade 13, 1358 København"
              target="_blank"
            >
              Nørre Voldgade 13, 1358 København
            </a>
          </p>
          <p>Vi kan kontaktes mandag-fredag mellem 9:00-17:00</p>
        </div>
        <div className="contact-box">
          <form>
            <input type="text" name="name" placeholder="Navn" />
            <input type="text" name="mail" placeholder="Email" />
            <textarea
              placeholder="Skriv din besked"
              rows="4"
              cols="50"
            ></textarea>
            <button>Send besked</button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.3370434515587!2d12.569324215984002!3d55.68312778053479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525305370af27f%3A0xdef60dfab68cef1a!2sN%C3%B8rreport%20St.!5e0!3m2!1sda!2sdk!4v1638053095784!5m2!1sda!2sdk"
        width="100%"
        height="450"
        title="Google Maps"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <Footer />
    </div>
  );
};

export default Contact;
