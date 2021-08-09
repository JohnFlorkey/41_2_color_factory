import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ColorForm({ addColor }) {
  const initialState = {
    name: "",
    color: "#000000",
  };
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(() => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor({ [formData.name]: formData.color });
    history.push("/colors");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name Your Color</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="color"
          name="color"
          id="color"
          value={formData.color}
          onChange={handleChange}
        />
        <button>Add Color</button>
      </form>
    </div>
  );
}

export default ColorForm;
