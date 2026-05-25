// Section 3 - Gallery (i18n)
const GallerySection = () => {
  useVVLang();
  const items = [
    { src: 'media/gallery/eagle-view.webp', cat: 'eagle', label: 'Eagle view · drone above the bay' },
    { src: 'media/gallery/pool-mosaic.webp', cat: 'pool', label: 'Pool mosaic · facing the sea' },
    { src: 'media/gallery/jacuzzi.webp', cat: 'pool', label: 'Jacuzzi at sunset' },
    { src: 'media/gallery/pool-loungers.webp', cat: 'pool', label: 'Loungers · marina view' },
    { src: 'media/gallery/pool-loungers-aperol.webp', cat: 'pool', label: 'Poolside loungers · marina view, aperitivo hour' },
    { src: 'media/gallery/pool-loungers-sunset.webp', cat: 'pool', label: 'Loungers at sunset · over the marina' },
    { src: 'media/gallery/pool-terrace.webp', cat: 'pool', label: 'Pool terrace' },
    { src: 'media/gallery/pool-breakfast.webp', cat: 'pool', label: 'Breakfast by the pool' },
    { src: 'media/gallery/terrace-daybed.webp', cat: 'pool', label: 'Top terrace · daybed at golden hour' },
    { src: 'media/gallery/bottom-terrace-hammock.webp', cat: 'pool', label: 'Bottom terrace · hammock with sea view' },
    { src: 'media/gallery/kitchen.webp', cat: 'kitchen', label: 'Kitchen · with dining view' },
    { src: 'media/gallery/kitchen-dining.webp', cat: 'kitchen', label: 'Dining room' },
    { src: 'media/gallery/bedroom1.webp', cat: 'bedroom1', label: 'Bedroom 1 · king, sea-view window' },
    { src: 'media/gallery/bathroom1.webp', cat: 'bedroom1', label: 'Bathroom 1 · blue & white tiles' },
    { src: 'media/gallery/bathroom1-alt.webp', cat: 'bedroom1', label: 'Bathroom 1 · orchid + walk-in shower' },
    { src: 'media/gallery/bedroom2.webp', cat: 'bedroom2', label: 'Bedroom 2 · king, textured walls' },
    { src: 'media/gallery/bathroom2.webp', cat: 'bedroom2', label: 'Bathroom 2 · orchid vanity' },
    { src: 'media/gallery/bedroom3.webp', cat: 'bedroom3', label: 'Bedroom 3 · king + pendants' },
    { src: 'media/gallery/bedroom3-alt.webp', cat: 'bedroom3', label: 'Bedroom 3 · twin setup' },
    { src: 'media/gallery/bathroom3.webp', cat: 'bedroom3', label: 'Bathroom 3 · freestanding bath' },
    { src: 'media/gallery/sauna.webp', cat: 'sauna', label: 'The sauna' },
    { src: 'media/gallery/bbq.webp', cat: 'bbq', label: 'BBQ terrace · arched ceiling' },
    { src: 'media/gallery/bbq-dining.webp', cat: 'bbq', label: 'BBQ area · indoor dining with hanging chair' },
    { src: 'media/gallery/cinema.webp', cat: 'cinema', label: 'Home cinema · green sofas' },
    { src: 'media/gallery/cinema-massage-chair.webp', cat: 'cinema', label: 'Cinema lounge · massage chair against the rock wall' },
    { src: 'media/gallery/living-fireplace.webp', cat: 'living', label: 'Living room · fireplace' },
    { src: 'media/gallery/living-chess.webp', cat: 'living', label: 'Living room · chess corner' },
    { src: 'media/gallery/hallway.webp', cat: 'living', label: 'Staircase' },
    { src: 'media/gallery/entrance.webp', cat: 'entrance', label: 'Entrance hallway' },
    { src: 'media/gallery/entrance-courtyard.webp', cat: 'entrance', label: 'Entrance courtyard · stone walls, potted lavender' },
    { src: 'media/gallery/entrance-driveway.webp', cat: 'entrance', label: 'Driveway · garage and shrine' },
    { src: 'media/gallery/garden-hammock.webp', cat: 'garden', label: 'Garden hammock · among the olive trees' },
    { src: 'media/gallery/garden-cactus.webp', cat: 'garden', label: 'Garden path · cactus & yucca' },
    { src: 'media/gallery/garden-villa-exterior.webp', cat: 'garden', label: 'Approaching the villa · from the garden' },
    { src: 'media/gallery/garden-marina-sunset.webp', cat: 'garden', label: 'Marina sunset · framed by olive branches' },
  ];

  const categories = [
    { key: 'all', label: t('catAll') },
    { key: 'pool', label: t('catPool') },
    { key: 'kitchen', label: t('catKitchen') },
    { key: 'bedroom1', label: t('catBedroom1') },
    { key: 'bedroom2', label: t('catBedroom2') },
    { key: 'bedroom3', label: t('catBedroom3') },
    { key: 'living', label: t('catLiving') },
    { key: 'entrance', label: t('catEntrance') },
    { key: 'garden', label: t('catGarden') },
    { key: 'sauna', label: t('catSauna') },
    { key: 'bbq', label: t('catBbq') },
    { key: 'cinema', label: t('catCinema') },
    { key: 'eagle', label: t('catEagle') },
  ];

  const [active, setActive] = React.useState('all');
  const filtered = active === 'all' ? items : items.filter(i => i.cat === active);

  const counts = {};
  items.forEach(i => { counts[i.cat] = (counts[i.cat] || 0) + 1; });
  counts.all = items.length;

  const [lbIndex, setLbIndex] = React.useState(null);

  const closeLb = () => setLbIndex(null);
  const prev = (e) => { e.stopPropagation(); setLbIndex(i => (i - 1 + filtered.length) % filtered.length); };
  const next = (e) => { e.stopPropagation(); setLbIndex(i => (i + 1) % filtered.length); };

  // Close lightbox when filter changes
  React.useEffect(() => { setLbIndex(null); }, [active]);

  // Keyboard navigation
  React.useEffect(() => {
    if (lbIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') setLbIndex(i => (i - 1 + filtered.length) % filtered.length);
      if (e.key === 'ArrowRight') setLbIndex(i => (i + 1) % filtered.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lbIndex, filtered.length]);

  // Body scroll lock
  React.useEffect(() => {
    document.body.style.overflow = lbIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lbIndex]);

  return (
    <section className="gallery-section" id="gallery" data-screen-label="03 Gallery">
      <div className="container">
        <div className="gallery-head">
          <div>
            <div className="eyebrow">{t('galleryEyebrow')}</div>
            <h2 style={{ fontFamily: "var(--iv-font-display)", fontWeight: 500, fontSize: "clamp(32px,3.8vw,52px)", lineHeight: 1.05, margin: "14px 0 0", color: "var(--iv-ink-900)" }}>
              {t('galleryHeadline1')} <em style={{ fontFamily: "var(--iv-font-editorial)", fontStyle: "italic", color: "var(--iv-sand-600)", fontWeight: 400 }}>{t('galleryHeadline2')}</em>
            </h2>
          </div>
        </div>
        <div className="gallery-filters" role="tablist">
          {categories.map(c => (
            <button
              key={c.key}
              className={`gallery-filter ${active === c.key ? 'active' : ''}`}
              onClick={() => setActive(c.key)}
              role="tab"
              aria-selected={active === c.key}
            >
              {c.label}<span className="count">({counts[c.key] || 0})</span>
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <figure key={`${active}-${i}`} className="gallery-tile" onClick={() => setLbIndex(i)} style={{ cursor: 'pointer' }}>
              <img src={item.src} alt={item.label} loading="lazy"/>
              <figcaption className="caption">{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="section-cta on-sand">
          <a href="#book" className="btn btn-primary">
            {t('checkAvailability')}
            <Icon name="arrowRight" size={16}/>
          </a>
        </div>
      </div>

      {lbIndex !== null && (
        <div className="lightbox" onClick={closeLb}>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <img src={filtered[lbIndex].src} alt={filtered[lbIndex].label} />
            <div className="lb-caption">
              <span>{filtered[lbIndex].label}</span>
              <span className="lb-counter">{lbIndex + 1} / {filtered.length}</span>
            </div>
          </div>
          <button className="lb-close" onClick={closeLb}>✕</button>
          <button className="lb-prev" onClick={prev}>←</button>
          <button className="lb-next" onClick={next}>→</button>
        </div>
      )}
    </section>
  );
};

window.GallerySection = GallerySection;
