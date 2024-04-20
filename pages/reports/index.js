import { useRouter } from "next/router";

import { getAllReports } from "@/dummy-data";
import ReportList from "@/components/reports/report-list";
import ReportSearch from "@/components/reports/report-search";
import { Fragment, useState } from "react";
import Pagination from "@/components/pagination/Pagination";

function Reports() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 3;
  const allReports = getAllReports();

  function findReportHandler(year, month) {
    const fullPath = `/reports/${year}/${month}`;

    router.push(fullPath);
  }
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <Fragment>
      <ReportSearch onSearch={findReportHandler} />
      <ReportList
        items={allReports.slice(
          (currentPage - 1) * reportsPerPage,
          currentPage * reportsPerPage
        )}
      />
      <Pagination
        totalReports={allReports.length}
        reportsPerPage={reportsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Fragment>
  );
}
export default Reports;
