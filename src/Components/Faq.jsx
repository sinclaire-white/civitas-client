const Faq = () => {
  const faqs = [
    {
      question: "How do I join an event?",
      answer:
        "Click the 'View Event' button on an event card, then click 'Join Event' on the event details page.",
    },
    {
      question: "Can I create my own events?",
      answer:
        "Yes, you can create events by signing in, navigating to the Create Event page, and filling out the required details.",
    },
    {
      question: "How do I know if an event is happening soon?",
      answer:
        "All upcoming events are listed on the Upcoming Events page with their dates clearly displayed.",
    },
    {
      question: "Can I participate in multiple events?",
      answer:
        "Yes, you can join as many events as you'd like, and they will all be listed on your Join Event page.",
    },
    {
      question: "What happens if an event is canceled or rescheduled?",
      answer:
        "The event creator can update or remove the event, and changes will reflect automatically on the Upcoming Events or Join Events page (if you have).",
    },
  ];

  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center text-primary">FAQ</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              tabIndex={0}
              className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box"
            >
              <input type="checkbox" className="peer" />
              <div className="text-lg font-medium collapse-title">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
