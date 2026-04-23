// Section 7 - FAQ
const FaqSection = () => {
  useVVLang();
  const faqs = [
    {
      q: "What is the minimum stay?",
      a: [
        "Seven nights. We found that a week is just the right amount of time for a family to really settle in &mdash; you have enough time to explore the area, and enough time to do absolutely nothing.",
      ],
    },
    {
      q: "How many people can the villa sleep?",
      a: [
        "Up to eight guests across three bedrooms. Two rooms each have a king bed; the third has a king bed plus a sofa bed. Every bedroom has its own full bathroom.",
      ],
    },
    {
      q: "What does it cost per week?",
      a: [
        "€1,000 per night for the whole villa &mdash; so €7,000 for a standard 7-night stay. No per-person charges; the price is the same whether you&rsquo;re a couple or a family of eight.",
      ],
    },
    {
      q: "Where exactly is Villa Victoria?",
      a: [
        "High on the hillside above the town of Roses, in Catalonia, Spain &mdash; on the Costa Brava, roughly 1h 45 from Barcelona and 30 minutes from the French border.",
      ],
    },
    {
      q: "How do we get there?",
      a: [
        "The easiest way is to drive directly. If you&rsquo;re flying in from another country, most guests fly into Barcelona and rent a car there.",
        "Alternatively, you can take a train to Figueres, and from Figueres grab a bus, a taxi, or rent a car for the last 25 minutes to Roses.",
      ],
    },
    {
      q: "Is the villa family-friendly?",
      a: [
        "Yes &mdash; this was our family home with three boys, and it&rsquo;s built for families. Pool, garden with a hammock, home cinema, and a BBQ terrace. Roses town is a 5-minute drive for restaurants, ice cream, and the beach.",
      ],
    },
    {
      q: "What&rsquo;s included in the villa?",
      a: [
        "A fully equipped kitchen, three full bathrooms, private pool, jacuzzi with sea views, sauna, home cinema, BBQ terrace, garden, and panoramic views over the bay of Roses from nearly every room.",
      ],
    },
    {
      q: "How do I book?",
      a: [
        "Send me a message on WhatsApp (+1 786 658 7698), email (VillaVictoriaSpain@gmail.com), or give me a call. I&rsquo;ll confirm the dates, share the booking details, and walk you through everything before you arrive.",
      ],
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section className="faq-section" id="faq" data-screen-label="07 FAQ">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-head">
            <div className="eyebrow">{t('faqEyebrow')}</div>
            <h2>{t('faqHeadline1')} <em>{t('faqHeadline2')}</em></h2>
            <p>{t('faqLead')}</p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span dangerouslySetInnerHTML={{ __html: f.q }}/>
                  <span className="faq-toggle" aria-hidden="true"/>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    {f.a.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p }}/>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-cta">
          <a href="#book" className="btn btn-primary">
            {t('checkAvailability')}
            <Icon name="arrowRight" size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

window.FaqSection = FaqSection;
