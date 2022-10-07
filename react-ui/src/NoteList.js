import React      from 'react';
import Note       from './Note';
import {useNotes} from './NoteProvider';

export default function NoteList() {

    const {notes, selectNote} = useNotes();

    if (!notes.length) return <div>ノートがありません</div>;
    return (
        <div style={{padding: '20px 10px 60px 10px'}}>
            {
                notes.map(note => {
                    return <div key={note.id}>
                        <Note {...note} selected={selectNote?.id === note.id}></Note>
                        <hr style={{backgroundColor: '#E6E6E6', border: 'none', height: 1, margin: 3}} />
                    </div>;
                })
            }
        </div>
    );
}
