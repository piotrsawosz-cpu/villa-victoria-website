// Hero section with scroll-scrubbed IMAGE SEQUENCE on canvas.
// Preloads 138 jpg frames, draws current frame to canvas on scroll.
const HERO_FRAME_COUNT = 138;
const HERO_FRAME_PATH = (i) => `media/hero-frames/${String(i + 1).padStart(3, '0')}.jpg`;

const Hero = () => {
  useVVLang();
  const canvasRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const framesRef = React.useRef([]);
  const [loadedCount, setLoadedCount] = React.useState(0);
  const [firstReady, setFirstReady] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    const frames = [];
    framesRef.current = frames;
    let loaded = 0;
    let drawnIndex = -1;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    const drawFrame = (idx) => {
      const img = frames[idx];
      if (!img || !img.complete || !img.naturalWidth) return false;
      // cover-fit
      const cw = canvas.width, ch = canvas.height;
      const iw = img.naturalWidth, ih = img.naturalHeight;
      const scale = Math.max(cw / iw, ch / ih);
      const w = iw * scale, h = ih * scale;
      const x = (cw - w) / 2, y = (ch - h) / 2;
      ctx.drawImage(img, x, y, w, h);
      drawnIndex = idx;
      return true;
    };

    const render = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = scrollable > 0 ? Math.max(0, Math.min(1, -rect.top / scrollable)) : 0;
      const idx = Math.min(HERO_FRAME_COUNT - 1, Math.round(progress * (HERO_FRAME_COUNT - 1)));
      if (idx !== drawnIndex) {
        // try target frame; fall back to nearest loaded frame
        if (!drawFrame(idx)) {
          // find nearest loaded frame
          for (let r = 1; r < HERO_FRAME_COUNT; r++) {
            if (idx - r >= 0 && drawFrame(idx - r)) break;
            if (idx + r < HERO_FRAME_COUNT && drawFrame(idx + r)) break;
          }
        }
      }
      // Fade text out as user scrolls down. Fully visible 0–15%, fade to 0 by 45%.
      if (contentRef.current) {
        const fadeStart = 0.15, fadeEnd = 0.45;
        const t = (progress - fadeStart) / (fadeEnd - fadeStart);
        const opacity = Math.max(0, Math.min(1, 1 - t));
        contentRef.current.style.opacity = opacity;
        contentRef.current.style.transform = `translateY(${(1 - opacity) * -24}px)`;
        contentRef.current.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
      }
    };

    let rafScheduled = false;
    const kick = () => {
      if (rafScheduled) return;
      rafScheduled = true;
      requestAnimationFrame(() => { rafScheduled = false; render(); });
    };

    sizeCanvas();

    // Begin preloading frames (parallel, but kick off in order)
    for (let i = 0; i < HERO_FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.loading = 'eager';
      img.src = HERO_FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (i === 0) { setFirstReady(true); render(); }
        // Re-render if this is the frame we currently want (fills in missing frame)
        if (loaded % 8 === 0 || loaded === HERO_FRAME_COUNT) kick();
      };
      img.onerror = () => { loaded++; setLoadedCount(loaded); };
      frames[i] = img;
    }

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', () => { sizeCanvas(); render(); });

    return () => {
      window.removeEventListener('scroll', kick);
    };
  }, []);

  const pct = Math.round((loadedCount / HERO_FRAME_COUNT) * 100);

  return (
    <section ref={containerRef} className="hero-scroll-container" data-screen-label="01 Hero">
      <div className="hero-sticky">
        <canvas
          ref={canvasRef}
          className="hero-canvas"
          style={{ opacity: firstReady ? 1 : 0, transition: 'opacity 600ms ease' }}
        />
        {!firstReady && (
          <div className="hero-loader">
            <div className="hero-loader-label">{t('loading')} · {pct}%</div>
          </div>
        )}
        <div className="hero-scrim"/>
        <div ref={contentRef} className="hero-content">
          <div className="hero-eyebrow">{t('heroEyebrow')}</div>
          <h1 className="hero-headline">
            {t('heroHeadline1')}<br/>
            <em>{t('heroHeadline2')}</em>
          </h1>
          <p className="hero-sub">{t('heroSub')}</p>
          <div className="hero-ctas">
            <a href="#book" className="btn btn-primary">{t('checkAvailability')}</a>
            <a href="#house" className="btn btn-outline-light">{t('heroCtaSecondary')}</a>
          </div>
        </div>
        <div className="scroll-hint">{t('scroll')}</div>
      </div>
    </section>
  );
};

window.Hero = Hero;
