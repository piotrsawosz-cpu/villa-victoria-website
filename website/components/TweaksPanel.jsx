// Tweaks panel
const TweaksPanel = () => {
  const [open, setOpen] = React.useState(false);
  const [tweaks, setTweaks] = React.useState(() => {
    // read from injected defaults
    return window.__TWEAK_DEFAULTS || {
      accent: '#9b8465',
      heroHeadlineStyle: 'Editorial',
      darkArea: true,
    };
  });

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--iv-sand-500', tweaks.accent);
    document.documentElement.style.setProperty('--iv-action', tweaks.accent);
  }, [tweaks.accent]);

  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  const accents = ['#9b8465', '#b5654a', '#6f7a4e', '#1a2042'];

  if (!open) return null;

  return (
    <div className={`tweaks-panel open`}>
      <div className="tweaks-head">
        <h3>Tweaks</h3>
        <button onClick={() => setOpen(false)} style={{ background: 'transparent', border: 0, fontSize: 20, cursor: 'pointer', color: 'var(--iv-ink-600)' }}>×</button>
      </div>
      <div className="tweaks-body">
        <div className="tweak-row">
          <label>Accent color</label>
          <div className="tweak-swatches">
            {accents.map(c => (
              <div
                key={c}
                className={`tweak-swatch ${tweaks.accent === c ? 'active' : ''}`}
                style={{ background: c }}
                onClick={() => update({ accent: c })}
              />
            ))}
          </div>
        </div>
        <div className="tweak-row">
          <label>Hero headline style</label>
          <select value={tweaks.heroHeadlineStyle} onChange={e => update({ heroHeadlineStyle: e.target.value })}>
            <option value="Editorial">Editorial (italic pull)</option>
            <option value="Classic">Classic (all Playfair)</option>
            <option value="Minimal">Minimal (one line)</option>
          </select>
        </div>
        <div className="tweak-row">
          <label style={{ color: 'var(--iv-ink-500)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0 }}>
            More tweaks unlock once you upload real photography &amp; confirm brand copy.
          </label>
        </div>
      </div>
    </div>
  );
};

window.TweaksPanel = TweaksPanel;
