import React from "react";
import { useState } from "react";

const names = ["Suad", "Irfan", "Mirza", "Mejla"];

const Filter = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      {names
        .filter((el) => {
          if (search == "") {
            return el;
          } else if (el.toLowerCase().includes(search.toLowerCase())) {
            return el;
          }
        })
        .map((el) => {
          return (
            <div>
              <p>{el}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Filter;
