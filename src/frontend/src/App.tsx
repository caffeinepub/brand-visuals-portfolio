import {
  ArrowRight,
  Camera,
  Image,
  Instagram,
  Lightbulb,
  Mail,
  Menu,
  MessageCircle,
  Share2,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Nav ───────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "WORK", href: "#portfolio" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-xs border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-sm md:text-base font-semibold tracking-[0.25em] text-foreground"
          data-ocid="nav.link"
        >
          VISUAL STUDIO
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors duration-200"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 border border-foreground text-xs tracking-[0.18em] text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
          data-ocid="nav.primary_button"
        >
          GET IN TOUCH
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
            data-ocid="nav.panel"
          >
            <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.hash = "#contact";
                }}
                className="inline-flex items-center px-5 py-2 border border-foreground text-xs tracking-[0.18em] text-foreground w-fit"
                data-ocid="nav.primary_button"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <img
        src="/assets/generated/hero-luxury-v2.dim_1600x900.jpg"
        alt="Luxury product visual"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <p className="text-xs tracking-[0.3em] text-gold mb-6 uppercase">
          Portfolio
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase leading-tight mb-6">
          Your Brand Deserves Visuals That Stop the Scroll
        </h1>
        <p className="text-sm md:text-base text-white/80 tracking-wide mb-10 max-w-xl mx-auto leading-relaxed">
          Product photography & AI-powered visuals crafted to make your brand
          unforgettable.
        </p>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-white text-xs tracking-[0.18em] hover:bg-gold/90 transition-colors duration-200"
          data-ocid="hero.primary_button"
        >
          VIEW MY WORK <ArrowRight size={14} />
        </a>
      </motion.div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: quote */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-2 border-gold pl-6 mb-8">
              <p className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed">
                &ldquo;Every great brand begins with a compelling visual
                story.&rdquo;
              </p>
            </div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">
              — About Me
            </p>
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-2xl md:text-3xl uppercase text-foreground mb-6 tracking-wide">
              Visual Storyteller, <br />
              Brand Partner
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Hi — I&apos;m a visual creator with a passion for product
                photography, brand storytelling, and AI-assisted creative work.
                I blend real photography with modern tools to deliver visuals
                that feel elevated, intentional, and distinctly yours.
              </p>
              <p>
                I specialize in working with small businesses and emerging
                brands who want content that punches above their weight —
                premium-looking visuals without the agency price tag.
              </p>
              <p>
                Every project I take on gets my full attention and creative
                energy. If you have a vision, I&apos;d love to help bring it to
                life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ─────────────────────────────────────────────────────────────
const portfolioItems = [
  {
    src: "/assets/uploads/file_0000000005cc71fa9fd4a49030d4bb6b-019d2959-1b03-733f-8dbc-19e3656a7349-1.png",
    title: "Golden Marble",
    category: "Fragrance Photography",
  },
  {
    src: "/assets/uploads/file_00000000b81c72089aeccc53648269b8-019d2959-1c19-761f-bdc0-6603e056fb1a-2.png",
    title: "Prism Light",
    category: "Creative Product Shot",
  },
  {
    src: "/assets/uploads/file_00000000871071fa800454c65dc0b3a5-019d2959-1d90-779b-80e0-be410835e0fe-4.png",
    title: "Floral Luxe",
    category: "Botanical Campaign",
  },
  {
    src: "/assets/uploads/file_00000000481871fa938501f4bc8d8072-019d2959-213e-7608-b738-3c37c3b8da4c-5.png",
    title: "Rose Collection",
    category: "Luxury Fragrance",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground tracking-wide">
            Selected Works
          </h2>
          <div className="w-12 h-px bg-gold mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
              data-ocid={`portfolio.item.${i + 1}`}
            >
              <div className="overflow-hidden border border-transparent group-hover:border-gold transition-all duration-200 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="pt-4 pb-2">
                <p className="text-xs tracking-[0.18em] text-gold uppercase mb-1">
                  {item.category}
                </p>
                <p className="text-sm tracking-wide text-foreground font-medium">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────────────────
const services = [
  {
    icon: Camera,
    title: "Product Photography",
    description:
      "Clean, premium product shots that showcase your items in their best light — from cosmetics to lifestyle goods.",
  },
  {
    icon: Image,
    title: "Brand Photoshoots",
    description:
      "Curated visual sessions that capture your brand's essence and communicate its story with clarity and elegance.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description:
      "Scroll-stopping visuals crafted for Instagram, TikTok, and beyond — designed to engage and convert.",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description:
      "Strategic visual concepts and mood-board led direction to ensure your brand communicates the right message.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
            What I Offer
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground tracking-wide">
            Services
          </h2>
          <div className="w-12 h-px bg-gold mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border p-7 md:p-8 hover:border-gold group transition-all duration-200 bg-card"
                data-ocid={`services.item.${i + 1}`}
              >
                <Icon size={22} className="text-gold mb-5" strokeWidth={1.5} />
                <h3 className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-3">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-5">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs tracking-[0.12em] text-gold hover:gap-2 transition-all duration-150"
                  data-ocid={`services.link.${i + 1}`}
                >
                  LEARN MORE <ArrowRight size={12} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── AI Note ───────────────────────────────────────────────────────────────
function AiNote() {
  return (
    <section className="py-12 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-gold/40 px-8 py-7 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs tracking-[0.2em] text-gold uppercase mb-4">
            A NOTE ON MY WORK
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground italic">
            Transparency matters to me. Some visuals in this portfolio are
            created using AI-assisted tools for conceptual presentation. Real
            photography and AI work together in my process — each project is
            crafted with the same care and creative intent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "Working with this studio was a wonderful experience. The product visuals exceeded our expectations and truly elevated our brand presence.",
    name: "Sophia Laurent",
    title: "Founder, Maison Cosmetics",
    initial: "S",
  },
  {
    quote:
      "Incredibly attentive to detail. The photography captured our brand identity perfectly and our social media engagement has grown since.",
    name: "Marcus Chen",
    title: "Marketing Director, Lumière Skincare",
    initial: "M",
  },
  {
    quote:
      "A fresh perspective and genuine passion for the craft. Highly recommend for any brand looking for beautiful, authentic visuals.",
    name: "Amara Osei",
    title: "CEO, Velvet & Oak",
    initial: "A",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
            Kind Words
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground tracking-wide">
            Testimonials
          </h2>
          <div className="w-12 h-px bg-gold mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border p-7 bg-card"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={12} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <span className="font-display text-sm text-gold font-medium">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Let&apos;s Connect
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground tracking-wide mb-6">
              Get In Touch
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-sm leading-relaxed text-muted-foreground mb-10">
              Have a product, a brand, or just an idea? Let&apos;s turn it into
              something visually compelling. I respond to all inquiries within
              24 hours — reach out through any channel below, or fill out the
              form and I&apos;ll get back to you shortly.
            </p>

            <p className="text-xs tracking-[0.2em] text-gold uppercase mb-4">
              Response within 24 hours
            </p>

            <div className="space-y-5">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-ocid="contact.link"
              >
                <div className="w-10 h-10 border border-border group-hover:border-gold transition-colors duration-200 flex items-center justify-center">
                  <MessageCircle
                    size={16}
                    className="text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="text-sm text-foreground">+123 456 7890</p>
                </div>
              </a>

              <a
                href="https://instagram.com/visualstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-ocid="contact.link"
              >
                <div className="w-10 h-10 border border-border group-hover:border-gold transition-colors duration-200 flex items-center justify-center">
                  <Instagram
                    size={16}
                    className="text-gold"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Instagram
                  </p>
                  <p className="text-sm text-foreground">@visualstudio</p>
                </div>
              </a>

              <a
                href="mailto:hello@visualstudio.com"
                className="flex items-center gap-4 group"
                data-ocid="contact.link"
              >
                <div className="w-10 h-10 border border-border group-hover:border-gold transition-colors duration-200 flex items-center justify-center">
                  <Mail size={16} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm text-foreground">
                    hello@visualstudio.com
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="border border-gold/50 bg-gold/5 p-8 text-center h-full flex flex-col items-center justify-center gap-4"
                data-ocid="contact.success_state"
              >
                <div className="w-12 h-12 border border-gold flex items-center justify-center">
                  <Star size={18} className="text-gold fill-gold" />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-foreground">
                  Thank You
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your message has been received. I&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.panel"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-200"
                      placeholder="Your name"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-200"
                      placeholder="your@email.com"
                      data-ocid="contact.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background text-xs tracking-[0.18em] hover:bg-gold transition-colors duration-200"
                  data-ocid="contact.submit_button"
                >
                  SEND MESSAGE <ArrowRight size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            <p className="font-display text-sm tracking-[0.25em] text-footer-text uppercase mb-3">
              VISUAL STUDIO
            </p>
            <p className="text-xs text-footer-text/60 leading-relaxed max-w-xs">
              Creative brand visuals for modern businesses. Blending photography
              and AI for impactful results.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-[0.2em] text-gold uppercase mb-2">
              Navigation
            </p>
            {["Work", "Services", "About", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs tracking-wide text-footer-text/70 hover:text-gold transition-colors duration-200"
                data-ocid="nav.link"
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase mb-4">
              Follow
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/visualstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-footer-text/30 flex items-center justify-center hover:border-gold transition-colors duration-200"
                aria-label="Instagram"
                data-ocid="contact.link"
              >
                <Instagram size={14} className="text-footer-text/70" />
              </a>
              <a
                href="mailto:hello@visualstudio.com"
                className="w-9 h-9 border border-footer-text/30 flex items-center justify-center hover:border-gold transition-colors duration-200"
                aria-label="Email"
                data-ocid="contact.link"
              >
                <Mail size={14} className="text-footer-text/70" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-footer-text/30 flex items-center justify-center hover:border-gold transition-colors duration-200"
                aria-label="WhatsApp"
                data-ocid="contact.link"
              >
                <MessageCircle size={14} className="text-footer-text/70" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-text/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-footer-text/50 tracking-wide">
            © {year} Visual Studio. All rights reserved.
          </p>
          <p className="text-xs text-footer-text/40">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <AiNote />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
