import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { springPresets } from '../../animations/springPresets';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border-muted bg-bg-primary/80 backdrop-blur-md py-space-3'
          : 'bg-transparent py-space-6'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo & Availability Status */}
          <a href="#" className="flex items-center gap-space-3 group">
            <span className="font-mono text-base font-bold tracking-tight text-text-primary group-hover:text-accent-primary transition-colors duration-150">
              Vasanthakumar
            </span>
            <Badge variant="success" size="sm" dot className="hidden sm:inline-flex">
              Available
            </Badge>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-space-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              rightIcon={<ArrowRight size={14} />}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text-primary p-space-1 outline-none focus:ring-2 focus:ring-accent-primary/20 rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 top-[60px] z-30 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={springPresets.drawerSlide}
              className="fixed right-0 top-[60px] bottom-0 w-4/5 max-w-sm z-30 bg-bg-secondary border-l border-border-muted p-space-6 flex flex-col justify-between md:hidden"
            >
              <ul className="flex flex-col gap-space-6 mt-space-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors duration-150 block py-space-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-space-4 pb-space-8 border-t border-border-muted pt-space-6">
                <Badge variant="success" size="md" dot className="self-start">
                  Accepting Projects
                </Badge>
                <Button
                  variant="primary"
                  fullWidth
                  href="#contact"
                  onClick={closeMenu}
                  rightIcon={<ArrowRight size={16} />}
                >
                  Let's Talk
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
