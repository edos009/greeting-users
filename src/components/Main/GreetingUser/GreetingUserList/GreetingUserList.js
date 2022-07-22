import React from "react";
import GreetingUserItem from "./GreetingUserItem/GreetingUserItem";

const GreetingUserList = (props) => {
  const users = props.users;
  return (
    <ul>
      {users.map((user) => (
        <GreetingUserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default GreetingUserList;
