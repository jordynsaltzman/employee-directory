import React, { useState, useEffect } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import API from "../../utils/API";
import employeeDb from "../../db/db.json";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

const Search = () => {
  const [employeeState, setEmployeeState] = useState({
    employeeDb,
    search: "",
    originalDb: employeeDb,
    dropdownVal: ""
  });

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const refreshEmployees = () => {
    for (let i = 0; i < employeeState.employeeDb.length; i++) {
      API.employeeImage(employeeState.employeeDb[i].firstName)
        .then(imageUrl => {
          employeeState.employeeDb[i].imageUrl = imageUrl.config.url.replace(
            "https://cors-anywhere.herokuapp.com/",
            ""
          );

          setEmployeeState({
            employeeDb: employeeState.employeeDb,
            search: employeeState.search,
            originalDb: employeeState.originalDb,
            dropdownVal: employeeState.dropdownVal
          });
          console.log(employeeState.employeeDb);
        })
        .catch(err => setError(err));
    }
  };

  useEffect(() => {
    // When the component mounts, update the title to be Employee Directory
    document.title = "Employee Directory";
    //load employees
    refreshEmployees();
  }, []);

  //start of handleinputchange funtion for the search bar
  const handleInputChange = event => {
    setEmployeeState({
      employeeDb,
      search: event.target.value.toLowerCase(),
      originalDb: employeeState.originalDb,
      dropdownVal: employeeState.dropdownVal
    });

    let newEmployeeDb = employeeState.employeeDb.filter(person => {
      if (employeeState.search != undefined) {
        return (
          person.firstName
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) > -1 ||
          person.lastName
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) > -1 ||
          person.title.toLowerCase().indexOf(event.target.value.toLowerCase()) >
            -1
        );
      } else {
        return person;
      }
    });

    if (event.target.value.length === 0) {
      setEmployeeState({
        employeeDb: employeeState.originalDb,
        search: event.target.value,
        originalDb: employeeState.originalDb,
        dropdownVal: employeeState.dropdownVal
      });
    } else {
      setEmployeeState({
        employeeDb: newEmployeeDb,
        search: event.target.value,
        originalDb: employeeState.originalDb,
        dropdownVal: employeeState.dropdownVal
      });
    }
  };
  //end of handleInput change function

  //function to sort employee db by salary
  const handleDropdownChange = event => {
    setEmployeeState({
      ...employeeState,
      dropdownVal: event.target.value
    });
    console.log(event.target.value);

    let sortedEmployees = employeeState.employeeDb.sort((a, b) => {
      return event.target.value === "1"
        ? a.salary - b.salary
        : b.salary - a.salary;
    });

    console.log(sortedEmployees);
    console.log("EMPLOYEESTATE.DROPDOWNVAL ");
    console.log(employeeState.dropdownVal);
  };

  return (
    <EmployeeContext.Provider value={employeeState}>
      <div>
        <SearchForm handleInputChange={handleInputChange} results={search} />
        <div className="row">
          <div
            className="col-md-12"
            style={{
              textAlign: "center",
              fontFamily: "'Work Sans', sans-serif"
            }}
          >
            <p>{employeeState.employeeDb.length} Results</p>
            <label htmlFor="sortBy">Sort By:</label>
            <select
              style={{ borderRadius: 3, margin: 5 }}
              onChange={handleDropdownChange}
              value={employeeState.dropdownVal}
            >
              <option value="0">Select One</option>
              <option value="1">Salary: Low - High</option>
              <option value="2">Salary: High - Low</option>
            </select>
          </div>
        </div>

        {employeeState.employeeDb.map(employee => {
          return (
            <SearchResults
              firstName={employee.firstName}
              lastName={employee.lastName}
              image={employee.imageUrl}
              title={employee.title}
              department={employee.department}
              dob={employee.birthday}
              salary={employee.salary}
            />
          );
        })}
      </div>
    </EmployeeContext.Provider>
  );
};

export default Search;
