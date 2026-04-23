// Header + Footer + Tweaks (i18n-enabled)
const Header = () => {
  const lang = useVVLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const langRef = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.4);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const onClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const langs = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'es', label: 'Español', short: 'ES' },
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'de', label: 'Deutsch', short: 'DE' },
  ];
  const current = langs.find(l => l.code === lang) || langs[0];

  return (
    <header className={`vv-header ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={scrolled ? 'brand/logo-horizontal.svg' : 'brand/logo-horizontal-inverse.svg'} alt="Villa Victoria" className="logo"/>
      </a>
      <nav>
        <a href="#house">{t('navHouse')}</a>
        <a href="#gallery">{t('navGallery')}</a>
        <a href="#area">{t('navArea')}</a>
        <a href="#reviews">{t('navReviews')}</a>
        <a href="#faq">{t('navFaq')}</a>
        <div ref={langRef} style={{ position: 'relative' }}>
          <button
            className="lang-switch"
            onClick={() => setLangOpen(v => !v)}
            aria-label="Change language"
            aria-expanded={langOpen}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            {current.short}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          {langOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              minWidth: 160,
              background: '#fff',
              border: '1px solid var(--iv-sand-300)',
              boxShadow: '0 10px 28px -12px rgba(0,5,24,0.18)',
              zIndex: 110,
            }}>
              {langs.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setVVLang(l.code); setLangOpen(false); }}
                  style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '11px 14px',
                    border: 0,
                    background: lang === l.code ? 'var(--iv-sand-50)' : 'transparent',
                    color: 'var(--iv-ink-900)',
                    fontFamily: "var(--iv-font-body)",
                    fontSize: 13,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--iv-sand-50)'}
                  onMouseLeave={e => e.currentTarget.style.background = lang === l.code ? 'var(--iv-sand-50)' : 'transparent'}
                >
                  <span>{l.label}</span>
                  <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--iv-ink-500)' }}>{l.short}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <a href="#book" className="btn btn-primary" style={{ padding: '12px 22px', fontSize: 12 }}>{t('checkAvailability')}</a>
      </nav>
    </header>
  );
};

const Footer = () => {
  useVVLang();
  const addr = t('footerAddress').split('|');
  return (
    <footer className="vv-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="brand/logo-primary-inverse.svg" alt="Villa Victoria" className="logo-big"/>
          <p className="tag">{t('footerTag')}</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-label">{t('footerVisit')}</div>
          <a href="#house">{t('navHouse')}</a>
          <a href="#gallery">{t('navGallery')}</a>
          <a href="#area">{t('navArea')}</a>
          <a href="#reviews">{t('navReviews')}</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-label">{t('footerPlan')}</div>
          <a href="#book">{t('footerAvailability')}</a>
          <a href="#faq">{t('navFaq')}</a>
          <a href="#book">{t('footerRates')}</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-label">{t('footerWrite')}</div>
          <a href="mailto:VillaVictoriaSpain@gmail.com">VillaVictoriaSpain@gmail.com</a>
          <a href="tel:+17866587698">+1 786 658 7698</a>
          <a href="https://wa.me/17866587698" target="_blank" rel="noopener">{t('whatsappPiotr')}</a>
          <div className="addr">{addr[0]}<br/>{addr[1]}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>{t('footerCopy')}</div>
        <div>
          <a href="#">{t('privacy')}</a>
          <a href="#">{t('terms')}</a>
        </div>
      </div>
    </footer>
  );
};

window.Header = Header;
window.Footer = Footer;
