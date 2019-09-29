import React, { Component } from 'react';
import Context from '../Context/Context'
import { withRouter } from 'react-router-dom';

class AddFolder extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    updateName(name) {
        this.setState({name: name});
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state;
        this.addFolder(name, this.context.addFolder)
    }

    addFolder(folder, cb) {
        fetch(`http://localhost:9090/folders`, {
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