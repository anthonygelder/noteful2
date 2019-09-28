import React from 'react'



const Context = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {
        console.log("delete")
    }

})

export default Context