import type { Metadata } from "next";
import { BookkeepingPage } from "@/components/bookkeeping-page";
import { bookkeepingPages } from "@/lib/bookkeeping-content";

export const metadata: Metadata = {
  title: "Bookkeeping Services in Toronto | ChaseBPO",
  description: "Remote bookkeeping services for Toronto businesses, including reconciliations, financial reporting, payables, receivables, and year-end support.",
};

export default function TorontoBookkeepingPage() {
  return <BookkeepingPage content={bookkeepingPages.toronto} />;
}
