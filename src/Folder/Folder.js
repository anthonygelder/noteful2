import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Folder extends Component {

    render() {
        return (
            <div>
                <NavLink to={`/folder/${this.props.id}`}>
                    <h2>{this.props.name}</h2>
                </NavLink>
            </div>
        )
    }
}

export default Folder;