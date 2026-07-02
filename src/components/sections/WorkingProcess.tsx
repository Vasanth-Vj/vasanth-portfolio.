import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DiscoverIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-accent-primary"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const DesignIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-accent-warm"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const DevelopIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-accent-primary"
  >
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const DeliverIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-accent-warm"
  >
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22 11 13 2 9Z" />
  </svg>
);

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your goals and user needs.',
    icon: <DiscoverIcon />,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create wireframes and high-fidelity designs.',
    icon: <DesignIcon />,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build fast, scalable and clean code.',
    icon: <DevelopIcon />,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Test, deploy and ensure long-term support.',
    icon: <DeliverIcon />,
  },
];

export const WorkingProcess: React.FC = () => {
  return (
    <Section
      id="process"
      className="relative py-space-16 lg:py-space-24 paper-texture overflow-visible"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-space-16 lg:mb-space-20">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
            My Process
          </span>
          <Heading
            level={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-space-4 font-serif"
          >
            A clear process. Every time.
          </Heading>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            I follow a transparent, highly interactive lifecycle that ensures your product is
            engineered on schedule, built for conversion, and designed with premium standards.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal connecting doodles for desktop */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 pointer-events-none z-0">
            <svg className="w-full h-8 text-accent-primary opacity-30 overflow-visible" fill="none">
              <motion.path
                d="M 10 10 Q 150 25 300 10 T 600 10"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group relative"
              >
                {/* Circle step wrapper */}
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white border border-border-muted group-hover:border-accent-primary/40 transition-colors duration-300 shadow-sm mb-space-6 z-10">
                  <div className="absolute inset-1 rounded-full bg-bg-secondary" />
                  {step.icon}

                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 bg-text-primary text-bg-primary text-[10px] font-mono font-bold px-2 py-0.5 rounded-full select-none shadow-xs border border-white/10">
                    {step.number}
                  </span>
                </div>

                {/* Connecting Arrow for mobile/tablet between elements */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-accent-primary/40 opacity-70">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-6 h-6 rotate-90"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <Heading
                  level={3}
                  className="text-xl font-bold text-text-primary mb-space-2 font-serif"
                >
                  {step.title}
                </Heading>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WorkingProcess;
