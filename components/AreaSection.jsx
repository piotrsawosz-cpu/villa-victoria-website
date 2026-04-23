// Section 4 - The Area
const AreaSection = () => {
  const lang = useVVLang();

  const staticActivities = [
    { key: 'watersports', icon: 'waves' },
    { key: 'sailing',     icon: 'anchor' },
    { key: 'fishing',     icon: 'fish' },
    { key: 'diving',      icon: 'waves' },
    { key: 'hiking',      icon: 'mountain' },
    { key: 'sightseeing', icon: 'mapPin' },
    { key: 'beach',       icon: 'waves' },
    { key: 'cycling',     icon: 'bike' },
    { key: 'golf',        icon: 'golf' },
    { key: 'food',        icon: 'utensils' },
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
              <div className="placeholder" style={{ background: 'linear-gradient(135deg, var(--iv-ink-700), var(--iv-ink-800))', color: 'var(--iv-sand-300)', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <Icon name={current.icon} size={48} style={{ color: 'var(--iv-sand-300)', opacity: 0.7 }}/>
                  <span style={{ fontFamily: "var(--iv-font-editorial)", fontStyle: "italic", fontSize: 18 }}>Photo: {t('areaTab_' + current.key)}</span>
                </div>
              </div>
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
