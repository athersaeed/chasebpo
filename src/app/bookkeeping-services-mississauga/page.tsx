import type { Metadata } from "next";
import { BookkeepingPage } from "@/components/bookkeeping-page";
import { bookkeepingPages } from "@/lib/bookkeeping-content";

export const metadata: Metadata = {
  title: "Bookkeeping Services in Mississauga | ChaseBPO",
  description: "Professional remote bookkeeping services for Mississauga small businesses, from daily transaction recording to monthly reporting and year-end preparation.",
};

export default function MississaugaBookkeepingPage() {
  return <BookkeepingPage content={bookkeepingPages.mississauga} />;
}
