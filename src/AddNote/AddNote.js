import React, { Component } from 'react';
import Context from '../Context/Context'
import { withRouter } from 'react-router-dom';

const { DB_URL } = require('../config')

class AddNote extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            note_name: '',
            content: '',
            folder_id: '1'
        }
    }

    updateName(name) {
        this.setState({note_name: name});
    }
    updateContent(content) {
        this.setState({content: content});
    }
    updateFolderId(folder_id) {
        this.setState({folder_id: folder_id});
    }

    handleSubmit(event) {
        event.preventDefault();
        const note = {
            note_name: this.state.note_name,
            content: this.state.content,
            folder_id: this.state.folder_id,
        }
        this.addNote(note, this.context.addNote)
    }

    addNote(note, cb) {
        fetch(`${DB_URL}api/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
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
                this.props.history.push('/')
                cb(data)
            })
            .catch(error => {
                console.error(error)
        })
    }

    render() {
        const folderOptions = this.context.folders.map(folder => (
            <option key={folder.id} value={folder.id}>{folder.folder_name}</option>
        ))

        return (
            <>        
                <form className="addFolder" onSubmit={e => this.handleSubmit(e)}>
                    <h2>Add a note</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name </label>
                        <input required type="text" name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                        <label htmlFor="content">Content </label>
                        <input required type="text" name="content" id="content" onChange={e => this.updateContent(e.target.value)}/>
                        <label htmlFor="folder">Folder </label>
                        <select name="folder" id="folder" onChange={e => this.updateFolderId(e.target.value)}>
                            {folderOptions}
                        </select>
                    </div>
                    <button type="submit">
                        Add
                    </button>
                </form>
            </>
        );
    }
}

export default withRouter(AddNote);