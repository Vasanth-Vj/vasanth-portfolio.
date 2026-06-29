import React from 'react';
import { ExternalLink, Code, Compass } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// Inline SVG Github icon to resolve Lucide export discrepancies
const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectItem {
  title: string;
  objective: string;
  role: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Portfolio Engine',
    objective:
      'Build a high-performance, type-safe portfolio foundation for developers featuring fluid layouts, custom interactive SVG components, and an automated git pipeline.',
    role: 'Sole Frontend Engineer. Configured strict linting rules, designed reusable UI atoms, wrote custom spring transition physics, and built interactive SVG canvas listeners.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive geometric SVG engine responding dynamically to mouse vectors.',
      'Responsive navigation drawer featuring spring-based slide animations.',
      'Accessibility focus routing with skip-to-content structures and contrast validation.',
      'Automated Git pre-commit hooks executing ESLint and Prettier checks via lint-staged.',
    ],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Apex Finance Dashboard',
    objective:
      'Implement a highly responsive, clean user dashboard presenting financial metrics, reactive cost charts, and filterable transactions.',
    role: 'Frontend Architect. Structured responsive grid components, integrated chart render hooks, and set up state management workflows for local data caching.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'],
    features: [
      'Interactive cost charts representing monthly expense trends.',
      'Persistent local storage sync preserving ledger records between sessions.',
      'Complex keyword filtering and category segmentation tags.',
      'Adaptive layouts optimizing viewports from 320px mobile screens to wide monitors.',
    ],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <Section id="work" className="relative py-space-16 lg:py-space-24 bg-bg-secondary/20">
      {/* Background ambient lighting */}
      <div
        className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-primary/3 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header - Spacious padding */}
        <div className="max-w-2xl text-left mb-space-16 lg:mb-space-24">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
            Portfolio
          </span>
          <Heading level={2} className="mb-space-4">
            Proof of Work.
          </Heading>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            A showcase of production-grade engineering, type-safe structures, and clean visual
            implementation. Explore live links and raw source repositories.
          </p>
        </div>

        {/* Project Case Studies List */}
        <div className="flex flex-col gap-space-12 lg:gap-space-16">
          {projects.map((project) => (
            <Card
              key={project.title}
              glass
              padding="none"
              className="p-space-8 lg:p-space-12 border border-border-muted/80 hover:border-accent-primary/25 hover:shadow-[0_8px_30px_rgba(139,92,246,0.04)] transition-all duration-300 w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start">
                {/* Left Side: Summary & Tech Badges (5/12 width) */}
                <div className="lg:col-span-5 flex flex-col items-start text-left h-full justify-between">
                  <div>
                    {/* Project Title */}
                    <h3 className="font-mono text-lg font-bold text-text-primary tracking-wide mb-space-6 flex items-center gap-space-2">
                      <Code className="w-5 h-5 text-accent-primary" />
                      {project.title}
                    </h3>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-space-2 mb-space-8">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" outline size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions Links */}
                  <div className="flex flex-wrap gap-space-4 mt-auto w-full">
                    <Button
                      variant="primary"
                      size="md"
                      href={project.liveUrl}
                      className="!px-6 !py-3 text-sm flex-1 sm:flex-initial"
                      rightIcon={<ExternalLink size={14} />}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      href={project.githubUrl}
                      className="!px-6 !py-3 text-sm flex-1 sm:flex-initial"
                      leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
                    >
                      Repository
                    </Button>
                  </div>
                </div>

                {/* Right Side: Case Study Specifications (7/12 width) */}
                <div className="lg:col-span-7 flex flex-col gap-space-6 text-left border-t lg:border-t-0 lg:border-l border-border-muted/50 pt-space-8 lg:pt-0 lg:pl-space-8">
                  {/* Objective */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-accent-primary uppercase">
                      Objective
                    </span>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-accent-primary uppercase">
                      My Role
                    </span>
                    <p className="text-[13px] text-text-secondary leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[10px] font-bold tracking-widest text-accent-primary uppercase">
                      Key Features
                    </span>
                    <ul className="flex flex-col gap-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-space-2 text-[13px] text-text-secondary leading-relaxed"
                        >
                          <span className="text-accent-primary mt-1 select-none flex-shrink-0">
                            <Compass size={12} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedWork;
