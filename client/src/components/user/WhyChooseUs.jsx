// src/components/user/WhyChooseUs.jsx
import { FaAward, FaHandshake, FaMoneyCheckAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaAward size={28} className="text-blazeOrange" />,
      title: 'Wide Range of Brands',
      description:
        'Explore a variety of electronic brands under one roof, offering new and used products at the best prices.',
      bg: 'bg-blazeOrange/10',
    },
    {
      icon: <FaHandshake size={28} className="text-blazeOrange" />,
      title: 'Trusted by Customers',
      description:
        'Our platform eliminates middlemen by connecting buyers directly with sellers and local shops.',
      bg: 'bg-blazeOrange/10',
    },
    {
      icon: <FaMoneyCheckAlt size={28} className="text-blazeOrange" />,
      title: 'Direct & Secure Deals',
      description:
        'Experience quick and secure transactions without commissions or hidden charges.',
      bg: 'bg-blazeOrange/10',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-lightGray text-darkBlack">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md ${feature.bg} transition-transform hover:scale-105`}
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-white shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-lightBlack">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
