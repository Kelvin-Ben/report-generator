const DUMMY_REPORTS = [
  {
    id: "1",
    title: "Monthly Sales Report",
    date: "2024-04-01",
    time: "08:00",
    image: "sales_report_image.jpg",
  },
  {
    id: "2",
    title: "Expense Summary",
    date: "2024-04-05",
    time: "09:30",
    image: "expense_summary_image.jpg",
  },
  {
    id: "3",
    title: "Profit Analysis",
    date: "2024-04-10",
    time: "11:15",
    image: "profit_analysis_image.jpg",
  },
  {
    id: "4",
    title: "Quarterly Budget Review",
    date: "2024-03-20",
    time: "10:45",
    image: "budget_review_image.jpg",
  },
  {
    id: "5",
    title: "Yearly Financial Statement",
    date: "2024-02-15",
    time: "14:00",
    image: "financial_statement_image.jpg",
  },
  {
    id: "6",
    title: "Marketing Campaign Analysis",
    date: "2024-03-05",
    time: "16:30",
    image: "marketing_analysis_image.jpg",
  },
  {
    id: "7",
    title: "Annual Performance Review",
    date: "2024-02-10",
    time: "13:45",
    image: "performance_review_image.jpg",
  },
];

export function getAllReports() {
  return DUMMY_REPORTS;
}
export function getFilteredReports(dateFilter) {
  const { year, month } = dateFilter;

  let filteredReports = DUMMY_REPORTS.filter((report) => {
    const reportDate = new Date(report.date);
    return (
      reportDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredReports;
}
