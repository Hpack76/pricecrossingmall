import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Star, Utensils, ShoppingBag, Coffee, Heart,
  CheckCircle2, ArrowRight, Mail, Navigation, Wine, Sandwich, Package,
  Palette, Briefcase, Building2, CreditCard, FileText,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "(314) 994-7676";
const PHONE_HREF = "tel:+13149947676";
const ADDRESS = "9200 Olive Blvd, Olivette, MO 63132";
const MAPS_HREF = "https://www.google.com/maps/dir/?api=1&destination=9200+Olive+Blvd+Olivette+MO+63132";

type Tenant = {
  name: string; type: string; suite: string; rating: string; reviews: string;
  icon: typeof Utensils; category: "Food & Drink" | "Health & Beauty" | "Shoes" | "Other";
};

const tenants: Tenant[] = [
  { name: "Sugarfire Smoke House", type: "Barbecue · $10–20", suite: "Suite 114", rating: "4.5", reviews: "4,690", icon: Utensils, category: "Food & Drink" },
  { name: "Fallon's Bar & Grill", type: "Irish Pub & Grill · $20–30", suite: "Suite 116", rating: "4.6", reviews: "960", icon: Utensils, category: "Food & Drink" },
  { name: "Revocup Coffee", type: "Cafe · $1–10", suite: "Suite 100", rating: "4.8", reviews: "558", icon: Coffee, category: "Food & Drink" },
  { name: "Sugarfire Pie", type: "Pie Shop", suite: "Suite 108", rating: "4.5", reviews: "97", icon: Utensils, category: "Food & Drink" },
  { name: "Jimmy John's", type: "Sandwich Shop · $10–20", suite: "9200 Olive Blvd", rating: "2.8", reviews: "185", icon: Sandwich, category: "Food & Drink" },
  { name: "The Honey Baked Ham Company", type: "Restaurant · $10–20", suite: "Suite 106", rating: "4.3", reviews: "130", icon: Utensils, category: "Food & Drink" },
  { name: "Wine Merchant Ltd", type: "Wine Store · (314) 863-6282", suite: "Suite 126", rating: "4.9", reviews: "190", icon: Wine, category: "Food & Drink" },
  { name: "CBD Kratom Olivette", type: "Vitamins & Supplements · (314) 733-5012", suite: "Suite 102", rating: "4.9", reviews: "454", icon: Heart, category: "Health & Beauty" },
  { name: "AR Workshop Olivette", type: "DIY Art Studio · (314) 898-9151", suite: "Suite 112", rating: "5.0", reviews: "59", icon: Palette, category: "Other" },
  { name: "FedEx Office Print & Ship", type: "Shipping & Print Services · (314) 993-2781", suite: "Suite 120", rating: "3.1", reviews: "74", icon: Package, category: "Other" },
  { name: "Rush My Passport", type: "Visa & Passport Office · Inside FedEx", suite: "Suite 120", rating: "1.0", reviews: "1", icon: FileText, category: "Other" },
  { name: "Iron Age Footwear", type: "Corporate Office · Onsite services", suite: "Suite 222", rating: "4.5", reviews: "2", icon: ShoppingBag, category: "Shoes" },
  { name: "Warson Brands", type: "Corporate Office", suite: "Suite 222", rating: "3.0", reviews: "4", icon: Briefcase, category: "Other" },
  { name: "Warson Group, Inc", type: "Corporate Office", suite: "Suite 222", rating: "5.0", reviews: "2", icon: Building2, category: "Other" },
  { name: "ATM (BP)", type: "ATM · Open 24 hours", suite: "9200 Olive Blvd", rating: "1.0", reviews: "1", icon: CreditCard, category: "Other" },
];

const CATEGORIES = ["All", "Food & Drink", "Health & Beauty", "Shoes", "Other"] as const;

const reviews = [
  { name: "Seth Blevans", badge: "Local Guide · 103 reviews", text: "Great selection of food and services in a well maintained and safe area. Please try Sugarfire barbeque — their happy hour special is well worth the trip!" },
  { name: "Bob Lewis", badge: "Local Guide · 256 reviews", text: "Sugarfire Ribs is the go-to place when visiting St. Louis! Great ribs and fantastic smoked beef briskets." },
  { name: "Fred Pineau", badge: "Local Guide · 757 reviews", text: "The many stores and restaurants satisfy the community's needs. Sugarfire Smokehouse has tasty ribs. Sufficient parking." },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-xl">P</span>
          <span className="font-display text-2xl tracking-wide text-foreground">Price Crossing</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          <a href="#directory" className="text-sm font-medium text-foreground/80 hover:text-foreground">Directory</a>
          <a href="#visit" className="text-sm font-medium text-foreground/80 hover:text-foreground">Visit</a>
          <a href="#reviews" className="text-sm font-medium text-foreground/80 hover:text-foreground">Reviews</a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-md bg-cta px-3 py-2 text-sm font-semibold text-cta-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02] md:px-4"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img src={heroImg} alt="Price Crossing shopping center exterior" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-5 md:gap-12 md:px-8 md:py-28">
        <div className="md:col-span-3 text-primary-foreground">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span>4.1 ★ from 510+ Google reviews</span>
          </div>
          <h1 className="font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Olivette's Favorite<br />Shopping & Dining<br />Destination
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Award-winning barbecue, craft coffee, local retail and wellness — all in one
            convenient stop on Olive Blvd. Open late, easy parking, family friendly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md bg-cta px-6 py-3.5 text-base font-semibold text-cta-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]">
              <Phone className="h-5 w-5" /> Call {PHONE}
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Open Now · Closes 1 AM</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> 9200 Olive Blvd</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Free Parking</span>
          </div>
        </div>
        <div className="md:col-span-2" id="quote">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
    >
      <h2 className="font-display text-2xl text-foreground">Ask Us Anything</h2>
      <p className="mt-1 text-sm text-muted-foreground">Leasing, events, or general questions — we'll reply within one business day.</p>
      {sent ? (
        <div className="mt-6 rounded-lg bg-secondary p-5 text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-cta" />
          <p className="mt-2 font-semibold text-foreground">Thanks! We'll be in touch.</p>
          <p className="mt-1 text-xs text-muted-foreground">For immediate help, call {PHONE}.</p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          <input required maxLength={80} type="text" placeholder="Your name" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <input required maxLength={20} type="tel" placeholder="Phone number" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <input required maxLength={120} type="email" placeholder="Email" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <textarea maxLength={600} rows={3} placeholder="How can we help?" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <button type="submit" className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Send Inquiry
          </button>
          <p className="text-center text-xs text-muted-foreground">Or call now — <a href={PHONE_HREF} className="font-semibold text-cta">{PHONE}</a></p>
        </div>
      )}
    </form>
  );
}

function TrustBar() {
  const items = [
    { k: "4.1★", v: "Google Rating" },
    { k: "510+", v: "Verified Reviews" },
    { k: "20+", v: "Businesses On Site" },
    { k: "Daily", v: "Open 'til 1 AM" },
  ];
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-8">
        {items.map((i) => (
          <div key={i.v} className="text-center">
            <div className="font-display text-3xl text-primary md:text-4xl">{i.k}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Directory() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const visible = filter === "All" ? tenants : tenants.filter((t) => t.category === filter);
  return (
    <section id="directory" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cta">Directory</p>
        <h2 className="font-display text-4xl text-foreground md:text-5xl">Everything You Need, One Stop</h2>
        <p className="mt-4 text-muted-foreground">15+ shops, restaurants and services under one roof — from acclaimed BBQ to craft coffee, wine, wellness and more.</p>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const count = c === "All" ? tenants.length : tenants.filter((t) => t.category === c).length;
          const active = filter === c;
          return (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/80 hover:border-primary/40"}`}
            >
              {c} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <div key={t.name} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span className="font-semibold text-foreground">{t.rating}</span>
                <span className="text-muted-foreground">({t.reviews})</span>
              </div>
            </div>
            <h3 className="font-display text-2xl leading-tight text-foreground">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.type}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-foreground/70">
              <MapPin className="h-3.5 w-3.5" /> {t.suite}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Visit Us</p>
          <h2 className="font-display text-4xl md:text-5xl">Easy To Find. Easier To Park.</h2>
          <p className="mt-4 text-white/80">Right on Olive Blvd in the heart of Olivette, with ample free parking and quick access from I-170 and I-270.</p>
          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-white/80">{ADDRESS}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="font-semibold">Phone</div>
                <a href={PHONE_HREF} className="text-white/80 hover:text-white">{PHONE}</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="font-semibold">Hours</div>
                <div className="text-white/80">Open daily · Closes 1:00 AM</div>
                <div className="text-xs text-white/60">Individual store hours may vary.</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAPS_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-cta px-5 py-3 text-sm font-semibold text-cta-foreground shadow-[var(--shadow-cta)]">
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/20">
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/15 shadow-2xl">
          <iframe
            title="Price Crossing map"
            src="https://www.google.com/maps?q=9200+Olive+Blvd+Olivette+MO+63132&output=embed"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cta">Reviews</p>
          <h2 className="font-display text-4xl text-foreground md:text-5xl">Loved by the Community</h2>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shadow-[var(--shadow-card)]">
          <div className="font-display text-3xl text-primary">4.1</div>
          <div>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className={`h-4 w-4 ${i <= 4 ? "fill-accent text-accent" : "text-muted"}`} />
              ))}
            </div>
            <div className="text-xs text-muted-foreground">510 Google reviews</div>
          </div>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="mb-3 flex gap-0.5">
              {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <blockquote className="text-sm text-foreground/85">"{r.text}"</blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="text-sm font-semibold text-foreground">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.badge}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-24">
        <h2 className="font-display text-4xl md:text-6xl">Stop By Today</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Whether it's lunch with friends, a quick errand, or planning your next visit — we're ready when you are.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md bg-cta px-6 py-3.5 text-base font-semibold text-cta-foreground shadow-[var(--shadow-cta)]">
            <Phone className="h-5 w-5" /> {PHONE}
          </a>
          <a href={MAPS_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold backdrop-blur hover:bg-white/20">
            <Navigation className="h-5 w-5" /> Directions
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-xl">P</span>
            <span className="font-display text-2xl text-foreground">Price Crossing</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">Olivette's neighborhood shopping center — dining, retail, and services since day one.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Visit</div>
          <p className="mt-3 text-sm text-muted-foreground">{ADDRESS}</p>
          <a href={MAPS_HREF} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-cta">Get directions <ArrowRight className="h-3 w-3" /></a>
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Contact</div>
          <a href={PHONE_HREF} className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Phone className="h-4 w-4" /> {PHONE}</a>
          <a href="mailto:hello@pricecrossing.com" className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" /><span>hello@pricecrossing.com</span></a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Price Crossing. All rights reserved.</span>
          <span>9200 Olive Blvd, Olivette, MO 63132</span>
        </div>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2 rounded-full bg-cta px-5 py-3.5 text-sm font-semibold text-cta-foreground shadow-[var(--shadow-cta)] md:hidden"
    >
      <Phone className="h-4 w-4" /> Call Now · {PHONE}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Directory />
        <Visit />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
