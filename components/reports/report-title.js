import classes from "./report-title.module.css";
function ReportTitle(props) {
  const { date } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return (
    <section className={classes.title}>
      <h1>Reports in {formattedDate}</h1>
    </section>
  );
}
export default ReportTitle;
