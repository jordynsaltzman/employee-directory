import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="row formRow">
      <div className="col-md-12 titleDiv">
        <h1>Employee Directory</h1>
      </div>
      <div className="col-md-4">
        <form className="search">
          <div className="form-group">
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="search"
              list="term"
              type="text"
              className="form-control"
              placeholder="Search by First or Last Name"
              id="term"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
