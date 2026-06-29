import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './components/ui/Container';
import { Section } from './components/ui/Section';
import { Heading } from './components/ui/Heading';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Input } from './components/ui/Input';
import { Textarea } from './components/ui/Textarea';

function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-primary text-text-primary py-space-12 selection:bg-accent-primary selection:text-bg-primary">
        <Container>
          <div className="border-b border-border-muted pb-space-6 mb-space-8">
            <Heading level={1} className="mb-space-2">
              Design System Showcase
            </Heading>
            <p className="text-text-secondary text-sm">
              Visual preview and interactive verification of the implemented React & TypeScript
              components.
            </p>
          </div>

          {/* 1. Headings Section */}
          <Section id="headings" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              1. Typography & Headings
            </Heading>
            <div className="flex flex-col gap-space-4 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 1
                </Heading>
                <Heading level={1}>The quick brown fox jumps over the lazy dog</Heading>
              </div>
              <hr className="border-border-muted" />
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 2
                </Heading>
                <Heading level={2}>The quick brown fox jumps over the lazy dog</Heading>
              </div>
              <hr className="border-border-muted" />
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 3
                </Heading>
                <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
              </div>
              <hr className="border-border-muted" />
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 4 (Mono)
                </Heading>
                <Heading level={4} mono>
                  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
                </Heading>
              </div>
            </div>
          </Section>

          {/* 2. Buttons Section */}
          <Section id="buttons" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              2. Buttons
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-6 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Variants</Heading>
                <div className="flex flex-wrap gap-space-3 items-center">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </div>
              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Sizes & States</Heading>
                <div className="flex flex-wrap gap-space-3 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium (Default)</Button>
                  <Button size="lg">Large</Button>
                  <Button isLoading>Loading</Button>
                </div>
              </div>
            </div>
          </Section>

          {/* 3. Cards Section */}
          <Section id="cards" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              3. Cards
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-6">
              <Card>
                <Heading level={3} className="mb-space-2">
                  Static Card
                </Heading>
                <p className="text-text-secondary text-sm">
                  Standard layout container with a solid 1px border and base card styling. Ideal for
                  static info grids.
                </p>
              </Card>

              <Card interactive>
                <Heading level={3} className="mb-space-2">
                  Interactive Card
                </Heading>
                <p className="text-text-secondary text-sm">
                  Framer-motion powered card that translates vertically and applies a micro
                  shadow-glow on hover interaction.
                </p>
              </Card>

              <Card interactive glow>
                <Heading level={3} className="mb-space-2">
                  Glow Card
                </Heading>
                <p className="text-text-secondary text-sm">
                  Features a subtle backing gradient glow that highlights the card boundaries during
                  active user hover.
                </p>
              </Card>
            </div>
          </Section>

          {/* 4. Badges Section */}
          <Section id="badges" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              4. Badges
            </Heading>
            <div className="flex flex-wrap gap-space-4 bg-bg-secondary p-space-6 rounded-lg border border-border-muted items-center">
              <Badge variant="default">Default Badge</Badge>
              <Badge variant="success">Success Badge</Badge>
              <Badge variant="accent">Accent Badge</Badge>
              <Badge variant="success" dot>
                Available for Projects
              </Badge>
              <Badge variant="accent" dot>
                TypeScript Core
              </Badge>
            </div>
          </Section>

          {/* 5. Inputs & Textareas Section */}
          <Section id="inputs" className="pb-space-8">
            <Heading level={2} className="mb-space-6">
              5. Inputs & Textareas
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-8 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Inputs</Heading>
                <Input id="sample-input-1" label="Full Name (Default)" placeholder="John Doe" />
                <Input
                  id="sample-input-2"
                  label="Email Address (Error State)"
                  placeholder="john@company.com"
                  error="Please enter a valid email address."
                  defaultValue="invalid-email"
                />
              </div>

              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Textareas</Heading>
                <Textarea
                  id="sample-textarea-1"
                  label="Project Scope (Default)"
                  placeholder="Describe your project..."
                />
                <Textarea
                  id="sample-textarea-2"
                  label="Project Scope (Error State)"
                  placeholder="Describe your project..."
                  error="Project description must be at least 20 characters."
                  defaultValue="Too short"
                />
              </div>
            </div>
          </Section>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
