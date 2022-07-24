import React, { Component } from "react";
import "./GreetingUserItem.css";

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
      <div className="user_item_box">
        <li className="user_item">
          {id}. {isSayHello ? "Hello" : "Goodbye"} {fname} {lname}
        </li>
        <button onClick={this.sayGoodbye} className="btn_say_goodbye">
          Say {isSayHello ? 'goodbye' : 'hello'}
        </button>
      </div>
    );
  }
}

export default GreetingUserItem;
