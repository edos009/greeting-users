// import React from "react";

// const GreetingUserItem = (props) => {
//   const { user } = props;
//   return (
//     <>
//       <li>
//         {user.id}. Hello {user.fname} {user.lname}
//       </li>
//       <button >Say goodbye</button>
//     </>
//   );
// };

// export default GreetingUserItem;

import React, { Component } from "react";

class GreetingUserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSayHello: true,
    };
  }

  sayGoodbye = () => {
    const { isSayHello } = this.state;
    this.setState({ isSayHello: !isSayHello });
  };


  render() {
    const { isSayHello } = this.state;
    const {id, fname, lname} = this.props.user;

    return (
      <>
        <li>
          {id}. {isSayHello ? "Hello" : "Goodbye"} {fname}{" "}
          {lname}
        </li>
        <button onClick={this.sayGoodbye}>Say goodbye</button>
      </>
    );
  }
}

export default GreetingUserItem;
