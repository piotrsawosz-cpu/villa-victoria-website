// Section 6 - Reviews
const ReviewsSection = () => {
  useVVLang();
  const reviews = [
    {
      text: "Villa Victoria was perfect for our family of five. Our teenagers greatly enjoyed the hammock, and we all made great use of the beautiful pool and enjoyed the stunning views. The kitchen was well organized and stocked. We appreciated the location high on the hillside but still close enough to drive quickly into the center of town.",
      author: "Betsy",
      origin: "Chicago, Illinois",
      date: "July 2022",
      source: "Airbnb",
    },
    {
      text: "Beautiful property. Was close to everything, you can walk to town if needed. We really enjoyed the incredible views, comfortable beds and beautiful property. We will be back!",
      author: "Chelsea",
      origin: "Los Angeles, California",
      date: "August 2022",
      source: "Airbnb",
    },
    {
      text: "An incredible view of the bay makes this an exceptional place for a holiday. You can look down on the sea, and out across the mountains, from the pool and the hot tub, while also enjoying beautiful sunsets. The house itself has great modern appliances and a beautiful kitchen. There is really no reason to leave this house during a relaxing holiday, but Roses is just a 5 minute drive down the hill with lots of restaurants and shops. A great corner of the world.",
      author: "Stefan",
      origin: "11 years on Airbnb",
      date: "August 2022",
      source: "Airbnb",
      long: true,
    },
    {
      text: "The villa is beautiful. My family and I had an amazing time playing in the pool, sipping drinks on the terrace and admiring the breathtaking views. Everything we could think of was already taken care of. I cannot recommend staying here highly enough.",
      author: "Simon",
      origin: "14 years on Airbnb",
      date: "August 2017",
      source: "Airbnb",
    },
    {
      text: "Quality and hospitality above and beyond expectations. Unforgettable view on Roses Bay.",
      author: "Сергей",
      origin: "7 years on Airbnb",
      date: "August 2021",
      source: "Airbnb",
    },
    {
      text: "An incredible place; everything from the house to the garden and the view creates a sense of harmony. The owners have meticulously cared for every detail. The bedrooms are enormous, the beds comfortable, the bathrooms luxurious. A swimming pool, jacuzzi, and sauna &mdash; all with sea views. Peace and quiet, no curious neighbors. In short, paradise on earth.",
      author: "Natalia Dawydowa",
      origin: "Local Guide",
      date: "2 years ago",
      source: "Google",
      long: true,
    },
    {
      text: "A wonderful view, you can look down on Roses. Comfortable apartments, a wonderful terrace, full of sun. A swimming pool with views of the port, town, beach, and mountains.",
      author: "Magdalena Lach",
      origin: "Local Guide",
      date: "3 years ago",
      source: "Google",
    },
    {
      text: "Very beautiful and nice place. The hosts&rsquo; family is very friendly.",
      author: "Lorenzo Civaia",
      origin: "Italy",
      date: "4 years ago",
      source: "Google",
    },
    {
      text: "Nice way to spend your vacation in such a nice house. Very recommended.",
      author: "Nejar Al Junaydi",
      origin: "Google reviewer",
      date: "6 years ago",
      source: "Google",
    },
  ];

  return (
    <section className="reviews-section" id="reviews" data-screen-label="06 Reviews">
      <div className="container">
        <div className="reviews-head">
          <div>
            <div className="eyebrow">{t('reviewsEyebrow')}</div>
            <h2 style={{ fontFamily: "var(--iv-font-display)", fontWeight: 500, fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.05, margin: "14px 0 0", color: "var(--iv-ink-900)" }}>
              {t('reviewsHeadline1')} <em style={{ fontFamily: "var(--iv-font-editorial)", fontStyle: "italic", color: "var(--iv-sand-600)", fontWeight: 400 }}>{t('reviewsHeadline2')}</em>
            </h2>
          </div>
          <div className="reviews-stats">
            <div>
              <div className="stars-big">
                5.0
                <span style={{ display: 'inline-flex', gap: 2 }}>
                  {[0,1,2,3,4].map(i => <Icon key={i} name="starFilled" size={20} style={{ color: 'var(--iv-sand-500)' }}/>)}
                </span>
              </div>
              <div className="rating-meta">{t('reviewsMeta')}</div>
            </div>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">
                {[0,1,2,3,4].map(j => <Icon key={j} name="starFilled" size={14} style={{ color: 'var(--iv-sand-500)' }}/>)}
              </div>
              <div className={`review-text ${r.long ? 'long' : ''}`} dangerouslySetInnerHTML={{ __html: `&ldquo;${r.text}&rdquo;` }}/>
              <div className="review-meta">
                <div className="review-author">
                  {r.author}
                  <small>{r.origin} · {r.date}</small>
                </div>
                <div className="review-source">{r.source}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta on-sand">
          <a href="#book" className="btn btn-primary">
            {t('checkAvailability')}
            <Icon name="arrowRight" size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

window.ReviewsSection = ReviewsSection;
