import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import {Link} from 'react-router'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'About', 'Contact', 'Properties'];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/Logo.jpg" alt="NestFinder Pro" className="h-7 w-7 object-contain" />
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#1A3C34',
              }}
            >
              NestFinder Pro
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative py-1 transition-all duration-300 hover:text-[#1A3C34] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#1A3C34] after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_10px_#1A3C34,0_0_20px_#1A3C34]"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '100%',
                  color: '#838585',
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
              Login
            </Link>
            <Link to="/sign-up" className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}