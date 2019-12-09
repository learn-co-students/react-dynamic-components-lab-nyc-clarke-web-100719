import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return(

    <div className="comment" >
        {this.props.commentText}
    </div>


        );

        // const newValue = this.props.value * 2;
        // return this.props.value > 100 ? null : ( <div>
        //     <Example value={newValue} />
        // </div>)
    }
}