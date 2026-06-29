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
      className="relative min-h-[90vh] flex items-center py-space-12 overflow-hidden"
    >
      {/* Visual background ambient glow blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 items-center">
          {/* Left Column: Core Value Propositions & Answers to 5 Questions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badging (Why Trust Me / Who Am I) */}
            <div className="flex flex-wrap gap-space-3 items-center mb-space-6">
              <Badge variant="success" size="md" dot>
                Available for Projects
              </Badge>
              <span className="text-xs font-mono text-text-secondary">SLA Response &lt; 2 hrs</span>
            </div>

            {/* Who Am I & What I Build */}
            <div className="mb-space-2 font-mono text-sm font-semibold tracking-wider text-accent-primary uppercase">
              Vasanth Kumar &bull; Frontend Engineer
            </div>

            <Heading level={1} className="mb-space-6" gradient>
              I Engineer High-Performance Web Applications That Grow Businesses.
            </Heading>

            {/* What Makes Me Different / Why Trust Me */}
            <p className="text-base md:text-lg text-text-secondary mb-space-8 max-w-xl leading-relaxed">
              Vite + React + TypeScript Specialist. I bridge the gap between creative visual design
              and high-end frontend engineering to build fast, scalable, and conversion-optimized
              websites.
            </p>

            {/* CTAs (What should the visitor do next) */}
            <div className="flex flex-col sm:flex-row gap-space-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#work" rightIcon={<ArrowRight size={16} />}>
                View My Work
              </Button>
              <Button variant="secondary" size="lg" href="#contact" leftIcon={<Code size={16} />}>
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Interactive Art Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
