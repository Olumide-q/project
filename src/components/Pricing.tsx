import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: 'per location/month',
      description: 'Perfect for small hotels and B&Bs',
      features: [
        'Up to 25 rooms',
        'Basic reservation management',
        'Guest check-in/out',
        'Payment processing',
        'Email support',
        'Mobile app access',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$89',
      period: 'per location/month',
      description: 'Ideal for mid-size hotels',
      features: [
        'Up to 100 rooms',
        'Advanced reservation system',
        'Revenue management',
        'Channel manager integration',
        'Priority support',
        'Custom reporting',
        'Staff management',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For hotel chains and large properties',
      features: [
        'Unlimited rooms',
        'Multi-property management',
        'Advanced analytics',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'White-label options'
      ],
      popular: false
    }
  ];

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-800 mb-6">
            Simple, Transparent
            <span className="text-coffee-500 block">Pricing</span>
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto">
            Choose the perfect plan for your hotel. All plans include a 30-day free trial 
            and can be upgraded or downgraded at any time.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-coffee-500 scale-105' : 'border border-coffee-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-coffee-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <header className="text-center mb-8">
                <h3 className="text-2xl font-bold text-coffee-800 mb-2">{plan.name}</h3>
                <p className="text-coffee-600 mb-4">{plan.description}</p>
                <div className="mb-4 ">
                  <span className="text-3xl font-bold text-coffee-700">{plan.price}</span>
                  <span className="text-coffee-500 ml-2">{plan.period}</span>
                </div>
              </header>

              <ul className="space-y-4 mb-8" role="list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-coffee-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-coffee-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToDemo}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-coffee-500 text-white hover:bg-coffee-600'
                    : 'bg-coffee-100 text-coffee-700 hover:bg-coffee-200'
                }`}
                aria-label={`Start free trial with ${plan.name} plan`}
              >
                Start Free Trial
              </button>
            </article>
          ))}
        </div>

        {/* Additional Info */}
        <aside className="mt-16 text-center">
          <div className="bg-coffee-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-coffee-800 mb-4">All Plans Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-coffee-600">
              <div>
                <strong>30-day free trial</strong><br />
                No credit card required
              </div>
              <div>
                <strong>Free data migration</strong><br />
                We'll move your data for free
              </div>
              <div>
                <strong>No setup fees</strong><br />
                Get started immediately
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Pricing;