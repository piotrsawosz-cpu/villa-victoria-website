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
  const current = active !== null ? activities[active] : null;

  const handleTabClick = (i) => {
    if (window.innerWidth <= 760) {
      setActive(prev => prev === i ? null : i);
    } else {
      setActive(i);
    }
  };

  const renderPanelContent = (act) => (
    <>
      <div className="area-panel-image">
        {act.type === 'video' ? (
          <video src={act.media} autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <img src={act.media} alt={t('areaTab_' + act.key)} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </div>
      <div className="area-panel-content">
        <span className="kicker">{act.kicker}</span>
        <h3>
          {t('areaTab_' + act.key)}{' '}
          <em>{act.titleEm}</em>
        </h3>
        <p>{act.lead}</p>
        <p>{act.body}</p>
        <div className="area-panel-meta">
          {act.meta.map(([l, v], idx) => (
            <div key={idx} className="area-meta-item">
              <div className="label">{l}</div>
              <div className="value">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

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
              <React.Fragment key={a.key}>
                <button
                  className={`area-tab ${active === i ? 'active' : ''}`}
                  onClick={() => handleTabClick(i)}
                  role="tab"
                  aria-selected={active === i}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                    <Icon name={a.icon} size={20} style={{ color: active === i ? 'var(--iv-sand-300)' : 'rgba(255,255,255,0.4)', flexShrink: 0 }}/>
                    {t('areaTab_' + a.key)}
                  </span>
                  <Icon name="arrowRight" size={18} className="arrow"/>
                </button>
                {active === i && (
                  <div className="area-panel area-panel--inline">
                    {renderPanelContent(current)}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="area-panel area-panel--desktop" key={current ? current.key : ''}>
            {current && renderPanelContent(current)}
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
