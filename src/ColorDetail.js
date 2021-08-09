import React from "react";
import { useParams } from "react-router-dom";

function ColorDetail({ colors }) {
  const { name } = useParams();
  const color = colors[name];
  // const color = colors.filter((c) => c.name === name);
  console.log(name);
  console.log(color);
  console.log(colors);
  return (
    <div>
      <div>This is the color {name}</div>
      <div>The hex identifier is {color}</div>
      <div
        style={{
          backgroundColor: color,
          width: "vmax",
          height: 300,
        }}
      ></div>
      <a href="/colors">
        <button>Home</button>
      </a>
    </div>
  );
}

export default ColorDetail;
