import React, {Component} from 'react';
import FolderList from './FolderList/FolderList';
import Sidebar from './Sidebar/Sidebar'
import NoteDetail from './NoteDetail/NoteDetail'
import NoteList from './NoteList/NoteList'
import FilteredNotes from './FilteredNotes/FilteredNotes'
import { Route, Link } from 'react-router-dom';
import Context from './Context/Context'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      folders: []
    };
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId)
    this.setState({
      notes: newNotes
    })
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => response.json())
      .then(data => {
        this.setState({
          folders: data
        })
    })
    fetch('http://localhost:9090/notes')
    .then(response => response.json())
    .then(data => {
      this.setState({
        notes: data
      })
    })
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote
    }
    return (
      <Context.Provider value={contextValue}>
        <div>
          <Link to='/'>
            <h1>
              Noteful
            </h1>
          </Link>
          <div>
            <Route exact path='/' render={() => <FolderList /> } />
            <Route exact path='/folder/:folder_id' render={() => <FolderList /> } />
            <Route exact path='/note/:note_id' render={(props) => <Sidebar nav={props} /> }/>
          </div>
          <div>
            <Route exact path='/' render={() => <NoteList /> } />
            <Route exact path='/folder/:folder_id' render={(routeProps) => <FilteredNotes folderId={routeProps.match.params.folder_id}/> }/>
            <Route exact path='/note/:note_id' render={(routeProps) => <NoteDetail folderId={routeProps}/> }/>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;