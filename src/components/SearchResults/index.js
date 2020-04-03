import React from "react";
import "./style.css";

const SearchResults = props => {
  return (
    <div className="row cardRow">
      <div className="col-md-4 employeeCard">
        <h2 className="firstName">{props.firstName + " " + props.lastName}</h2>
        <h4 className="bodyText">{props.title + ", " + props.department}</h4>
        <h5 className="bodyText">DOB: {props.dob}</h5>
        <h6 className="bodyText">Salary: ${props.salary}</h6>
        <img src={props.image} className="icon" />
      </div>
    </div>
  );
};
export default SearchResults;
