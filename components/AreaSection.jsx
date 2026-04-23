// Section 4 - The Area (i18n on shell; activity cards stay as rich English content)
const AreaSection = () => {
  useVVLang();
  const activities = [
    {
      key: 'watersports', icon: 'waves',
      title: 'Watersports school', titleEm: 'for the kids.', kicker: 'For families',
      lead: 'A ten-minute drive down the hill, the bay of Roses turns into a gentle classroom. Kids learn to sail, paddleboard, and kayak with instructors who have been teaching local children for two decades.',
      body: 'Multi-day courses run all summer. Parents tend to sit with a coffee on the terrace and watch from above.',
      meta: [['Age', '6+ years'], ['Season', 'June – September'], ['Distance', '5 min drive'], ['Book via', 'Reception hand-off']],
    },
    {
      key: 'sailing', icon: 'anchor',
      title: 'Sailing & motorboat', titleEm: 'trips.', kicker: 'On the water',
      lead: 'Charter a half-day on the water and drop anchor in the coves of Cap de Creus — places that can only be reached from the sea. Lunch on board, swim off the stern.',
      body: 'Skippered charters, or rent a small motorboat you can drive yourself with no license.',
      meta: [['Duration', '3h – full day'], ['Capacity', 'Up to 10'], ['Distance', '5 min to marina'], ['Good for', 'All ages']],
    },
    {
      key: 'fishing', icon: 'fish',
      title: 'Fishing', titleEm: 'trips.', kicker: 'Early mornings',
      lead: 'A local captain takes small groups out at first light. The kids remember the first fish they pull in more clearly than anything else from the week.',
      body: 'All gear provided. Bring a hat; the sun rises fast out here.',
      meta: [['Start', '6:00 – 7:00 AM'], ['Duration', '4 hours'], ['Level', 'Beginner friendly'], ['Season', 'All year']],
    },
    {
      key: 'diving', icon: 'waves',
      title: 'Scuba diving', titleEm: '& snorkeling.', kicker: 'Underwater',
      lead: "The Cap de Creus marine reserve is one of the Mediterranean's best-kept diving secrets. Caves, swim-throughs, and reliable visibility of 15+ metres.",
      body: 'PADI dive centres in Roses and Cadaqués run guided trips for certified divers and try-dives for first-timers.',
      meta: [['Level', 'Open water & up'], ['Try-dive', 'Age 10+'], ['Distance', '10 min drive'], ['Season', 'April – November']],
    },
    {
      key: 'hiking', icon: 'mountain',
      title: 'Hiking', titleEm: 'Cap de Creus.', kicker: 'On foot',
      lead: 'The coastal paths of the Cap de Creus national park start ten minutes from the front door. Short loops through olive groves, or full-day walks along the cliffs to hidden coves.',
      body: 'The GR-11 also ends here — a favourite with more serious walkers.',
      meta: [['Difficulty', 'Easy to moderate'], ['Length', '2 – 18 km loops'], ['Best time', 'Spring & autumn'], ['Nearest trail', '10 min drive']],
    },
    {
      key: 'sightseeing', icon: 'mapPin',
      title: 'Sightseeing', titleEm: '& nearby towns.', kicker: 'Day trips',
      lead: "Cadaqués, where Dalí painted. Figueres, where he lived. Girona's old town. Besalú's medieval bridge. Collioure over the border in France. All within an hour.",
      body: 'We leave a folder of our favourite itineraries — including the ones that skip the tourist spots entirely.',
      meta: [['Cadaqués', '25 min drive'], ['Figueres', '30 min'], ['Girona', '1 hour'], ['Barcelona', '1h 45']],
    },
    {
      key: 'beach', icon: 'waves',
      title: 'Beaches', titleEm: 'of all kinds.', kicker: 'Sand & rocks',
      lead: "Long family beaches with showers and chiringuitos, or tiny rocky calas you reach on foot. Platja de l'Almadrava is the closest — five minutes down the hill.",
      body: "A beach umbrella, chairs, and a cooler live in the villa's entrance cupboard.",
      meta: [['Closest beach', '5 min drive'], ['Best calas', 'Montjoi, Jóncols'], ['Kid-friendly', 'La Perola'], ['Beach club', 'Almadraba Park']],
    },
    {
      key: 'cycling', icon: 'bike',
      title: 'Cycling', titleEm: '& running.', kicker: 'On two wheels',
      lead: 'The Via Verda del Ferro i del Carbó cycling path runs through the Empordà plain. Flat, shaded, ending at a winery if you time it right.',
      body: 'Road cyclists come for the climbs up Cap de Creus — the views from the lighthouse make the legs worth it.',
      meta: [['Bike rental', 'In Roses, 5 min'], ['Best route', 'Via Verda, 15km'], ['Runners', 'Coast path 3–8km'], ['Road cycling', 'Cap de Creus loop']],
    },
    {
      key: 'golf', icon: 'golf',
      title: 'Golf', titleEm: 'by the sea.', kicker: 'On the green',
      lead: 'Empordà Golf and Peralada Golf Club are both within a 20-minute drive. Mediterranean greens, sea breezes, and a forgiving welcome for mixed-level groups.',
      body: 'We can arrange tee times and club hire in advance.',
      meta: [['Nearest course', 'Empordà Golf, 15 min'], ['Premium', 'Peralada, 20 min'], ['Holes', '18 & 9 available'], ['Lessons', 'Yes, on request']],
    },
    {
      key: 'food', icon: 'utensils',
      title: 'Food', titleEm: '& wine.', kicker: 'At the table',
      lead: "The Empordà is quietly one of Spain's great food regions. The Roca brothers in Girona. Compartir in Cadaqués. Village restaurants where the fish was swimming at lunchtime.",
      body: 'Empordà DO wines — dry whites, honest reds — are on most lists. We leave a bottle in the kitchen for your arrival.',
      meta: [['Michelin', '3 within 45 min'], ['Our favourite', 'Compartir, Cadaqués'], ['Local market', 'Tuesdays, Roses'], ['Winery visits', 'Perelada, Espelt']],
    },
  ];

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
                  {a.title}
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
                  <span style={{ fontFamily: "var(--iv-font-editorial)", fontStyle: "italic", fontSize: 18 }}>Photo: {current.title}</span>
                </div>
              </div>
            </div>
            <div className="area-panel-content">
              <span className="kicker">{current.kicker}</span>
              <h3>
                {current.title}{' '}
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
