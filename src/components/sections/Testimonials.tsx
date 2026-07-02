import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  color: string;
  tilt: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Vasanthakumar delivered our SaaS MVP two weeks ahead of schedule. The code was exceptionally clean, modular, and the site loads almost instantly.',
    author: 'Sarah Jenkins',
    role: 'Founder',
    company: 'Apex Analytics',
    color: 'bg-[#FEF9C3]', // Post-it Yellow
    tilt: -2,
  },
  {
    quote:
      'The new e-commerce storefront increased our conversion rate by 34%. His attention to detail in micro-interactions and animations is truly world-class.',
    author: 'David Miller',
    role: 'Product Lead',
    company: 'GrowthFlow',
    color: 'bg-[#FFedd5]', // Soft Orange Paper
    tilt: 1.5,
  },
  {
    quote:
      "Exceptional communication and high-fidelity React execution. Vasanthakumar didn't just write code, he optimized our entire UX. A true design-minded engineer.",
    author: 'Elena Rostova',
    role: 'Creative Director',
    company: 'PixelCraft Agency',
    color: 'bg-[#dcfce7]', // Soft Mint Green Paper
    tilt: -1.2,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      className="relative py-space-16 lg:py-space-24 paper-texture overflow-visible"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-space-16 lg:mb-space-20">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
            Endorsements
          </span>
          <Heading
            level={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-space-4 font-serif"
          >
            What clients say.
          </Heading>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Kind words from startups, founders, and collaborators. Real feedback on speed, quality,
            and collaboration.
          </p>
        </div>

        {/* Paper Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-8 lg:gap-space-10">
          {testimonials.map((item) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, rotate: item.tilt, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              className={`${item.color} border border-black/5 p-space-8 rounded-xs shadow-md hover:shadow-lg relative text-left cursor-pointer flex flex-col justify-between aspect-square max-w-[340px] mx-auto md:max-w-none`}
            >
              {/* Pin emoji/icon at top center */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-2xl select-none z-10 filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                📌
              </div>

              {/* Quote text */}
              <p className="font-serif italic text-text-primary text-sm sm:text-base leading-relaxed mt-2">
                "{item.quote}"
              </p>

              {/* Author details */}
              <div className="mt-6 border-t border-black/5 pt-4 flex flex-col">
                <span className="font-handwritten text-text-primary text-2xl font-bold">
                  {item.author}
                </span>
                <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider mt-0.5">
                  {item.role}, {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
