import React      from 'react';
import Note       from './Note';
import Fetch      from './Fetch';
import {useNotes} from './NoteProvider';

export default function NoteList() {

    const {selectNoteId} = useNotes();

    const query = `
        query {
            notes {
               id
               title
               body
               updated_at
            }
        }
    `;

    return (
        <div>
            <Fetch
                query={query}
                renderSuccess={({notes}) => (
                    <div style={{padding: '20px 10px 60px 10px'}}>
                        {
                            notes.map(note => {
                                return <div key={note.id}>
                                    <Note {...note} selected={selectNoteId === note.id}></Note>
                                    <hr style={{backgroundColor: '#E6E6E6', border: 'none', height: 1, margin: 3}} />
                                </div>;
                            })
                        }
                    </div>
                )}
            ></Fetch>
        </div>
    );
}
