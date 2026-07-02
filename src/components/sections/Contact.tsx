import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { CircleDoodle } from '../ui/Doodles';

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

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <Section
      id="contact"
      className="relative py-space-16 lg:py-space-24 paper-texture overflow-visible"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-12 items-center">
          {/* Left Column: Hand-drawn Call to Action & Info (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent-primary uppercase mb-space-3 block">
              Contact
            </span>

            {/* Headline with circular doodle around "amazing together" */}
            <Heading
              level={2}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-space-8 font-serif leading-tight text-text-primary"
            >
              Let's build something{' '}
              <span className="relative inline-block px-2">
                amazing together
                <CircleDoodle
                  className="absolute inset-0 w-full h-full text-accent-warm opacity-80"
                  delay={0.6}
                />
              </span>
              .
            </Heading>

            {/* Simple Contact Details Card */}
            <div className="flex flex-col gap-space-4 w-full max-w-sm mb-space-8">
              <div className="flex items-center gap-space-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border-muted shadow-xs">
                  <Mail size={16} className="text-accent-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest leading-none mb-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:vasanthakumar.dev@gmail.com"
                    className="text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors"
                  >
                    vasanthakumar.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-space-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border-muted shadow-xs">
                  <Phone size={16} className="text-accent-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest leading-none mb-0.5">
                    Phone
                  </span>
                  <a
                    href="tel:+911234567890"
                    className="text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-space-4">
              <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
                Connect:
              </span>
              <div className="flex gap-space-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border-muted bg-white flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border-muted bg-white flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-border-muted bg-white flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all shadow-xs"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Notebook/Ruled Paper styled Form Card (7/12 width) */}
          <div className="lg:col-span-7 w-full relative">
            {/* Hand-drawn Paperclip SVG floating at the top-right corner of the notebook */}
            <div className="absolute -top-7 right-6 z-20 pointer-events-none select-none drop-shadow-md">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="1.5"
                className="w-14 h-14 rotate-12"
              >
                <path d="M6 9V5a5 5 0 0 1 10 0v12a3 3 0 0 1-6 0V7a1 1 0 0 1 2 0v10a1 1 0 0 0 2 0V5a3 3 0 0 0-6 0v12a5 5 0 0 0 10 0V9" />
              </svg>
            </div>

            {/* Notebook slab */}
            <div className="w-full bg-[#FCFAF6] border-2 border-border-muted rounded-md shadow-lg p-space-8 md:p-space-12 relative overflow-hidden text-left min-h-[460px] flex flex-col justify-center">
              {/* Red margin line on the left side of the notebook */}
              <div className="absolute left-[36px] md:left-[48px] top-0 bottom-0 w-px bg-red-400 opacity-60 pointer-events-none" />

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-space-6 max-w-md mx-auto pl-6 md:pl-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 mb-space-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-text-primary mb-space-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-space-6">
                    Thanks for writing! I personally review every project inquiry and will reply to
                    your email within 4 business hours. Let's make something amazing.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setIsSuccess(false)}
                    className="!px-6 !py-3 text-sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-space-6 w-full pl-8 md:pl-12"
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-1 w-full border-b border-zinc-200 pb-2">
                    <label
                      htmlFor="name"
                      className="font-mono text-[9px] font-bold text-text-secondary uppercase tracking-widest"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-none outline-none font-handwritten text-2xl text-text-primary placeholder:text-text-disabled w-full py-1"
                      required
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-state-error mt-0.5">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1 w-full border-b border-zinc-200 pb-2">
                    <label
                      htmlFor="email"
                      className="font-mono text-[9px] font-bold text-text-secondary uppercase tracking-widest"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-none outline-none font-handwritten text-2xl text-text-primary placeholder:text-text-disabled w-full py-1"
                      required
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-state-error mt-0.5">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1 w-full border-b border-zinc-200 pb-2">
                    <label
                      htmlFor="message"
                      className="font-mono text-[9px] font-bold text-text-secondary uppercase tracking-widest"
                    >
                      Project Goals & Budget
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your product scope, timeline, and goals..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleChange(e)}
                      className="bg-transparent border-none outline-none font-handwritten text-2xl text-text-primary placeholder:text-text-disabled w-full py-1 resize-none"
                      required
                    />
                    {errors.message && (
                      <span className="text-[10px] font-mono text-state-error mt-0.5">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-space-4 self-start">
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      rightIcon={<Send size={14} />}
                      className="!px-8 !py-3 text-sm font-semibold"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
