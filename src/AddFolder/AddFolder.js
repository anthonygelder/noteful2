import React, { Component } from 'react';
import Context from '../Context/Context'
import { withRouter } from 'react-router-dom';

const { DB_URL } = require('../config')

class AddFolder extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            folder_name: ''
        }
    }

    updateName(name) {
        this.setState({folder_name: name});
    }

    handleSubmit(event) {
        event.preventDefault();
        const folder_name = this.state;
        this.addFolder(folder_name, this.context.addFolder)
    }

    addFolder(folder, cb) {
        console.log(DB_URL)
        fetch(`${DB_URL}api/folders`, {
            method: 'POST',
            body: JSON.stringify(folder),
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

        return (
            <>        
                <form className="addFolder" onSubmit={e => this.handleSubmit(e)}>
                    <h2>Add a folder</h2>
                    <div className="form-group">
                        <label htmlFor="name">Folder Name </label>
                        <input required type="text" name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
                    </div>
                    <button type="submit">
                        Add
                    </button>
                </form>
            </>
        );
    }
}

export default withRouter(AddFolder);