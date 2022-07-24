import React from "react";
import GreetingUserItem from "./GreetingUserItem/GreetingUserItem";
import "./GreetingUserList.css";

const GreetingUserList = (props) => {
  const users = props.users;
  return (
    <ul className="user_list">
      {users.map((user) => (
        <GreetingUserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default GreetingUserList;
