// Section 5 - Availability + contact
const BookSection = () => {
  useVVLang();
  const today = new Date();
  const [monthOffset, setMonthOffset] = React.useState(0);
  const [bookedRanges, setBookedRanges] = React.useState([]);
  const [calLoading, setCalLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/availability')
      .then(r => r.json())
      .then(data => setBookedRanges(data.bookedRanges || []))
      .catch(() => {})
      .finally(() => setCalLoading(false));
  }, []);

  const bookings = React.useMemo(() => {
    const set = new Set();
    for (const { start, end } of bookedRanges) {
      const sd = new Date(start), ed = new Date(end);
      for (let d = new Date(sd); d <= ed; d.setDate(d.getDate() + 1)) {
        set.add(d.toISOString().slice(0, 10));
      }
    }
    return set;
  }, [bookedRanges]);

  const buildMonth = (base, offset) => {
    const d = new Date(base.getFullYear(), base.getMonth() + offset, 1);
    const year = d.getFullYear(), month = d.getMonth();
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const startDow = (first.getDay() + 6) % 7; // Mon-first
    const days = [];
    for (let i = 0; i < startDow; i++) days.push(null);
    for (let day = 1; day <= last.getDate(); day++) {
      const date = new Date(year, month, day);
      const iso = date.toISOString().slice(0,10);
      const past = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const booked = bookings.has(iso);
      days.push({ day, iso, past, booked });
    }
    const name = d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    return { name, days };
  };

  const m1 = buildMonth(today, monthOffset);
  const m2 = buildMonth(today, monthOffset + 1);
  const dows = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

  const renderMonth = (m) => (
    <div>
      <div className="cal-month-label">{m.name}</div>
      <div className="cal-grid">
        {dows.map(d => <div key={d} className="cal-dow">{d}</div>)}
        {m.days.map((d, i) => {
          if (!d) return <div key={i} className="cal-day empty"></div>;
          const cls = d.past ? 'past' : d.booked ? 'booked' : 'available';
          return <div key={i} className={`cal-day ${cls}`}>{d.day}</div>;
        })}
      </div>
    </div>
  );

  return (
    <section className="book-section" id="book" data-screen-label="05 Availability">
      <div className="container">
        <div className="book-grid">
          <div>
            <div className="eyebrow">{t('bookEyebrow')}</div>
            <h2 style={{ fontFamily: "var(--iv-font-display)", fontWeight: 500, fontSize: "clamp(32px,3.8vw,52px)", lineHeight: 1.05, color: "var(--iv-ink-900)", margin: "14px 0 28px" }}>
              {t('bookHeadline1')} <em style={{ fontFamily: "var(--iv-font-editorial)", fontStyle: "italic", color: "var(--iv-sand-600)", fontWeight: 400 }}>{t('bookHeadline2')}</em>
            </h2>
            <div className="calendar">
              <div className="cal-head">
                <div className="cal-title">{t('calendar')}</div>
                <div className="cal-nav">
                  <button onClick={() => setMonthOffset(monthOffset - 1)} aria-label="Previous month">
                    <Icon name="arrowLeft" size={16}/>
                  </button>
                  <button onClick={() => setMonthOffset(monthOffset + 1)} aria-label="Next month">
                    <Icon name="arrowRight" size={16}/>
                  </button>
                </div>
              </div>
              <div className="cal-months">
                {renderMonth(m1)}
                {renderMonth(m2)}
              </div>
              <div className="cal-legend">
                <div className="legend-item">
                  <span className="legend-swatch" style={{ background: '#fff', border: '1px solid var(--iv-sand-300)' }}></span>
                  {t('available')}
                </div>
                <div className="legend-item">
                  <span className="legend-swatch" style={{ background: 'var(--iv-sand-200)' }}></span>
                  {t('booked')}
                </div>
                <div className="legend-item" style={{ marginLeft: 'auto', color: 'var(--iv-ink-500)', fontStyle: 'italic', fontFamily: 'var(--iv-font-editorial)' }}>
                  {calLoading ? '…' : t('syncNote')}
                </div>
              </div>
            </div>
          </div>

          <div className="book-info">
            <div className="eyebrow">{t('enquireEyebrow')}</div>
            <h2>{t('enquireHeadline')} <em>Piotr.</em></h2>
            <div className="pricing">
              <span className="price-value">$1,300</span>
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
