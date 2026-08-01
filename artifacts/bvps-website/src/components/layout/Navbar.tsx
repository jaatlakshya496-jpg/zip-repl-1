import { useState, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

const admissionsDropdown = [
  { name: 'Overview', path: '/admissions' },
  { name: 'Fee Structure', path: '/fee-structure' },
  { name: 'Application Form', path: '/application' },
  { name: 'Interview & Interaction', path: '/interview' },
  { name: 'School Timing', path: '/school-timing' },
  { name: 'Enrollment', path: '/enrollment' },
  { name: 'Streams (Class 11–12)', path: '/streams' },
  { name: "Principal's Message", path: '/principal-message' },
];

const admissionsPaths = admissionsDropdown.map(i => i.path);

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useState(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  // Close mobile menu on route change
  useState(() => {
    setMobileMenuOpen(false);
    setMobileAdmissionsOpen(false);
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isAdmissionsActive = admissionsPaths.includes(location);

  function openDropdown() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }
  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-background py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/school-logo.png" alt="BVPS Kalayat" className="h-12 w-auto rounded-lg object-cover" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none text-primary">BVPS</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Kalayat</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location === link.path ? 'text-primary border-b-2 border-secondary pb-1' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Admissions dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary ${
                  isAdmissionsActive ? 'text-primary border-b-2 border-secondary pb-1' : 'text-muted-foreground'
                }`}
              >
                Admissions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-border py-2 z-50"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {admissionsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-secondary/10 hover:text-secondary ${
                        location === item.path ? 'text-secondary font-semibold bg-secondary/5' : 'text-muted-foreground'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/application"
              className="inline-flex items-center justify-center h-10 px-6 bg-secondary text-primary hover:bg-secondary/90 font-semibold rounded-full text-sm transition-colors"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg py-4 px-4 flex flex-col gap-1 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-md text-base font-medium ${
                location === link.path ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile admissions accordion */}
          <button
            onClick={() => setMobileAdmissionsOpen(!mobileAdmissionsOpen)}
            className={`flex items-center justify-between w-full px-4 py-2.5 rounded-md text-base font-medium ${
              isAdmissionsActive ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:bg-gray-50'
            }`}
          >
            Admissions
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileAdmissionsOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileAdmissionsOpen && (
            <div className="ml-4 flex flex-col gap-1 border-l-2 border-secondary/30 pl-3">
              {admissionsDropdown.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location === item.path ? 'text-secondary font-semibold' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          <div className="px-4 pt-2">
            <Link
              href="/application"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center h-10 bg-secondary text-primary hover:bg-secondary/90 font-semibold rounded-md text-sm transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
