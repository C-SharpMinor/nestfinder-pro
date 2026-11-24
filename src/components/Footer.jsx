import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you! Subscribed with ${email}`);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand + Subscribe */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/Vector.svg"
                alt="NestFinder Pro"
                className="h-7 w-7 object-contain"
              />
              <h3 className="text-xl font-bold">NestFinder Pro</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted partner in finding premium properties across Nigeria. We connect buyers, sellers and renters with verified listings
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
  <input
    type="email"
    placeholder="Enter your email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="flex-1 px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white text-sm w-full"
    required
  />
  <button
    type="submit"
    className="bg-[#1A4F48] hover:bg-[#0D3B36] px-5 py-3 rounded-lg text-sm font-medium transition whitespace-nowrap"
  >
    Subscribe
  </button>
</form>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-sm mb-5 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {['HOME', 'ABOUT', 'CONTACT', 'PROPERTIES'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm mb-5 tracking-wide">PROPERTY</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {['HOUSES', 'APARTMENT', 'VILLAS', 'DUPLEX'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm mb-5 tracking-wide">CONTACT</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 text-gray-400" />
                <span>123 Prestige Drive,<br />Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gray-400" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <span>info@realauto.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}