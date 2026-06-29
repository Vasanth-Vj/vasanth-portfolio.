import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center pt-space-8 pb-space-12 lg:pt-space-12 lg:pb-space-16 overflow-hidden"
    >
      {/* Visual background ambient glow blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
          {/* Left Column: Core Value Propositions & Answers to 5 Questions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badging (Why Trust Me / Who Am I) */}
            <div className="flex flex-wrap gap-space-3 items-center mb-space-6">
              <Badge variant="success" size="sm" dot>
                Available for Projects
              </Badge>
              <span className="text-[10px] font-mono text-text-disabled uppercase tracking-widest">
                SLA Response &lt; 2 hrs
              </span>
            </div>

            {/* Who Am I & What I Build */}
            <div className="mb-space-4 font-mono text-xs font-semibold tracking-wider text-accent-primary uppercase">
              Vasanth Kumar &bull; Frontend Engineer
            </div>

            {/* Business Outcomes Oriented Headline */}
            <Heading
              level={1}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-space-8 leading-tight"
              gradient
            >
              High-Performance Interfaces Built to Grow Your Business.
            </Heading>

            {/* Business Value Leads Technical Expertise */}
            <p className="text-sm sm:text-base md:text-lg text-text-secondary mb-space-12 max-w-xl leading-relaxed">
              Turn visitor traffic into measurable revenue with fast, conversion-optimized user
              interfaces. Specializing in Vite, React, and TypeScript to deliver clean, scalable,
              future-proof code.
            </p>

            {/* CTAs (What should the visitor do next) - Premium Tall Sizing */}
            <div className="flex flex-col sm:flex-row gap-space-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                className="!px-10 !py-[18px] text-base font-semibold"
                rightIcon={<ArrowRight size={16} />}
              >
                View My Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                className="!px-10 !py-[18px] text-base font-semibold"
                leftIcon={<Code size={16} />}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Interactive Art Visual */}
          <div className="lg:col-span-5 flex justify-center items-center mt-space-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
