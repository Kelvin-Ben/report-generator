const DUMMY_REPORTS = [
  {
    id: "1",
    title: "Monthly Sales Report",
    date: "2024-04-01",
    time: "08:00 AM",
    image: "images/download.svg",
  },
  {
    id: "2",
    title: "Expense Summary",
    date: "2024-04-05",
    time: "09:30 AM",
    image: "images/download.svg",
  },
  {
    id: "3",
    title: "Profit Analysis",
    date: "2024-04-10",
    time: "11:15 AM",
    image: "images/download.svg",
  },
  {
    id: "4",
    title: "Quarterly Budget Review",
    date: "2024-03-20",
    time: "10:45 AM",
    image: "images/download.svg",
  },
  {
    id: "5",
    title: "Yearly Financial Statement",
    date: "2024-02-15",
    time: "02:00 PM",
    image: "images/download.svg",
  },
  {
    id: "6",
    title: "Marketing Campaign Analysis",
    date: "2024-03-05",
    time: "04:30 PM",
    image: "images/download.svg",
  },
  {
    id: "7",
    title: "Annual Performance Review",
    date: "2024-02-10",
    time: "01:45 PM",
    image: "images/download.svg",
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
      reportDate.getFullYear() === year && reportDate.getMonth() === month - 1
    );
  });
  return filteredReports;
}
