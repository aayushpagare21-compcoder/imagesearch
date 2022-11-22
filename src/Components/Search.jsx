import React, { useState } from "react";
import Results from "./Results";

import "./Search.css";

function Search() {
  const [img, setImg] = useState("");

  return (
    <> 
      <div className="searchbar"> 
       <h1> Search Image Word By Word </h1>
        <input
          type="search"
          name=""
          id=""
          onChange={(event) => {
            setImg(event.target.value);
          }} 
          placeholder="Search Image"
        />
      </div>

      <Results s={img}></Results> 
    </>
  );
}

export default Search;
