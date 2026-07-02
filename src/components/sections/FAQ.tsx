import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is your typical timeline for a custom landing page?',
    answer:
      'Most custom landing pages are developed, optimized, and deployed live within 7 to 14 business days, depending on design complexity and integration requirements.',
  },
  {
    question: 'Can you work with my design team’s Figma files?',
    answer:
      'Yes. I work closely with designers and agencies, translating Figma mockups into pixel-perfect React and Tailwind code while maintaining strict design fidelity.',
  },
  {
    question: 'What happens after the website is launched?',
    answer:
      'I offer website maintenance services for ongoing updates, security audits, and content changes. For every launch, I also provide a walk-through video explaining how to manage minor updates yourself.',
  },
  {
    question: 'How do you handle website performance and speed?',
    answer:
      'By writing clean, semantic HTML/JS, utilizing Vite’s asset optimization, compressing media assets, and deploying on global CDNs like Vercel. I target 95%+ Lighthouse performance scores.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      className="relative py-space-16 lg:py-space-24 bg-bg-secondary/20 overflow-hidden"
    >
      {/* Background soft ambient halo */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-primary/2 blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-start">
          {/* Left Column: Heading and Sub-copy (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-[120px]">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
              Support
            </span>
            <Heading level={2} className="mb-space-4">
              Frequently Asked Questions.
            </Heading>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-space-6 max-w-md">
              Answers to common questions regarding timelines, Figma files, and delivery. If you
              have a question that isn't answered here, feel free to send a message directly through
              the contact form.
            </p>

            {/* SLA indicator */}
            <div className="flex items-center gap-space-3 py-space-3 px-space-4 rounded-lg bg-bg-secondary/40 border border-border-muted/50 font-mono text-xs text-text-secondary">
              <MessageSquare size={14} className="text-accent-primary" />
              <span>Typical response time: &lt; 4 hours</span>
            </div>
          </div>

          {/* Right Column: Accordion Items (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col gap-space-4 w-full">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Card
                  key={idx}
                  glass
                  padding="none"
                  className="border border-border-muted/80 w-full overflow-hidden transition-colors duration-150"
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="flex justify-between items-center w-full p-space-6 text-left focus:outline-none hover:bg-bg-primary/20 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-text-primary text-sm sm:text-base pr-space-4 leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-bg-secondary border border-border-muted text-text-secondary"
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {/* Accordion Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-space-6 pb-space-6 border-t border-border-muted/30 pt-space-4">
                          <p className="text-[13px] sm:text-[14px] text-text-secondary leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
