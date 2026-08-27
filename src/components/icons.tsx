import type { ServiceIcon } from "@/lib/bookkeeping-content";

type IconProps = {
  name: ServiceIcon;
  className?: string;
};

export function ServiceLineIcon({ name, className }: IconProps) {
  const paths: Record<ServiceIcon, React.ReactNode> = {
    ledger: (
      <>
        <path d="M6 3h12a2 2 0 0 1 2 2v16H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M8 7h8M8 11h8M8 15h4" />
      </>
    ),
    bank: (
      <>
        <path d="m3 9 9-5 9 5M5 10h14M6 10v7M10 10v7M14 10v7M18 10v7M4 20h16" />
      </>
    ),
    invoice: (
      <>
        <path d="M6 3h9l3 3v15l-3-2-3 2-3-2-3 2V3Z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
    report: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 7 6-5 6 7 5-4" />
      </>
    ),
    tax: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="16" r="3" />
        <path d="m18 6-12 12" />
      </>
    ),
    cloud: (
      <>
        <path d="M7 18h11a4 4 0 0 0 .5-7.97A7 7 0 0 0 5.1 8.1 5 5 0 0 0 7 18Z" />
        <path d="m9 13 3-3 3 3M12 10v6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m5 10 3 3 7-7" />
    </svg>
  );
}
