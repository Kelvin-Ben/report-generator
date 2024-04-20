// import CsvDownload from "./icons/donwload";
import classes from "./report-item.module.css";

function ReportItem(props) {
  const { title, date, time, image } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = time
  return (
    <tr className={classes.item}>
      <td className={classes.time}>
        <td className={classes.date}>
          <span>{formattedDate}</span>
          <span>{formattedTime}</span>
        </td>
      </td>
      <td className={classes.title}>
        <h3>{title}</h3>
      </td>
      <td className={classes.download_icon}>
        <img src={"/" + image} className={classes.download} />
      </td>
    </tr>
  );
}
export default ReportItem;
