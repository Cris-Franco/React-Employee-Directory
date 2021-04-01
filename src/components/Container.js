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
}
export default Container;
