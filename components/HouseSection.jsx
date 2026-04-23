// Section 2 - The House (i18n)
const HouseSection = () => {
  useVVLang();
  const stats = [
    { icon: 'bed', label: t('statSleeps'), value: t('statSleepsV') },
    { icon: 'bed', label: t('statBedrooms'), value: t('statBedroomsV') },
    { icon: 'bath', label: t('statBathrooms'), value: t('statBathroomsV') },
    { icon: 'eye', label: t('statViews'), value: t('statViewsV') },
    { icon: 'pool', label: t('statOutdoor'), value: t('statOutdoorV') },
    { icon: 'sauna', label: t('statWellness'), value: t('statWellnessV') },
    { icon: 'chef', label: t('statKitchen'), value: t('statKitchenV') },
    { icon: 'flame', label: t('statDining'), value: t('statDiningV') },
    { icon: 'film', label: t('statIndoors'), value: t('statIndoorsV') },
  ];

  return (
    <section className="house-section" id="house" data-screen-label="02 The House">
      <div className="container">
        <div className="house-intro">
          <div className="house-intro-left">
            <div className="eyebrow">{t('houseEyebrow')}</div>
            <h2 className="house-headline">{t('houseHeadline1')}<br/><em>{t('houseHeadline2')}</em></h2>
          </div>
          <div className="house-intro-right">
            <p className="lead">{t('houseLead')}</p>
          </div>
        </div>

        <div className="house-details">
          <div className="house-details-left">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div className="stat" key={i}>
                  <Icon name={s.icon} size={26} style={{ color: 'var(--iv-sand-600)' }}/>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="house-details-right">
            <div className="map-wrap">
              <iframe
                title="Villa Victoria location"
                src="https://maps.google.com/maps?q=753P%2BV2+Roses,+Spain&output=embed&z=16"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-caption">
                <div className="place">
                  Villa Victoria
                  <small>{t('mapAddress')}</small>
                </div>
                <a href="https://www.google.com/maps/place/753P%2BV2+Roses,+Spain" target="_blank" rel="noopener">
                  {t('openInMaps')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="house-cta">
          <a href="#book" className="btn btn-primary">
            {t('checkAvailability')}
            <Icon name="arrowRight" size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

window.HouseSection = HouseSection;
