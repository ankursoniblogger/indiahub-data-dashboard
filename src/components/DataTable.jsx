import { useState } from "react";

export default function DataTable({ data, sortData }) {
  const [sortField, setSortField] = useState(null);
  const [order, setOrder] = useState("asc");

  const handleSort = (field) => {
    const newOrder = sortField === field && order === "asc" ? "desc" : "asc";
    setSortField(field);
    setOrder(newOrder);
    sortData(field, newOrder);
  };

  return (
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("title")}>Title</th>
            <th onClick={() => handleSort("cat")}>Category</th>
            <th onClick={() => handleSort("subCat")}>SubCat</th>
            <th onClick={() => handleSort("unit")}>Unit</th>
            <th onClick={() => handleSort("region")}>Region</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr className="table-row" key={item.id}>
              <td>{item.title}</td>
              <td>{item.cat}</td>
              <td>{item.subCat}</td>
              <td>{item.unit}</td>
              <td>{item.region}</td>

              <td>
                <span className="icon-btn">👁</span>
                <span className="icon-btn">⭐</span>
                <span className="icon-btn">⬇️</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
