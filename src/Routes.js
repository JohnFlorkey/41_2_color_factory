import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";

function Routes() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const localColors = localStorage.getItem("colors");
    localColors ? setColors(JSON.parse(localColors)) : setColors([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  const addColor = (newColor) => {
    setColors((oldColors) => ({
      ...newColor,
      ...oldColors,
    }));
  };
  return (
    <Switch>
      <Route exact path="/colors/new">
        <ColorForm addColor={addColor} />
      </Route>
      <Route exact path="/colors/:name">
        <ColorDetail colors={colors} />
      </Route>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
    </Switch>
  );
}

export default Routes;
