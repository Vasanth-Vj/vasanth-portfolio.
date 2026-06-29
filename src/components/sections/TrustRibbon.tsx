import React from 'react';
import { Zap, Code2, Cpu, Sparkles, Timer, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';

interface TrustIndicator {
  label: string;
  description: string;
  icon: React.ReactNode;
}

const trustIndicators: TrustIndicator[] = [
  {
    label: 'Performance First',
    description: 'Load speeds optimized under 1s.',
    icon: <Zap className="w-5 h-5 text-accent-primary" />,
  },
  {
    label: '100% Custom Code',
    description: 'No bloated template builders.',
    icon: <Code2 className="w-5 h-5 text-accent-primary" />,
  },
  {
    label: 'React + TypeScript',
    description: 'Clean, type-safe frontend structures.',
    icon: <Cpu className="w-5 h-5 text-accent-primary" />,
  },
  {
    label: 'AI Integration',
    description: 'Next-gen automation pipelines.',
    icon: <Sparkles className="w-5 h-5 text-accent-primary" />,
  },
  {
    label: 'Fast Response Time',
    description: 'SLA communication under 2 hours.',
    icon: <Timer className="w-5 h-5 text-accent-primary" />,
  },
  {
    label: 'Source Code Ownership',
    description: 'Complete project IP rights transfer.',
    icon: <ShieldCheck className="w-5 h-5 text-accent-primary" />,
  },
];

export const TrustRibbon: React.FC = () => {
  return (
    <div className="relative border-y border-border-muted bg-bg-secondary/40 backdrop-blur-md py-space-8 overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-8 lg:gap-space-6 items-stretch justify-items-center">
          {trustIndicators.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left gap-space-2 p-space-2 rounded-lg hover:bg-bg-primary/30 transition-colors duration-150 w-full"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-accent-primary/5 border border-accent-primary/10 mb-space-1">
                {item.icon}
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-xs font-semibold text-text-primary">
                  {item.label}
                </span>
                <span className="text-[11px] text-text-secondary leading-relaxed max-w-[150px]">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TrustRibbon;
