import { motion } from 'framer-motion';
import {
  Linkedin,
  Mail,
  MapPin,
  Github,
} from 'lucide-react';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { photographerInfo } from '@/data/photographer';

const contactLinks = [
  {
    title: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/joshvantsant',
  },
  {
    title: 'Email',
    icon: Mail,
    href: `mailto:${photographerInfo.email}`,
  },
];

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Feel free to reach out on any of these platforms. I'm very open to discuss new opportunities, research collaborations, or creative projects."
      />

      <section
        id="contact"
        className="py-24 md:py-32 px-6 border-t border-border"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-6xl font-light tracking-wide">
                Let&apos;s Connect
              </h2>

              <p className="max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                Open to creative opportunities, research collaborations,
                soft robotics research, and interdisciplinary engineering roles.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-20">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.title !== 'Email' ? '_blank' : undefined}
                  rel={item.title !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group border border-border rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all hover:border-foreground/20 hover:bg-accent/30"
                >
                  <div className="p-5 rounded-full bg-accent mb-6 transition-transform group-hover:scale-105">
                    <Icon className="size-8 text-muted-foreground" />
                  </div>

                  <h3 className="text-2xl font-light tracking-wide">
                    {item.title}
                  </h3>
                </motion.a>
              );
            })}
          </div>

          {/* Bottom Info */}
          <div className="flex justify-center mt-20 text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent">
                <MapPin className="size-5" />
              </div>

              <p className="text-lg font-light">
                {photographerInfo.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
