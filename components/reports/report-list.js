import ReportItem from "./report-item";
import classes from './report-list.module.css'

function ReportList(props) {
  const { items } = props;
  return (
    <div className={classes.report_container}>
    <h1 className={classes.title}>All Reports</h1>
      <div className={classes.content}>
        <span className={classes.report_title}>Date</span>
        <span className={classes.report_title}>Report Name</span>
        <span className={classes.report_title}>Download</span>
      </div>
      <ul className={classes.list}>
        {items.map((report) => (
          <ReportItem
            key={report.id}
            title={report.title}
            date={report.date}
            time={report.time}
            image={report.image}
          />
        ))}
      </ul>
    </div>
  );
}
export default ReportList;
