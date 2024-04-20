import { useRouter } from "next/router";

import { getAllReports } from "@/dummy-data";
import ReportList from "@/components/reports/report-list";
import ReportSearch from "@/components/reports/report-search";
import { Fragment } from "react";
function Reports() {
  const router = useRouter();
  const allReports = getAllReports();
  function findReportHandler(year, month) {
    const fullPath = `/reports/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <Fragment>
      <ReportSearch onSearch={findReportHandler} />
      <ReportList items={allReports} />
    </Fragment>
  );
}
export default Reports;
