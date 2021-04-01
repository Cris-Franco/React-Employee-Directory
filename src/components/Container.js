import API from "../utils/API";
import React, { Component } from "react";
import SearchBox from "./SearchBox";
// import SearchBox from "./SearchBox"
import TableData from "./TableData";
import "./style.css";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: "",
  };

  componentDidMount() {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }
  sortByName = () => {
    const filtereds = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sorteds = filtereds.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sorteds);

      this.setState({
        filteredEmployees: sorteds,
        order: "desc",
      });
    } else {
      const sorteds = filtereds.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sorteds);

      this.setState({
        filteredEmployees: sorteds,
        order: "asc",
      });
    }
  };
}
export default Container;
