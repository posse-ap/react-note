import React, {createContext, useState, useContext} from 'react';
import noteData                                     from './note-data.json';
import {v4}                                         from 'uuid';

const NoteContext     = createContext();
export const useNotes = () => useContext(NoteContext);

export default function NoteProvider({children}) {

    const [notes, setNotes]           = useState(noteData);
    const [selectNote, setSelectNote] = useState(notes[2]);

    const addNote = () => {
        const newNote = {
            id       : v4(),
            title    : '',
            body     : '',
            updatedAt: (new Date()).toISOString(),
        };

        setNotes([newNote, ...notes]);
        setSelectNote(newNote);
    };

    const deleteSelectNote = () => {
        setNotes(notes.filter(note => note.id !== selectNote.id));
        setSelectNote(null);
    };

    const updateNote = (note) => {
        const updateNote = {...note, updatedAt: (new Date()).toISOString()};
        setNotes(notes.map(n => (n.id === note.id ? updateNote : n)));
        setSelectNote(updateNote);
    };

    const updateSelectNote = (id) => setSelectNote({...notes.find(note => note.id === id)});

    return (
        <NoteContext.Provider value={{
            notes,
            addNote,
            deleteSelectNote,
            updateNote,
            selectNote,
            updateSelectNote,
        }}>
            {children}
        </NoteContext.Provider>
    );
}
