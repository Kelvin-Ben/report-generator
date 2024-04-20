// import CsvDownload from "./icons/donwload";
import classes from './report-item.module.css'

function ReportItem(props) {
  const { title, date, time, image } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    // hour12: true,
  });
  return (
    <li className={classes.item}>
      {/* <div className={classes.content}> */}
        <div className={classes.time}>
          <time className={classes.date}>
            <span>{formattedDate}</span>
            <span>{formattedTime}</span>
          </time>
        </div>
        <div className={classes.title}>
          <h3>{title}</h3>
        </div>
        <img src={"/" + image} className={classes.download}/>
      {/* </div> */}
    </li>
  );
}
export default ReportItem;
