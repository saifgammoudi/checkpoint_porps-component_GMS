import React from "react";
import Cards from "./Cards";

const MoviesList = ({ data }) => {
  const handleData = (name) => alert(`${name}`);
  return (
    <div>
      {data.map((el) => (
        <Cards data={el} handleData={handleData} />
      ))}
    </div>
  );
};
export default MoviesList;
