import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  employeeImage: function(query) {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.adorable.io/avatars/160/" +
        query +
        "@adorable.png"
    );
  }
};
