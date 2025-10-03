import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly can we get started with HotelPro?',
      answer: 'Most hotels are up and running within 24-48 hours. Our dedicated implementation team will handle data migration, staff training, and system configuration to ensure a smooth transition.'
    },
    {
      question: 'Does HotelPro integrate with our existing systems?',
      answer: 'Yes, HotelPro integrates with 100+ popular hotel management tools including PMS systems, channel managers, payment processors, and booking engines. Our API-first approach ensures seamless connectivity.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support through multiple channels including live chat, phone, and email. Each customer gets a dedicated success manager and access to our comprehensive knowledge base and training resources.'
    },
    {
      question: 'Is my data secure with HotelPro?',
      answer: 'Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR, PCI DSS, and other industry standards. Your data is hosted on secure, redundant servers with daily backups.'
    },
    {
      question: 'Can I customize the system for my hotel\'s needs?',
      answer: 'Yes, HotelPro is highly customizable. You can configure workflows, create custom fields, set up automated rules, and even integrate custom modules. Our team can help with advanced customizations if needed.'
    },
    {
      question: 'What happens if I need to cancel my subscription?',
      answer: 'You can cancel anytime with 30 days notice. We provide full data export capabilities so you can easily migrate to another system. No hidden fees or long-term contracts required.'
    },
    {
      question: 'Do you offer training for our staff?',
      answer: 'Yes, we provide comprehensive training including live onboarding sessions, video tutorials, documentation, and ongoing support. We ensure your entire team is comfortable using the system before go-live.'
    },
    {
      question: 'How does pricing work for multiple properties?',
      answer: 'We offer volume discounts for hotel groups and chains. Each property can be managed separately or together from a central dashboard. Contact us for custom pricing based on your specific needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-coffee-50">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-800 mb-6">
            Frequently Asked
            <span className="text-coffee-500 block">Questions</span>
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            our customers ask about HotelPro.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-md mb-4 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-coffee-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-coffee-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-coffee-500 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-coffee-500 flex-shrink-0" aria-hidden="true" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-6">
                  <p className="text-coffee-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <footer className="text-center mt-16">
          <p className="text-coffee-600 mb-6">Still have questions?</p>
          <button 
            onClick={scrollToContact}
            className="bg-coffee-500 text-white px-8 py-3 rounded-full hover:bg-coffee-600 transition-colors font-semibold"
            aria-label="Contact our support team for more help"
          >
            Contact Our Support Team
          </button>
        </footer>
      </div>
    </section>
  );
};

export default FAQ;