import React, { Component } from 'react';
import Folder from '../Folder/Folder';

class FolderList extends Component {
    render() {
    const folders = this.props.folders.map((folder, key) => <Folder {...folder} key={key} />)


        return (
            <div>
                {folders}
                <button>Add Folder</button>
            </div>
        )
    }
}

export default FolderList;