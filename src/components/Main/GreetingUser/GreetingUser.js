import React, { Component } from "react";
import GreetingUserList from "./GreetingUserList/GreetingUserList";

class GreetingUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, fname: "Eduard", lname: "Tiutiunnyk" },
        { id: 4, fname: "Andrey", lname: "Bober" },
        { id: 3, fname: "Ivan", lname: "Sobol" },
        { id: 2, fname: "Tim", lname: "Pashkov" },
      ],
      isSortByIdUp: true,
      isSortByFirstName: true,
    };
  }

  sortById = () => {
    const { users, isSortByIdUp } = this.state;
    const usersCopy = [...users];
    usersCopy.sort(function (a, b) {
      if (isSortByIdUp) {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
    this.setState({ users: usersCopy, isSortByIdUp: !isSortByIdUp });
  };

  sortByFirstName = () => {
    const { users, isSortByFirstName } = this.state;
    const usersCopy = [...users];
    usersCopy.sort(function (a, b) {
      if (isSortByFirstName) {
        return a.fname > b.fname ? 1 : -1;
      }
      if (!isSortByFirstName) {
        return a.fname < b.fname ? 1 : -1;
      }
      return 0;
    });
    this.setState({ users: usersCopy, isSortByFirstName: !isSortByFirstName });
  };

  render() {
    const { isSortByIdUp, isSortByFirstName, users } = this.state;
    return (
      <section>
        <GreetingUserList users={users} />
        <button onClick={this.sortById}>
          Sort by ID: {isSortByIdUp ? "Down" : "Up"}
        </button>
        <br />
        <button onClick={this.sortByFirstName}>
          Sort by First Name: {isSortByFirstName ? "Down" : "Up"}
        </button>
      </section>
    );
  }
}

export default GreetingUser;
