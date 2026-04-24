const ical = require('node-ical');

module.exports = async (req, res) => {
  const icalUrl = process.env.GOOGLE_CALENDAR_ICAL_URL;

  if (!icalUrl) {
    res.status(500).json({ error: 'GOOGLE_CALENDAR_ICAL_URL not set' });
    return;
  }

  try {
    const events = await ical.async.fromURL(icalUrl);
    const bookedRanges = [];

    for (const event of Object.values(events)) {
      if (event.type !== 'VEVENT' || !event.start || !event.end) continue;

      const toISO = (d) => {
        const date = new Date(d);
        // All-day events from Google Calendar have rrule-less dates — use local midnight
        return date.toISOString().slice(0, 10);
      };

      bookedRanges.push({ start: toISO(event.start), end: toISO(event.end) });
    }

    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ bookedRanges });
  } catch (err) {
    console.error('Calendar fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch calendar data' });
  }
};
