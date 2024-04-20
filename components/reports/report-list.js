import ReportItem from "./report-item";
import classes from "./report-list.module.css";


function ReportList(props) {
  const { items } = props;
  return (
    <table className={classes.report_container}>
      <thead className={classes.content}>
        <tr className={classes.main_heading}>
          <th className={classes.report_title}>Date</th>
          <th className={classes.report_title}>Report Name</th>
          <th className={classes.report_title}>Download</th>
        </tr>
      </thead>
      <tbody className={classes.list}>
        {items.map((report) => (
          <ReportItem
            key={report.id}
            title={report.title}
            date={report.date}
            time={report.time}
            image={report.image}
          />
        ))}
      </tbody>
    </table>
  );
}
export default ReportList;
