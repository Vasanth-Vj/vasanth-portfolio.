import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Container } from './components/ui/Container';
import { Section } from './components/ui/Section';
import { Heading } from './components/ui/Heading';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { Input } from './components/ui/Input';
import { Textarea } from './components/ui/Textarea';
import { Mail, ArrowRight, User } from 'lucide-react';

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
      <MainLayout>
        <Container className="py-space-12">
          <div className="border-b border-border-muted pb-space-6 mb-space-8">
            <Heading level={1} className="mb-space-2" gradient>
              Design System Showcase
            </Heading>
            <p className="text-text-secondary text-sm">
              Visual preview and interactive verification of the updated React & TypeScript
              components.
            </p>
          </div>

          {/* 1. Headings Section */}
          <Section id="headings" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6" balance>
              1. Typography & Headings (Text Balance & Gradient Text)
            </Heading>
            <div className="flex flex-col gap-space-4 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 1 (Gradient Highlight)
                </Heading>
                <Heading level={1} gradient>
                  Engineering conversion-first digital interfaces that drive scalable enterprise
                  success.
                </Heading>
              </div>
              <hr className="border-border-muted" />
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 2 (Text Balanced)
                </Heading>
                <Heading level={2} balance>
                  A balanced headline that splits lines logically to avoid awkward single word
                  orphans on larger displays.
                </Heading>
              </div>
              <hr className="border-border-muted" />
              <div>
                <Heading level={4} mono className="mb-space-1 text-accent-primary">
                  Heading Level 3
                </Heading>
                <Heading level={3}>Standard subheading with clean weights.</Heading>
              </div>
            </div>
          </Section>

          {/* 2. Buttons Section */}
          <Section id="buttons" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              2. Buttons (Upgraded API)
            </Heading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-6 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Variants & Widths</Heading>
                <div className="flex flex-wrap gap-space-3 items-center">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <div className="mt-space-2">
                  <Button variant="primary" fullWidth>
                    Full Width Block Button
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Icon Slots, loadingText & IconOnly</Heading>
                <div className="flex flex-wrap gap-space-3 items-center">
                  <Button variant="secondary" leftIcon={<User size={16} />}>
                    Profile Link
                  </Button>
                  <Button
                    variant="primary"
                    isLoading={loading}
                    loadingText="Sending Message..."
                    onClick={() => setLoading(true)}
                  >
                    Click to Test loadingText
                  </Button>
                  <Button variant="primary" iconOnly aria-label="Mail icon button">
                    <Mail size={16} />
                  </Button>
                  <Button
                    variant="secondary"
                    iconOnly
                    disabled
                    aria-label="Disabled mail icon button"
                  >
                    <Mail size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </Section>

          {/* 3. Cards Section */}
          <Section id="cards" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              3. Cards (Glass, Padding & Borderless)
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-6">
              <Card padding="sm">
                <Heading level={4} className="mb-space-2">
                  Small Padding
                </Heading>
                <p className="text-text-secondary text-xs">`padding="sm"` card container layout.</p>
              </Card>

              <Card borderless padding="md">
                <Heading level={4} className="mb-space-2">
                  Borderless Card
                </Heading>
                <p className="text-text-secondary text-xs">
                  No layout outer border lines; sits on primary cards back.
                </p>
              </Card>

              <Card glass padding="md">
                <Heading level={4} className="mb-space-2">
                  Glass Card
                </Heading>
                <p className="text-text-secondary text-xs">
                  Backdrop filter blur with high-contrast translucent background properties.
                </p>
              </Card>

              <Card interactive glow glass padding="md">
                <Heading level={4} className="mb-space-2">
                  Glass + Glow Card
                </Heading>
                <p className="text-text-secondary text-xs">
                  Combines translucent glassmorphism with dynamic mouse-glow behaviors.
                </p>
              </Card>
            </div>
          </Section>

          {/* 4. Badges Section */}
          <Section id="badges" className="border-b border-border-muted pb-space-8 mb-space-8">
            <Heading level={2} className="mb-space-6">
              4. Badges (Sizes & Outline)
            </Heading>
            <div className="flex flex-col gap-space-4 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div className="flex flex-wrap gap-space-4 items-center">
                <Heading level={4} className="mr-space-4">
                  Default Size (md)
                </Heading>
                <Badge variant="default">Default</Badge>
                <Badge variant="success" dot>
                  Success
                </Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="success" outline dot>
                  Success Outline
                </Badge>
                <Badge variant="accent" outline>
                  Accent Outline
                </Badge>
              </div>
              <hr className="border-border-muted" />
              <div className="flex flex-wrap gap-space-4 items-center">
                <Heading level={4} className="mr-space-4">
                  Small Size (sm)
                </Heading>
                <Badge variant="default" size="sm">
                  Default sm
                </Badge>
                <Badge variant="success" size="sm" dot>
                  Success sm
                </Badge>
                <Badge variant="accent" size="sm">
                  Accent sm
                </Badge>
                <Badge variant="success" size="sm" outline dot>
                  Success Outline sm
                </Badge>
                <Badge variant="accent" size="sm" outline>
                  Accent Outline sm
                </Badge>
              </div>
            </div>
          </Section>

          {/* 5. Inputs & Textareas Section */}
          <Section id="inputs" className="pb-space-8">
            <Heading level={2} className="mb-space-6">
              5. Inputs & Textareas (HelperText & Required Asterisk)
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-8 bg-bg-secondary p-space-6 rounded-lg border border-border-muted">
              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Inputs</Heading>
                <Input
                  id="sample-input-1"
                  label="Contact Email"
                  placeholder="john@company.com"
                  required
                  prefix={<Mail size={16} />}
                  helperText="We will never share your email with third parties."
                />
                <Input
                  id="sample-input-2"
                  label="Response Priority (With Suffix)"
                  placeholder="24 Hours SLA"
                  suffix={<ArrowRight size={16} />}
                />
              </div>

              <div className="flex flex-col gap-space-4">
                <Heading level={3}>Textareas</Heading>
                <Textarea
                  id="sample-textarea-1"
                  label="Message Content"
                  placeholder="Tell us about your next project..."
                  required
                  helperText="Minimum 20 characters required."
                />
              </div>
            </div>
          </Section>
        </Container>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
