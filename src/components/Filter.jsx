import { useState, useEffect } from "react";

function Filter({ tools, clearTools }) {
  const [inFilter, setInFilter] = useState(tools);
  console.log(inFilter, "filters");

  useEffect(() => {
    setInFilter(tools);
  }, [tools]);

  return (
    <div className="filter_container">
      <ul>
        {inFilter.map((toolFilter) => {
          return (
            <li key={toolFilter}>
              <div>
                <p>{toolFilter}</p>
              </div>
              <button>
                <img src="../../public/images/icon-remove.svg" alt="" />
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={clearTools}>Clear</button>
    </div>
  );
}

export default Filter;
