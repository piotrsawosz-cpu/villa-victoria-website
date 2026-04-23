// Icons - Lucide-style hairline SVG inline components
const Icon = ({ name, size = 24, className = "", style = {} }) => {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", ...style };
  const paths = {
    bed: <><path d="M3 7v10M21 11v6M3 17h18M3 11h18a2 2 0 0 0 0-4H3"/><path d="M6 11V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></>,
    bath: <><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.5 1v10M2 12h20M3 12v3a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3M10 7h.01"/></>,
    waves: <><path d="M2 6c2 0 2 1.5 4 1.5S8 6 10 6s2 1.5 4 1.5S16 6 18 6s2 1.5 4 1.5"/><path d="M2 12c2 0 2 1.5 4 1.5S8 12 10 12s2 1.5 4 1.5S16 12 18 12s2 1.5 4 1.5"/><path d="M2 18c2 0 2 1.5 4 1.5S8 18 10 18s2 1.5 4 1.5S16 18 18 18s2 1.5 4 1.5"/></>,
    pool: <><path d="M2 20c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M2 16c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M6 20V5a3 3 0 0 1 6 0M12 20V5a3 3 0 0 1 6 0M6 10h12M6 14h12"/></>,
    flame: <><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></>,
    sauna: <><rect x="3" y="5" width="18" height="14"/><path d="M7 9v6M12 9v6M17 9v6M3 12h18"/></>,
    chef: <><path d="M12 3a4 4 0 0 0-4 4c0 1 .4 1.9 1 2.6V11h6v-1.4c.6-.7 1-1.6 1-2.6a4 4 0 0 0-4-4z"/><path d="M7 11v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9"/></>,
    film: <><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5"/></>,
    tree: <><path d="M12 2a5 5 0 0 0-5 5c0 1.5.5 2.8 1.3 3.8A5 5 0 0 0 5 15a5 5 0 0 0 7 4.5A5 5 0 0 0 19 15a5 5 0 0 0-3.3-4.2A5 5 0 0 0 17 7a5 5 0 0 0-5-5zM12 19v3"/></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    arrowRight: <><path d="M5 12h14M12 5l7 7-7 7"/></>,
    arrowLeft: <><path d="M19 12H5M12 19l-7-7 7-7"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
    message: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    star: <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    starFilled: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>,
    mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></>,
    bike: <><circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="M6 17 11 6h4M13 6l2 6h3"/></>,
    mountain: <><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></>,
    anchor: <><circle cx="12" cy="5" r="3"/><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/></>,
    fish: <><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6z"/><path d="M18 12v.5M16 16l2-2M22 8l-4 4 4 4M12 18v2M12 6V4"/></>,
    golf: <><path d="M12 22v-8M12 3 9 4l3 1.5L15 4zM5 22h14"/></>,
    utensils: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-3 4.5V14c0 .6.4 1 1 1h2z"/></>,
    running: <><circle cx="13" cy="4" r="2"/><path d="m5 22 5-8 3 5 4-4M8 14l5-5 3 3M17 7h4"/></>,
    wind: <><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/></>,
    chevronDown: <polyline points="6 9 12 15 18 9"/>,
    chevronRight: <polyline points="9 18 15 12 9 6"/>,
    check: <polyline points="20 6 9 17 4 12"/>,
    globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>,
  };
  return (
    <svg viewBox="0 0 24 24" style={s} className={className} aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
};

window.Icon = Icon;
