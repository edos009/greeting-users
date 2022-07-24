import React, { Component } from "react";
import GreetingUserList from "./GreetingUserList/GreetingUserList";
import SortByIdBtn from "./SortByIdBtn/SortByIdBtn";
import SortByFirstNameBtn from "./SortByFirstNameBtn/SortByFirstNameBtn";

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
        <SortByIdBtn sortById={this.sortById} isSortByIdUp={isSortByIdUp} />
        <SortByFirstNameBtn
          sortByFirstName={this.sortByFirstName}
          isSortByFirstName={isSortByFirstName}
        />
        <GreetingUserList users={users} />
      </section>
    );
  }
}

export default GreetingUser;
