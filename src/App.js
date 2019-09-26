import React, {Component} from 'react';
import FolderList from './FolderList/FolderList';
// import Folder from './Folder/Folder';
// import Note from './Note/Note'
import NoteList from './NoteList/NoteList'
import FilteredNotes from './FilteredNotes/FilteredNotes'
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
            render={() => <FolderList folders={this.state.folders} /> } />
          <Route exact path='/folder/:folder_id' render={() => <FolderList folders={this.state.folders} /> } />
        </div>
        <div>
          <Route exact path='/' 
            render={() => <NoteList notes={this.state.notes} /> } />
          <Route exact path='/folder/:folder_id' render={() => <FilteredNotes notes={this.state.notes} /> } />
        </div>
      </div>
    );
  }
}

export default App;