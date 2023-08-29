import React from "react";

function Filter() {
  return (
    <div className="filter_container">
      <ul>
        <li>
          <div>
            <p>Frontend</p>
          </div>
          <button>
            <img src="../../public/images/icon-remove.svg" alt="" />
          </button>
        </li>
        <li>
          <div>
            <p>CSS</p>
          </div>
          <button>
            <img src="../../public/images/icon-remove.svg" alt="" />
          </button>
        </li>
        <li>
          <div>
            <p>JavaScript</p>
          </div>
          <button>
            <img src="../../public/images/icon-remove.svg" alt="" />
          </button>
        </li>
      </ul>

      <button>Clear</button>
    </div>
  );
}

export default Filter;
