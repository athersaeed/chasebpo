export type ServiceIcon =
  | "ledger"
  | "bank"
  | "invoice"
  | "report"
  | "tax"
  | "cloud";

export type BookkeepingPageContent = {
  city: "Toronto" | "Mississauga";
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroNote: string;
  introTitle: string;
  intro: string;
  reasons: Array<{ title: string; body: string }>;
  services: Array<{ icon: ServiceIcon; title: string; body: string }>;
  process: Array<{ title: string; body: string }>;
  industries: string[];
  closingTitle: string;
  closingBody: string;
};

const sharedServices: BookkeepingPageContent["services"] = [
  {
    icon: "ledger",
    title: "Daily transaction recording",
    body: "Keep sales, purchases, expenses, and bank activity organized in one reliable set of books.",
  },
  {
    icon: "bank",
    title: "Bank reconciliations",
    body: "Match your records to bank activity each month so errors and missing transactions surface early.",
  },
  {
    icon: "invoice",
    title: "Payables & receivables",
    body: "Track what your business owes and what customers owe you, with clearer payment visibility.",
  },
  {
    icon: "report",
    title: "Monthly financial reports",
    body: "Receive clean, readable reports that make cash flow, expenses, and performance easier to understand.",
  },
  {
    icon: "tax",
    title: "Year-end tax support",
    body: "Prepare organized records for filing, GST/HST requirements, and a smoother handoff to your accountant.",
  },
  {
    icon: "cloud",
    title: "Cloud bookkeeping support",
    body: "Work remotely with a bookkeeping team using secure, accessible digital tools and shared records.",
  },
];

const sharedProcess: BookkeepingPageContent["process"] = [
  {
    title: "Free consultation",
    body: "We learn how your business operates, what is falling behind, and what you need from your books.",
  },
  {
    title: "Secure onboarding",
    body: "Your accounts and records are organized into a clear, protected workflow with defined responsibilities.",
  },
  {
    title: "Ongoing bookkeeping",
    body: "Our team maintains day-to-day records and reconciles your accounts on an agreed schedule.",
  },
  {
    title: "Reporting & year-end prep",
    body: "You receive regular financial reporting and organized records when tax season arrives.",
  },
];

export const bookkeepingPages: Record<
  "toronto" | "mississauga",
  BookkeepingPageContent
> = {
  toronto: {
    city: "Toronto",
    slug: "bookkeeping-services-in-toronto",
    eyebrow: "Remote bookkeeping for Toronto businesses",
    title: "Clear books. Better decisions. More time to grow.",
    summary:
      "Professional bookkeeping services that keep your Toronto business organized, compliant, and ready for what comes next.",
    heroNote: "Flexible support built around your business",
    introTitle: "Bookkeeping that gives Toronto business owners clarity",
    intro:
      "Your books should tell you where the business stands, not create another task on your list. ChaseBPO organizes the day-to-day details, supports tax preparation, and turns financial activity into information you can actually use.",
    reasons: [
      {
        title: "Stay ready for CRA requirements",
        body: "Accurate records make tax filing, GST/HST remittances, payroll, and audit preparation far less stressful.",
      },
      {
        title: "See your financial health clearly",
        body: "Consistent reporting helps you understand expenses, cash flow, and the decisions your business can afford to make.",
      },
      {
        title: "Get time back for the business",
        body: "Leave repetitive reconciliations and spreadsheet work to a dedicated team while you focus on customers and growth.",
      },
    ],
    services: sharedServices,
    process: sharedProcess,
    industries: [
      "Real estate & construction",
      "Freelancers & consultants",
      "E-commerce & retail",
      "Healthcare & wellness",
      "Professional services",
      "Growing small businesses",
    ],
    closingTitle: "Ready to make your finances simpler?",
    closingBody:
      "Talk with our Toronto bookkeeping team about the work you need handled and the reporting you want to see.",
  },
  mississauga: {
    city: "Mississauga",
    slug: "bookkeeping-services-mississauga",
    eyebrow: "Accounting support for Mississauga businesses",
    title: "Professional bookkeeping, without the back-office burden.",
    summary:
      "Remote accounting and bookkeeping support designed to help Mississauga small businesses stay accurate, current, and in control.",
    heroNote: "A dependable extension of your team",
    introTitle: "Practical bookkeeping tailored to your business",
    intro:
      "Managing the books can become a full-time distraction when you are running a growing company. ChaseBPO provides a structured remote workflow for transaction recording, reconciliations, reporting, and year-end preparation.",
    reasons: [
      {
        title: "Support that fits your operation",
        body: "Choose the bookkeeping tasks and reporting cadence that match the way your business actually works.",
      },
      {
        title: "Current, accurate records",
        body: "A consistent monthly process reduces the scramble, catches discrepancies, and keeps information ready when you need it.",
      },
      {
        title: "Remote and easy to access",
        body: "A cloud-based workflow keeps collaboration efficient without adding another person or process to your office.",
      },
    ],
    services: sharedServices,
    process: sharedProcess,
    industries: [
      "Local service businesses",
      "Retail & e-commerce",
      "Independent professionals",
      "Construction & trades",
      "Healthcare practices",
      "Startups & small teams",
    ],
    closingTitle: "Take bookkeeping off your plate.",
    closingBody:
      "Tell us what your Mississauga business needs. We will help you build a clearer, more dependable bookkeeping routine.",
  },
};
