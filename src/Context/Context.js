import React from 'react'
import dummyStore from '../dummy-store';


const Context = React.createContext({
    notes: dummyStore.notes,
    folders: dummyStore.folders
})

export default Context