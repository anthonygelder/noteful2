import React, { Component } from 'react';
import Context from '../Context/Context'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './NoteDetail.css'

const { DB_URL } = require('../config')

function deleteNoteRequest(noteId, cb) {
    fetch(`${DB_URL}api/notes/${noteId}`, {
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
            // return res.json()
        })
        .then(data => {
            cb(noteId)
        })
        .catch(error => {
            console.error(error)
        })
    }


class NoteDetail extends Component {
    static contextType = Context;

    
    
    render() {
        const { notes } = this.context
        const { note_id } = this.props.match.params
        const _note = notes.filter(note => +note.id === +note_id).shift()

        return (
            <>
                <div className="note">
                    <h2>{_note.note_name}</h2>
                    <p>Modified on {_note.date_created.slice(0, 10)}</p> 
                    <Link to={'/'}>
                    <button onClick={() => {
                        deleteNoteRequest(
                            _note.id,
                            this.context.deleteNote
                        )
                    }}>Delete Note</button>
                    </Link>
                </div>
                <p>{_note.content}</p>
            </>
        )
    }
}

NoteDetail.propTypes = {
    props: PropTypes.object.isRequired
};

export default withRouter(NoteDetail);