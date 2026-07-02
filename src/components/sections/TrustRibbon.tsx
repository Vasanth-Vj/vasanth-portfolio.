import React from 'react';
import { Briefcase, Heart, Users, Award } from 'lucide-react';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: '20+',
    label: 'Projects Completed',
    icon: <Briefcase className="w-5 h-5 text-accent-primary" />,
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
    icon: <Heart className="w-5 h-5 text-accent-warm" />,
  },
  {
    value: '15+',
    label: 'Happy Clients',
    icon: <Users className="w-5 h-5 text-accent-primary" />,
  },
  {
    value: '2+',
    label: 'Years Experience',
    icon: <Award className="w-5 h-5 text-accent-warm" />,
  },
];

export const TrustRibbon: React.FC = () => {
  return (
    <section className="relative py-space-6 overflow-visible z-20">
      <Container>
        {/* Paper style Stats Slab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-border-muted p-space-6 md:p-space-8 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-space-6 md:gap-space-4"
        >
          {stats.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center gap-space-4 w-full md:w-auto justify-center md:justify-start px-space-4">
                {/* Icon circle */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bg-secondary border border-border-muted shrink-0 shadow-sm">
                  {item.icon}
                </div>

                {/* Text Block */}
                <div className="flex flex-col text-left">
                  <span className="text-3xl font-bold font-serif text-text-primary tracking-tight leading-none mb-1">
                    {item.value}
                  </span>
                  <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* Divider for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border-muted" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustRibbon;
