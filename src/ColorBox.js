import React, { Component } from 'react';
let x = 0;
export default class ColorBox extends Component {
 
  
  render() {
    return (
      
      <div className="color-box" style={{opacity: this.props.opacity}}>
           {console.log(this.props.opacity)}
        {/* your conditional code here! */
          this.props.opacity >= 0.2 ? <ColorBox opacity={parseFloat((this.props.opacity-.1).toFixed(1))}/> : null 
        }
      </div>
    )
  }

}
//{console.log(this.props.opacity +": "+ x++)}
