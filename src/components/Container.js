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
}
export default Container;
