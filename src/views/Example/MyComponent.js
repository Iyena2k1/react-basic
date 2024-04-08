import React from "react";

// class component
class MyComponent extends React.Component {
  /*
    JSX cho phép hàm của js trả ra html
    JSX => return 1 khối code

    Muốn in ra 2 thẻ div mà không phải bọc 1 thẻ ngoài
    ta dùng thẻ <React.Fragment> hay <></>
    
    state giúp các dữ liệu có thể thay đổi mà k phải resest

    */

  state = {
    name: "Yen",
    address: "Phu Yen",
  };

  //demo

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    let name = "Yen";
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          hello my component, My name is {this.state["name"]}
        </div>
        <div className="second">My address: {this.state.address}</div>
      </>
    );
  }
}

export default MyComponent;
