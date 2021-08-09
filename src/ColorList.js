import React from "react";
import { v4 as uuid } from "uuid";

function ColorList({ colors }) {
  console.log(colors);
  return (
    <div>
      <div>
        <a href="/colors/new">Add a color</a>
      </div>
      <div>
        <ul>
          {Object.keys(colors).map((c) => (
            <li key={uuid()}>
              <a href={`/colors/${c}`}>{c}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ColorList;
