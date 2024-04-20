import { Inter } from "next/font/google";
import { Fragment } from "react";
import Reports from "./reports";
import { getAllReports } from "@/dummy-data";
import ReportList from "@/components/reports/report-list";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const allReports = getAllReports();
  return (
    <>
      <ReportList items={allReports} />
    </>
  );
}
