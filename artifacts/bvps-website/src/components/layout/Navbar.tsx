import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-background py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/school-logo.png"
              alt="BVPS Kalayat"
              className="h-12 w-auto rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none text-primary">BVPS</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Kalayat</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location === link.path 
                    ? 'text-primary border-b-2 border-secondary pb-1' 
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/admissions"
              className="inline-flex items-center justify-center h-10 px-6 bg-secondary text-primary hover:bg-secondary/90 font-semibold rounded-full text-sm transition-colors"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`block px-4 py-2 rounded-md text-base font-medium ${
                location === link.path 
                  ? 'bg-primary/5 text-primary' 
                  : 'text-muted-foreground hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-2">
            <Link 
              href="/admissions"
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
