import React, { Component } from 'react';

class Note extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Modified on {this.props.modified}</p>
                <button>Delete Note</button>
            </div>
        )
    }
}

export default Note;