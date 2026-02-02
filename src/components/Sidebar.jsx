import { useState } from "react";
import "../styles/global.css";

export default function Sidebar({ categories }) {
  const [openRegion, setOpenRegion] = useState(null);

  const toggleRegion = (region) => {
    setOpenRegion(openRegion === region ? null : region);
  };

  return (
    <div className="sidebar">
      <h3>Categories</h3>

      {Object.keys(categories || {}).map((region) => (
        <div key={region}>
          <h4
            className="region-header"
            onClick={() => toggleRegion(region)}
          >
            {region} {openRegion === region ? "▲" : "▼"}
          </h4>

          <ul
            className="country-list"
            style={{
              display: openRegion === region ? "block" : "none",
            }}
          >
            {Object.keys(categories[region]).map((country) => (
              <li
                key={country}
                style={{ margin: "7px 0", cursor: "pointer" }}
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
