import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

interface TechTool {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Frontend Engineering (React & Next.js)', percentage: 95 },
  { name: 'Type-Safe Development (TypeScript)', percentage: 90 },
  { name: 'Performance & Core Web Vitals Optimization', percentage: 95 },
  { name: 'UI/UX & Interactive Design', percentage: 85 },
];

// Clean minimalist tech icons
const techTools: TechTool[] = [
  {
    name: 'React',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-accent-primary"
      >
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-accent-primary"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M12 8v10" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8 L9 16.5 L7 14" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-accent-primary"
      >
        <path d="M12 3c-1.2 0-2.4.6-3.3 1.7L3.4 11c-1.8 2.2-1.8 5.4 0 7.6l2.3 2.7c.9 1.1 2.1 1.7 3.3 1.7h6c1.2 0 2.4-.6 3.3-1.7l5.3-6.3c1.8-2.2 1.8-5.4 0-7.6l-2.3-2.7c-.9-1.1-2.1-1.7-3.3-1.7h-6z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-accent-warm"
      >
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 22V12" />
        <path d="M12 12L2 7" />
        <path d="M12 12l10-5" />
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-accent-primary"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-accent-warm"
      >
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3h3a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 5 18.5v-13z" />
        <path d="M12 5.5A2.5 2.5 0 0 1 14.5 3h3A2.5 2.5 0 0 1 20 5.5v0A2.5 2.5 0 0 1 17.5 8h-3a2.5 2.5 0 0 1-2.5-2.5v0z" />
        <path d="M12 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-8 h-8 text-text-primary"
      >
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    ),
  },
];

export const About: React.FC = () => {
  return (
    <Section id="about" className="relative py-space-16 lg:py-space-24 paper-texture">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 items-start">
          {/* Left Column: Short Personal Intro & Skills (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
              About Me
            </span>
            <Heading
              level={2}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-space-6 font-serif"
            >
              Hi, I'm Vasanthakumar.
            </Heading>

            <p className="text-text-secondary text-sm sm:text-base mb-space-6 leading-relaxed">
              I am a Frontend Developer dedicated to creating high-performance, responsive web
              interfaces. I focus on writing clean code, building intuitive interactions, and
              ensuring every page loads instantly to drive tangible business growth.
            </p>
            <p className="text-text-secondary text-sm sm:text-base mb-space-10 leading-relaxed">
              Whether partnering with startups to launch SaaS applications or styling refined
              landing pages, I translate Figma designs into robust code and help businesses build
              scalable design systems.
            </p>

            {/* Interactive Progress Bars */}
            <div className="w-full flex flex-col gap-space-6 mb-space-10">
              <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-widest border-b border-border-muted pb-2 mb-2">
                Core Competencies
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col w-full">
                  <div className="flex justify-between items-center mb-2 font-mono text-xs text-text-primary">
                    <span>{skill.name}</span>
                    <span className="font-bold">{skill.percentage}%</span>
                  </div>
                  {/* Outer Bar */}
                  <div className="w-full h-3 bg-bg-secondary rounded-full overflow-hidden border border-border-muted shadow-inner relative">
                    {/* Inner Animated Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-accent-primary to-accent-hover rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <Button
              variant="secondary"
              size="md"
              href="/resume.pdf"
              className="!px-6 !py-3 text-sm mt-2"
              leftIcon={<Download size={16} />}
              download
            >
              Download Resume (PDF)
            </Button>
          </div>

          {/* Right Column: Tools & Tech in Clean Icon Style (5/12 width) */}
          <div className="lg:col-span-5 w-full mt-space-10 lg:mt-0 lg:sticky lg:top-28">
            <div className="bg-white border border-border-muted p-space-6 sm:p-space-8 rounded-lg shadow-sm">
              <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-widest border-b border-border-muted pb-3 mb-6 text-left">
                Tools & Technologies
              </h3>

              {/* Icon Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-4">
                {techTools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="flex flex-col items-center justify-center p-space-4 bg-bg-secondary rounded-lg border border-border-muted shadow-xs transition-shadow hover:shadow-sm"
                  >
                    <div className="mb-2 shrink-0">{tool.icon}</div>
                    <span className="font-mono text-[10px] font-bold text-text-secondary uppercase text-center mt-1">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
