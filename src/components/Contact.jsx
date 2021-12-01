import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="container">
        <div classname="info">
          <h2>Her kan du finde info vedrørende kontaktmuligheder:</h2>
          <p>
            <a href="mailto:someone@example.com">
              <b>Email:</b> hello@support.com
            </a>
          </p>
          <p>
            <b>Nummer:</b> 30 20 14 98
          </p>
          <p>
            <b>Addresse:</b> Nørre Voldgade 13, 1358 København
          </p>
          <p>Vi kan kontaktes mandag-fredag mellem 9:00-17:00</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.3370434515587!2d12.569324215984002!3d55.68312778053479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525305370af27f%3A0xdef60dfab68cef1a!2sN%C3%B8rreport%20St.!5e0!3m2!1sda!2sdk!4v1638053095784!5m2!1sda!2sdk"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <Footer />
    </div>
  );
};

export default Contact;
