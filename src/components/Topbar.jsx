import "../styles/global.css";

export default function Topbar({ switchIMF, setSearch }) {
  return (
    <>
      <div className="topbar">
        <div className="heading-typing">IndiaDataHub Dashboard</div>

        <button className="btn" onClick={switchIMF}>
          Load IMF Dataset
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Search by title, category, region..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
    </>
  );
}
