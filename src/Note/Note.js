import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Note extends Component {

    render() {
        return (
            <div>
                <NavLink to={`/note/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </NavLink>
                <p>Modified on {this.props.modified}</p>
                <button>Delete Note</button>
            </div>
        )
    }
}

export default Note;