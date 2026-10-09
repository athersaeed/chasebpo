import Image from "next/image";
import Link from "next/link";

import { ArrowIcon, CheckIcon, ServiceLineIcon } from "@/components/icons";
import type { BookkeepingPageContent } from "@/lib/bookkeeping-content";

const phoneDisplay = "(647) 574-7151";
const phoneHref = "tel:+16475747151";
const email = "contact@chasebpo.com";

export function BookkeepingPage({ content }: { content: BookkeepingPageContent }) {
  const alternateCity = content.city === "Toronto" ? "Mississauga" : "Toronto";
  const alternateHref = content.city === "Toronto"
    ? "/bookkeeping-services-mississauga"
    : "/bookkeeping-services-in-toronto";
  const subject = `${content.city}%20bookkeeping%20consultation`;

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="topline">
          <div className="page-wrap topline-inner">
            <div className="topline-contact">
              <a href={phoneHref}>{phoneDisplay}</a>
              <span aria-hidden="true" />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <p>Remote support across the GTA</p>
          </div>
        </div>
        <div className="page-wrap nav-row">
          <Link className="brand" href="/bookkeeping-services-in-toronto" aria-label="ChaseBPO home">
            <Image alt="ChaseBPO" className="brand-logo" height={828} loading="eager" src="/images/chasebpo-logo.png" width={1024} />
          </Link>
          <nav aria-label="Primary navigation" className="desktop-nav">
            <Link href="/bookkeeping-services-in-toronto">Toronto</Link>
            <Link href="/bookkeeping-services-mississauga">Mississauga</Link>
            <a href="#services">Services</a>
            <a href="#process">How it works</a>
          </nav>
          <a className="button button-small" href={`mailto:${email}?subject=${subject}`}>
            Get a quotation <ArrowIcon className="button-arrow" />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="page-wrap hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-reveal hero-reveal-1">{content.eyebrow}</p>
            <h1 className="hero-reveal hero-reveal-2">{content.title}</h1>
            <p className="hero-summary hero-reveal hero-reveal-3">{content.summary}</p>
            <div className="hero-actions hero-reveal hero-reveal-4">
              <a className="button button-primary" href={`mailto:${email}?subject=${subject}`}>
                Book a free consultation <ArrowIcon className="button-arrow" />
              </a>
              <a className="text-link" href={phoneHref}>
                <span>Or call {phoneDisplay}</span><ArrowIcon />
              </a>
            </div>
            <p className="hero-note hero-reveal hero-reveal-4">
              <span aria-hidden="true"><CheckIcon /></span>{content.heroNote}
            </p>
          </div>
          <div className="hero-visual hero-reveal hero-reveal-3">
            <div className="hero-image-frame">
              <Image alt={`Bookkeeping workspace for a ${content.city} business`} fill loading="eager" sizes="(max-width: 900px) 100vw, 46vw" src="/images/bookkeeping-team.png" />
            </div>
            <div className="hero-float-card">
              <span className="float-card-icon"><ServiceLineIcon name="report" /></span>
              <div><strong>Know your numbers</strong><p>Accurate records. Clear monthly reporting.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service benefits">
        <div className="page-wrap trust-grid">
          <div><strong>Remote</strong><span>Easy online collaboration</span></div>
          <div><strong>Accurate</strong><span>Consistent monthly records</span></div>
          <div><strong>Practical</strong><span>Reporting you can understand</span></div>
          <div><strong>Flexible</strong><span>Support that scales with you</span></div>
        </div>
      </section>

      <section className="section page-wrap intro-section">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Why bookkeeping matters</p>
          <h2>{content.introTitle}</h2>
          <p>{content.intro}</p>
          <Link className="city-switch" href={alternateHref}>Also serving {alternateCity}<ArrowIcon /></Link>
        </div>
        <div className="reason-list">
          {content.reasons.map((reason, index) => (
            <article className="reason-card" key={reason.title}>
              <span className="reason-index">0{index + 1}</span>
              <div><h3>{reason.title}</h3><p>{reason.body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="page-wrap">
          <div className="section-heading centered-heading">
            <p className="eyebrow">What we take care of</p>
            <h2>Complete bookkeeping support, one clear workflow.</h2>
            <p>More than data entry. We keep the financial details organized so you can work from dependable information.</p>
          </div>
          <div className="services-grid">
            {content.services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon"><ServiceLineIcon name={service.icon} /></span>
                <h3>{service.title}</h3><p>{service.body}</p><span className="service-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-wrap split-feature">
        <div className="feature-image">
          <Image alt="Professional working in a modern office" fill sizes="(max-width: 900px) 100vw, 42vw" src="/images/bookkeeper-working.jpg" />
          <div className="feature-stat"><strong>One dependable process</strong><span>From daily records to year-end preparation</span></div>
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Bookkeeping + accounting</p>
          <h2>Clean records make every financial conversation better.</h2>
          <p>Bookkeeping maintains the day-to-day financial picture. Accounting uses that information for analysis, planning, and tax strategy. When both work from consistent records, you get faster answers and fewer surprises.</p>
          <ul className="check-list">
            <li><span><CheckIcon /></span>Better preparation for tax filing</li>
            <li><span><CheckIcon /></span>More reliable cash-flow visibility</li>
            <li><span><CheckIcon /></span>Cleaner handoffs to your accountant</li>
            <li><span><CheckIcon /></span>Stronger budgeting and planning</li>
          </ul>
          <a className="text-link dark-link" href={`mailto:${email}?subject=${subject}`}>Talk to a bookkeeper<ArrowIcon /></a>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="page-wrap">
          <div className="section-heading process-heading">
            <p className="eyebrow">How it works</p><h2>A simple path from scattered records to steady reporting.</h2>
          </div>
          <ol className="process-grid">
            {content.process.map((step, index) => (
              <li key={step.title}><span className="process-number">{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.body}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section page-wrap industries-section">
        <div className="section-heading"><p className="eyebrow">Who we help</p><h2>Built for the pace of small business.</h2></div>
        <div className="industry-pills">{content.industries.map((industry) => <span key={industry}>{industry}</span>)}</div>
      </section>

      <section className="cta-section">
        <div className="cta-glow" aria-hidden="true" />
        <div className="page-wrap cta-inner">
          <div><p className="eyebrow">Book a free consultation</p><h2>{content.closingTitle}</h2><p>{content.closingBody}</p></div>
          <div className="cta-actions">
            <a className="button button-primary" href={`mailto:${email}?subject=${subject}`}>Get a quotation<ArrowIcon className="button-arrow" /></a>
            <a className="cta-phone" href={phoneHref}>{phoneDisplay}</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-wrap footer-grid">
          <div className="footer-brand"><Image alt="ChaseBPO" height={828} src="/images/chasebpo-logo.png" width={1024} /><p>Remote bookkeeping and business support for companies across the Greater Toronto Area.</p></div>
          <div><h2>Bookkeeping</h2><Link href="/bookkeeping-services-in-toronto">Toronto</Link><Link href="/bookkeeping-services-mississauga">Mississauga</Link></div>
          <div><h2>Contact</h2><a href={phoneHref}>{phoneDisplay}</a><a href={`mailto:${email}`}>{email}</a></div>
        </div>
        <div className="page-wrap footer-bottom"><span>© {new Date().getFullYear()} ChaseBPO</span><span>Clear books. Confident business.</span></div>
      </footer>
    </main>
  );
}
