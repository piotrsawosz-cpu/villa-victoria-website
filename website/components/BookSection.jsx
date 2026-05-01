// Section 5 - Host intro + contact
const BookSection = () => {
  useVVLang();

  return (
    <section className="book-section" id="book" data-screen-label="05 Availability">
      <div className="container">
        <div className="book-grid">
          <div className="piotr-photo-desktop">
            <div className="piotr-card">
              <img
                src="/media/piotr.webp"
                alt="Piotr, your host"
                className="piotr-photo"
              />
            </div>
          </div>

          <div className="book-info">
            <div className="eyebrow">{t('enquireEyebrow')}</div>
            <h2>{t('enquireHeadline')} <em>Piotr.</em></h2>
            <p className="piotr-text" style={{ margin: '16px 0 0' }}>{t('piotrBio')}</p>
            <div className="piotr-photo-mobile">
              <div className="piotr-card" style={{ marginTop: 24 }}>
                <img
                  src="/media/piotr-mobile.webp"
                  alt="Piotr, your host"
                  className="piotr-photo"
                />
              </div>
            </div>
            <div className="pricing">
              <span className="price-value">€1,300</span>
              <span className="price-unit">{t('priceUnit')}</span>
            </div>
            <p className="note">{t('enquireNote')}</p>
            <div className="contact-methods">
              <a className="contact-row" href="https://wa.me/17866587698" target="_blank" rel="noopener">
                <Icon name="message" size={22} className="contact-icon"/>
                <span className="contact-label">WhatsApp</span>
                <span className="contact-value">+1 786 658 7698</span>
              </a>
              <a className="contact-row" href="tel:+17866587698">
                <Icon name="phone" size={22} className="contact-icon"/>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+1 786 658 7698</span>
              </a>
              <a className="contact-row" href="mailto:VillaVictoriaSpain@gmail.com">
                <Icon name="mail" size={22} className="contact-icon"/>
                <span className="contact-label">Email</span>
                <span className="contact-value">VillaVictoriaSpain@gmail.com</span>
              </a>
            </div>
            <a href="https://wa.me/17866587698" className="btn btn-primary" target="_blank" rel="noopener" style={{ marginTop: 8 }}>
              {t('messageWhatsapp')}
              <Icon name="arrowRight" size={16}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

window.BookSection = BookSection;
