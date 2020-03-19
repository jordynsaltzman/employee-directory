import React from "react";
import "./style.css";

const SearchResults = props => {
  return (
    <div className="row cardRow">
      <div className="col-md-4 employeeCard">
        <h2>{props.firstName + " " + props.lastName}</h2>
        <h4>{props.title + ", " + props.department}</h4>
        <h5>DOB: {props.dob}</h5>
        <h6>Salary: ${props.salary}</h6>
        <img src={props.image} className="icon" />
      </div>
    </div>
  );
};
export default SearchResults;
