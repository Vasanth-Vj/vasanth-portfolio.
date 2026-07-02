import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface Project {
  title: string;
  url: string;
  tags: string[];
  mockup: React.ReactNode;
}

// Interactive mini-UIs to render inside the browser mockups
const AnalyticsMockup: React.FC = () => (
  <div className="w-full h-full bg-[#18181B] p-4 flex flex-col justify-between text-left font-sans text-white/90">
    <div className="flex items-center justify-between border-b border-white/5 pb-2">
      <span className="text-[10px] font-mono text-zinc-500">Analytics Engine</span>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
    </div>
    <div className="grid grid-cols-2 gap-2 my-2">
      <div className="bg-zinc-900/60 p-2 rounded border border-white/5">
        <span className="text-[8px] text-zinc-400 uppercase tracking-wider block">Revenue</span>
        <span className="text-sm font-bold font-mono text-accent-primary">$24,850</span>
      </div>
      <div className="bg-zinc-900/60 p-2 rounded border border-white/5">
        <span className="text-[8px] text-zinc-400 uppercase tracking-wider block">
          Active Users
        </span>
        <span className="text-sm font-bold font-mono text-accent-warm">1,482</span>
      </div>
    </div>
    {/* Mini Chart visualization */}
    <div className="flex items-end gap-1.5 h-12 mt-1">
      {[40, 60, 45, 80, 55, 95, 75, 110, 85].map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-zinc-800 rounded-t overflow-hidden relative"
          style={{ height: `${h}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-accent-primary to-accent-primary/20" />
        </div>
      ))}
    </div>
  </div>
);

const EcomMockup: React.FC = () => (
  <div className="w-full h-full bg-[#FAF8F4] p-4 flex flex-col justify-between text-left font-sans text-zinc-800">
    <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
      <span className="text-[10px] font-mono text-zinc-400">Streetwear.store</span>
      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
        In stock
      </span>
    </div>
    <div className="flex gap-3 my-2 items-center">
      {/* Product Image placeholder */}
      <div className="w-16 h-16 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center relative overflow-hidden">
        <div className="w-10 h-10 rounded-full bg-accent-warm/20 absolute -bottom-2 -left-2" />
        <span className="text-lg">👟</span>
      </div>
      <div className="flex-grow flex flex-col">
        <span className="text-[11px] font-bold tracking-tight">Hyperlight Sneakers</span>
        <span className="text-xs font-mono font-bold text-zinc-900 mt-0.5">$189.00</span>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className="text-[9px] text-amber-500">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full bg-zinc-900 text-white text-[10px] font-bold py-1.5 rounded text-center cursor-pointer hover:bg-zinc-800 transition-colors">
      Add to Cart
    </div>
  </div>
);

const FintechMockup: React.FC = () => (
  <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between text-left font-sans text-white/90">
    <div className="flex items-center justify-between">
      <span className="text-[9px] font-bold tracking-widest uppercase text-zinc-500">
        APEX CARD
      </span>
      <span className="text-[8px] font-mono text-zinc-600">•••• 4820</span>
    </div>
    <div className="my-auto flex flex-col pt-2">
      <span className="text-[9px] text-zinc-500 uppercase tracking-wider block">
        Available Balance
      </span>
      <span className="text-xl font-bold font-mono tracking-tight">$82,410.50</span>
    </div>
    {/* Clean neon Credit Card mini visual */}
    <div className="w-full h-11 bg-gradient-to-r from-emerald-500 to-teal-600 rounded p-2 flex items-center justify-between shadow-[0_4px_12px_rgba(16,185,129,0.2)]">
      <div className="flex flex-col">
        <span className="text-[6px] text-emerald-100 uppercase tracking-widest leading-none">
          Vasanthakumar
        </span>
        <span className="text-[8px] font-mono text-white font-bold mt-0.5">VISA</span>
      </div>
      <div className="w-6 h-4 bg-yellow-400/80 rounded-xs" />
    </div>
  </div>
);

const projects: Project[] = [
  {
    title: 'SaaS Analytics Dashboard',
    url: 'https://github.com',
    tags: ['React', 'Nodejs', 'MongoDB'],
    mockup: <AnalyticsMockup />,
  },
  {
    title: 'E-commerce Platform',
    url: 'https://github.com',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    mockup: <EcomMockup />,
  },
  {
    title: 'Fintech Landing Page',
    url: 'https://github.com',
    tags: ['Next.js', 'Framer Motion'],
    mockup: <FintechMockup />,
  },
];

export const FeaturedWork: React.FC = () => {
  return (
    <Section id="work" className="relative py-space-16 lg:py-space-24 paper-texture">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 items-start mb-space-12">
          {/* Header column */}
          <div className="lg:col-span-4 flex flex-col items-start text-left lg:sticky lg:top-28">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
              Featured Work
            </span>
            <Heading
              level={2}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-space-6 font-serif leading-tight"
            >
              Real projects. Real impact.
            </Heading>
            <p className="text-text-secondary text-sm sm:text-base mb-space-8 leading-relaxed">
              A curated collection of client products and applications, engineered for top-tier
              performance, scalability, and premium look-and-feel.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors duration-150 uppercase tracking-widest"
            >
              View All Projects{' '}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-150"
              />
            </a>
          </div>

          {/* Cards column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-space-6">
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="bg-white border border-border-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full text-left"
              >
                {/* Browser style Mockup header */}
                <div className="bg-bg-secondary border-b border-border-muted px-4 py-2.5 flex items-center gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="w-24 h-4 bg-white/70 border border-border-muted/50 rounded-sm mx-auto text-[7px] font-mono text-center text-text-secondary flex items-center justify-center">
                    app.vasanth.dev
                  </div>
                </div>

                {/* Mockup Canvas */}
                <div className="aspect-[4/3] w-full border-b border-border-muted overflow-hidden relative bg-bg-secondary shrink-0">
                  {project.mockup}
                </div>

                {/* Content info */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Project Title */}
                    <h3 className="font-serif text-lg font-bold text-text-primary mb-3 flex items-center justify-between group-hover:text-accent-primary transition-colors">
                      {project.title}
                      <ArrowUpRight
                        size={16}
                        className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </h3>

                    {/* Tech Badges as tag pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="default" size="sm" outline>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedWork;
