import React, {createContext, useState, useContext} from 'react';

const NoteContext     = createContext();
export const useNotes = () => useContext(NoteContext);

export default function NoteProvider({children}) {

    const [selectNoteId, setSelectNoteId] = useState(null);

    return (
        <NoteContext.Provider value={{
            selectNoteId,
            setSelectNoteId,
        }}>
            {children}
        </NoteContext.Provider>
    );
}
