import React, {Component} from 'react';
import FolderList from './FolderList/FolderList';
import Folder from './Folder/Folder';
import Note from './Note/Note'
import NoteList from './NoteList/NoteList'
import { Route, Link } from 'react-router-dom';
import dummyStore from './dummy-store';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: dummyStore.notes,
      folders: dummyStore.folders
    };
  }

  FolderListProps = () => {
    return (
      <FolderList
        folders={this.state.folders} />
    )
  }

  NoteListProps = () => {
    return (
      <NoteList
        notes={this.state.notes} />
    )
  }

  render() {
    return (
      <div>
        <Link to='/'>
          <h1>
            Noteful
          </h1>
        </Link>
        <div>
          <Route exact path='/'
          render={this.FolderListProps} />
          <Route exact path='/folder/:folder_id' render={this.FolderListProps} />
        </div>
        <div>
          <Route exact path='/' 
          render={this.NoteListProps} />
          <Route exact path='/folder/:folder_id' component={Note} />
        </div>
      </div>
    );
  }
}

export default App;