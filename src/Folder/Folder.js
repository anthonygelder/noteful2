import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css'

class Folder extends Component {

    render() {
        return (
            <NavLink to={`/folder/${this.props.id}`}>
                <div className="folder">
                        <h2>{this.props.name}</h2>
                </div>
            </NavLink>
        )
    }
}

export default Folder;