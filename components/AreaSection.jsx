// Section 4 - The Area
const AreaSection = () => {
  const lang = useVVLang();

  const staticActivities = [
    { key: 'watersports', icon: 'waves',    media: 'media/activities/sailing.webp',    type: 'image' },
    { key: 'sailing',     icon: 'anchor',   media: 'media/activities/watersports.mp4', type: 'video' },
    { key: 'fishing',     icon: 'fish',     media: 'media/activities/fishing.webp',    type: 'image' },
    { key: 'diving',      icon: 'waves',    media: 'media/activities/diving.webp',     type: 'image' },
    { key: 'hiking',      icon: 'mountain', media: 'media/activities/hiking.webp',     type: 'image' },
    { key: 'sightseeing', icon: 'mapPin',   media: 'media/activities/sightseeing.webp',type: 'image' },
    { key: 'beach',       icon: 'waves',    media: 'media/activities/beach.webp',      type: 'image' },
    { key: 'cycling',     icon: 'bike',     media: 'media/activities/cycling.webp',    type: 'image' },
    { key: 'golf',        icon: 'golf',     media: 'media/activities/golf.webp',       type: 'image' },
    { key: 'food',        icon: 'utensils', media: 'media/activities/food.webp',       type: 'image' },
  ];

  const dict = window.__VV_TRANSLATIONS[lang] || window.__VV_TRANSLATIONS.en;
  const translatedActs = dict.areaActivities || window.__VV_TRANSLATIONS.en.areaActivities;
  const activities = staticActivities.map((s, i) => ({ ...s, ...translatedActs[i] }));

  const [active, setActive] = React.useState(0);
  const current = activities[active];

  return (
    <section className="area-section" id="area" data-screen-label="04 The Area">
      <div className="container">
        <div className="area-head">
          <div className="eyebrow">{t('areaEyebrow')}</div>
          <h2 style={{ fontFamily: "var(--iv-font-display)", fontWeight: 500, fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.05, margin: "14px 0 0", color: "#fff" }}>
            {t('areaHeadline1')} <em style={{ fontFamily: "var(--iv-font-editorial)", fontStyle: "italic", color: "var(--iv-sand-300)", fontWeight: 400 }}>{t('areaHeadline2')}</em>
          </h2>
          <p>{t('areaLead')}</p>
        </div>
        <div className="area-tabs-wrap">
          <div className="area-tabs" role="tablist">
            {activities.map((a, i) => (
              <button
                key={a.key}
                className={`area-tab ${active === i ? 'active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={active === i}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                  <Icon name={a.icon} size={20} style={{ color: active === i ? 'var(--iv-sand-300)' : 'rgba(255,255,255,0.4)', flexShrink: 0 }}/>
                  {t('areaTab_' + a.key)}
                </span>
                <Icon name="arrowRight" size={18} className="arrow"/>
              </button>
            ))}
          </div>
          <div className="area-panel" key={current.key}>
            <div className="area-panel-image">
              {current.type === 'video' ? (
                <video src={current.media} autoPlay muted loop playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              ) : (
                <img src={current.media} alt={t('areaTab_' + current.key)} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              )}
            </div>
            <div className="area-panel-content">
              <span className="kicker">{current.kicker}</span>
              <h3>
                {t('areaTab_' + current.key)}{' '}
                <em>{current.titleEm}</em>
              </h3>
              <p>{current.lead}</p>
              <p>{current.body}</p>
              <div className="area-panel-meta">
                {current.meta.map(([l, v], i) => (
                  <div key={i} className="area-meta-item">
                    <div className="label">{l}</div>
                    <div className="value">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="section-cta on-dark">
          <a href="#book" className="btn btn-primary">
            {t('checkAvailability')}
            <Icon name="arrowRight" size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

window.AreaSection = AreaSection;
