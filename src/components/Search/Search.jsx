import React, { useState } from "react";
import "./Search.css";
import Card from "../Result_Card/Card";
import TextField from "@mui/material/TextField";
import DefaultCard from "../Result_Card/DefaultCard";

const Search = () => {
  const [data, setData] = useState("");

  const inputEvent = (event) => {
    const input = event.target.value;
    setData(input);
  };
  return (
    <>
      <div className="main-div">
        <TextField
          id="standard-basic"
          label="Search here..."
          variant="standard"
          type="text"
          value={data}
          onChange={inputEvent}
          color="warning"
          className="input"
        />
        {data === "" ? <DefaultCard /> : <Card name={data} />}
      </div>
    </>
  );
};

export default Search;
