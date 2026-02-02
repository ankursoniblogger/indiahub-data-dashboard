export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <button
        className="btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span>Page {page} of {totalPages}</span>

      <button
        className="btn"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
