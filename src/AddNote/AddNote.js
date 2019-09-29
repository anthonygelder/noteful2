import React, { Component } from 'react';
import Context from '../Context/Context'
import { withRouter } from 'react-router-dom';

class AddNote extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: '',
            folderId: 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
    }

    updateName(name) {
        this.setState({name: name});
    }
    updateContent(content) {
        this.setState({content: content});
    }
    updateFolderId(folder) {
        this.setState({folderId: folder});
    }

    handleSubmit(event) {
        event.preventDefault();
        let now = new Date();
        const note = {
            name: this.state.name,
            content: this.state.content,
            folderId: this.state.folderId,
            modified: now
        }
        this.addNote(note, this.context.addNote)
    }

    addNote(note, cb) {
        fetch(`http://localhost:9090/notes`, {
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
            <option key={folder.id} value={folder.id}>{folder.name}</option>
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