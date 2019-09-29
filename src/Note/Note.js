import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../Context/Context'
import '../NoteDetail/NoteDetail.css'

function deleteNoteRequest(noteId, cb) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(error => {
                throw error
            })
        }
        return res.json()
        })
        .then(data => {
            cb(noteId)
        })
        .catch(error => {
            console.error(error)
    })
}

class Note extends Component {
    static contextType = Context;

    render() {
        return (
            <Context.Consumer>
                {(context) =>(
                <div className="note">
                    <NavLink to={`/note/${this.props.id}`}>
                        <h2>{this.props.name}</h2>
                    </NavLink>
                    <p>Modified on {this.props.modified.slice(0, 10)}</p>
                    <button onClick={() => {
                        deleteNoteRequest(
                            this.props.id,
                            this.context.deleteNote
                        )
                    }}>
                        Delete Note
                    </button>
                </div>)}
            </Context.Consumer>
        )
    }
}

export default Note;