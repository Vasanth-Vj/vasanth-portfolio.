import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  tilt: number;
}

const HandDrawBrowser: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-accent-primary"
  >
    <path d="M3 5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
    <path d="M3 9h18" />
    <path d="M6 6h.01" />
    <path d="M9 6h.01" />
    <path d="M12 6h.01" />
  </svg>
);

const HandDrawCloud: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-accent-primary"
  >
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.07-1.23.2A6 6 0 0 0 3.5 14.5c0 2.5 2 4.5 4.5 4.5" />
    <path d="M12 12v7" />
    <path d="M9 16l3 3 3-3" />
  </svg>
);

const HandDrawCart: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-accent-primary"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const HandDrawDesign: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-accent-primary"
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M12 8A4 4 0 1 0 12 16A4 4 0 1 0 12 8Z" />
    <path d="M6 12h2" />
    <path d="M16 12h2" />
    <path d="M12 6v2" />
    <path d="M12 16v2" />
  </svg>
);

const HandDrawPerformance: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-accent-primary"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const services: ServiceItem[] = [
  {
    title: 'Web Applications',
    description: 'High-performance web apps built with modern stacks (React, Vite, Next.js).',
    icon: <HandDrawBrowser />,
    tilt: -1.5,
  },
  {
    title: 'SaaS Development',
    description: 'Scalable SaaS products engineered for growth, usability, and speed.',
    icon: <HandDrawCloud />,
    tilt: 1.2,
  },
  {
    title: 'E-commerce',
    description: 'Conversion-focused stores designed to sell more and load instantly.',
    icon: <HandDrawCart />,
    tilt: -0.8,
  },
  {
    title: 'UI/UX & Design',
    description: 'Clean, user-friendly layouts and high-end design systems that look premium.',
    icon: <HandDrawDesign />,
    tilt: 1.5,
  },
  {
    title: 'Performance Optimization',
    description: 'Speed optimization, bundle splitting, and near-perfect Lighthouse scores.',
    icon: <HandDrawPerformance />,
    tilt: -1,
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="relative py-space-16 lg:py-space-24 paper-texture">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 items-start">
          {/* Left Column: Heading & Callout */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:sticky lg:top-28">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
              What I Do
            </span>
            <Heading
              level={2}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-space-6 font-serif leading-tight"
            >
              Services that drive results, not just code.
            </Heading>
            <p className="text-text-secondary text-sm sm:text-base mb-space-8 leading-relaxed">
              I specialize in creating clean, fast, and interactive digital interfaces. My focus is
              on building interfaces that are not only visual masterpieces but also run efficiently
              and drive business growth.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors duration-150 uppercase tracking-widest"
            >
              Explore All Services{' '}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-150"
              />
            </a>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-space-6">
            {services.map((item) => (
              <motion.div
                key={item.title}
                initial={{ rotate: item.tilt }}
                whileHover={{ rotate: 0, y: -8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="bg-white border border-border-muted p-space-6 sm:p-space-8 rounded-lg shadow-sm flex flex-col items-start text-left cursor-pointer transition-shadow hover:shadow-md"
              >
                {/* Icon Container with hand-drawn backdrop feel */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-bg-secondary border border-border-muted mb-space-6 shadow-xs">
                  {item.icon}
                </div>

                {/* Service Title */}
                <Heading
                  level={3}
                  className="text-lg md:text-xl font-bold text-text-primary mb-space-2 font-serif"
                >
                  {item.title}
                </Heading>

                {/* Service Description */}
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
