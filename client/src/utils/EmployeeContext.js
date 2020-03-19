import React from "react";

const EmployeeContext = React.createContext({
  employeeDb: [],
  search: "",
  originalDb: [],
  dropdownVal: ""
});

export default EmployeeContext;
