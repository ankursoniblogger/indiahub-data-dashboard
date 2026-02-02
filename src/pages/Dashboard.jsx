import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DataTable from "../components/DataTable";
import Pagination from "../components/Pagination";
import response1 from "../data/response1.json";
import response2 from "../data/response2.json";

export default function Dashboard() {
  const [categories, setCategories] = useState({});
  const [list, setList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const ITEMS = 10;

  useEffect(() => {
    setCategories(response1.categories);
    setList(response1.frequent);
    setFilteredData(response1.frequent);
  }, []);

  const switchIMF = () => {
    setList(response2.frequent);
    setFilteredData(response2.frequent);
    setPage(1);
  };

  useEffect(() => {
    const result = list.filter((item) =>
      item.title.toLowerCase().includes(search) ||
      item.cat.toLowerCase().includes(search) ||
      item.region.toLowerCase().includes(search)
    );

    setFilteredData(result);
    setPage(1);
  }, [search, list]);

  const sortData = (field, order) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (!a[field] || !b[field]) return 0;

      if (order === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setFilteredData(sorted);
  };

  const totalPages = Math.ceil(filteredData.length / ITEMS);
  const pageData = filteredData.slice((page - 1) * ITEMS, page * ITEMS);

  return (
    <div className="container">
      <Sidebar categories={categories} />

      <div className="content">
        <Topbar switchIMF={switchIMF} setSearch={setSearch} />

        <DataTable data={pageData} sortData={sortData} />

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
