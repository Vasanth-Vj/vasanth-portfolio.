import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { HeroVisual } from './HeroVisual';
import { UnderlineDoodle } from '../ui/Doodles';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center pt-space-12 pb-space-16 overflow-hidden paper-texture"
    >
      {/* Background ambient blobs (warm and subtle, no dark theme glow) */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent-primary/3 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-warm/3 blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 lg:gap-space-12 items-center">
          {/* Left Column: Core Value Propositions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badging */}
            <div className="flex flex-wrap gap-space-3 items-center mb-space-6">
              <Badge variant="success" size="sm" dot>
                Available for New Projects
              </Badge>
              <span className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
                SLA Response &lt; 2 hrs
              </span>
            </div>

            {/* Who Am I & What I Build */}
            <div className="mb-space-4 font-mono text-xs font-semibold tracking-wider text-accent-primary uppercase">
              Vasanthakumar &bull; Creative Frontend Developer
            </div>

            {/* Elegant Serif Headline with Hand-drawn Underline */}
            <Heading
              level={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-text-primary mb-space-8 tracking-tight font-serif"
            >
              I build digital products that{' '}
              <span className="relative inline-block text-text-primary">
                solve real problems
                <UnderlineDoodle
                  className="absolute left-0 bottom-[-14px] w-full h-[18px] text-accent-primary"
                  delay={0.8}
                />
              </span>
              .
            </Heading>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-text-secondary mb-space-10 max-w-xl leading-relaxed mt-2">
              I help startups and businesses turn ideas into fast, beautiful, and high-converting
              digital products that users love.
            </p>

            {/* CTA Buttons - Premium Sizing */}
            <div className="flex flex-col sm:flex-row gap-space-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                className="!px-8 !py-[16px] text-base font-semibold"
                rightIcon={<ArrowRight size={18} />}
              >
                Let's Work Together
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#work"
                className="!px-8 !py-[16px] text-base font-semibold"
                leftIcon={<Code size={18} />}
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Right Column: Polaroid Visual Frame with Annotations */}
          <div className="lg:col-span-5 flex justify-center items-center mt-space-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
