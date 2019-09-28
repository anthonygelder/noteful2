import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../Context/Context'

function deleteNoteRequest(noteId, cb) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        // call the callback when the request is successful
        // this is where the App component can remove it from state
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
                <div>
                    <NavLink to={`/note/${this.props.id}`}>
                        <h2>{this.props.name}</h2>
                    </NavLink>
                    <p>Modified on {this.props.modified}</p>
                    <button onClick={() => {
                        deleteNoteRequest(
                            this.props.id,
                            this.context.deleteNote
                        )
                    }}>
                        Delete Note
                    </button>
                </div>
                )}
            </Context.Consumer>
        )
    }
}

export default Note;