import React from 'react';
import { Monitor, Gauge, Layers } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';

interface ServiceItem {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: 'Frontend Development',
    problem: 'Outdated, slow, or unresponsive interfaces causing high visitor bounce rates.',
    solution:
      'Premium, custom React & TypeScript architectures built with polished micro-interactions.',
    outcome: 'Increased session durations, reduced bounce rates, and elevated brand credibility.',
    icon: <Monitor className="w-6 h-6 text-accent-primary" />,
  },
  {
    title: 'Performance Engineering',
    problem: 'Heavy bundles, slow loading times, and bad layout shifts hurting Google SEO ranking.',
    solution: 'Deep bundle profiling, lazy loading, route splitting, and pixel asset compression.',
    outcome: 'Near-perfect Lighthouse scores, faster page loading, and lower acquisition costs.',
    icon: <Gauge className="w-6 h-6 text-accent-primary" />,
  },
  {
    title: 'UI/UX Implementation',
    problem: 'Design mockups that lose quality, alignment, and responsiveness during coding.',
    solution:
      'Pixel-perfect CSS execution, unified styling variables, and rigorous responsive audits.',
    outcome: 'Zero visual bugs, consistent theme rendering, and reduced design-to-live latency.',
    icon: <Layers className="w-6 h-6 text-accent-primary" />,
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" className="relative py-space-16 lg:py-space-24 bg-bg-primary">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-space-12 lg:mb-space-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
            Capabilities
          </span>
          <Heading level={2} className="mb-space-4">
            Outcome-Driven Engineering.
          </Heading>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            I resolve complex frontend bottlenecks by replacing slow templates with lightweight,
            scalable, and responsive custom solutions that drive business outcomes.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6 lg:gap-space-8">
          {services.map((item) => (
            <Card
              key={item.title}
              glass
              interactive
              padding="lg"
              className="flex flex-col items-start text-left h-full"
            >
              {/* Header Icon & Title */}
              <div className="flex items-center gap-space-3 mb-space-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-primary/5 border border-accent-primary/10">
                  {item.icon}
                </div>
                <h3 className="font-mono text-sm font-bold text-text-primary tracking-wide">
                  {item.title}
                </h3>
              </div>

              {/* Value Proposition Framework (Problem -> Solution -> Outcome) */}
              <div className="flex flex-col gap-space-4 w-full mt-auto">
                <div className="border-l-2 border-red-500/20 pl-space-3 py-space-0.5">
                  <span className="block text-[10px] font-mono font-semibold tracking-wider text-red-400 uppercase mb-0.5">
                    The Problem
                  </span>
                  <p className="text-[12px] text-text-secondary leading-normal">{item.problem}</p>
                </div>

                <div className="border-l-2 border-accent-primary/20 pl-space-3 py-space-0.5">
                  <span className="block text-[10px] font-mono font-semibold tracking-wider text-accent-primary uppercase mb-0.5">
                    The Solution
                  </span>
                  <p className="text-[12px] text-text-secondary leading-normal">{item.solution}</p>
                </div>

                <div className="border-l-2 border-emerald-500/20 pl-space-3 py-space-0.5">
                  <span className="block text-[10px] font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-0.5">
                    Business Outcome
                  </span>
                  <p className="text-[12px] text-text-primary font-medium leading-normal">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
