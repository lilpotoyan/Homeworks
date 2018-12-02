import React, { Component } from "react";

class Square extends Component {
   constructor(props) {
       super(props);
       this.state = {
           color: "blue"
       };
   }

   onClick = (event) => {
       this.setState((state, props) => (
           {color: state.color === props.color ? "blue" : props.color}
       ));
   }

   render() {
       return (
           <div
               onClick={this.onClick}
               className="Cubik"
               style={{
                   backgroundColor: this.state.color,
                   color: "#fff"
               }}
           />
       );
   }
}

export default Square;