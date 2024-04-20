import ReportList from "@/components/reports/report-list";
import ReportTitle from "@/components/reports/report-title";
import Button from "@/components/ui/button";
import { getFilteredReports } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function FilteredReportsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2022 ||
    (numMonth < 1) | (numMonth > 12)
  ) {
    return (
      <Fragment>
        <p className="alert">Invalid filter. Please adjust your values</p>
        <div className="center">
          <Button link="/reports">Show all Reports</Button>
        </div>
      </Fragment>
    );
  }
  const filteredReport = getFilteredReports({
    year: numYear,
    month: numMonth,
  });

  if (!filteredReport || filteredReport.length === 0) {
    return (
      <Fragment>
        <p className="alert">No report found for the chosen filter!</p>
        <div className="center">
          <Button link="/reports">Show all Reports</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ReportTitle date={date} />
      <ReportList items={filteredReport} />
    </Fragment>
  );
}
export default FilteredReportsPage;
