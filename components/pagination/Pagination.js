import classes from "./Pagination.module.css";
function Pagination({
  currentPage,
  reportsPerPage,
  onPageChange,
  totalReports,
}) {
  const totalPages = Math.ceil(totalReports / reportsPerPage);

  function prevPage() {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  }
  function changeColorPage(pageNumber) {
    onPageChange(pageNumber);
  }
  function nextPage() {
    if (currentPage !== totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <nav>
      <ul className={classes.paginator}>
        <li className={classes.page_item}>
          <button
            className={classes.page_link}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`${classes.page_item} ${
              currentPage === index + 1 ? classes.active : ""
            }`}
          >
            <button
              className={classes.page_link}
              onClick={() => changeColorPage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li className={classes.page_item}>
          <button
            className={classes.page_link}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
