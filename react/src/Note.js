import React      from 'react';
import {useNotes} from './NoteProvider';

export default function Note({id, title, body, updatedAt, selected}) {

    const {updateSelectNote} = useNotes();

    return (
        <section
            style={{
                padding        : '10px 10px 5px 10px',
                cursor         : 'pointer',
                borderRadius   : 5,
                backgroundColor: selected ? '#E1E9F4' : 'transparent',
                gap            : 3,
                display        : 'flex',
                flexDirection  : 'column',
            }}
            onClick={() => updateSelectNote(id)}
        >
            <h1
                style={{
                    fontSize    : 16,
                    margin      : 0,
                    textOverflow: 'ellipsis',
                    whiteSpace  : 'nowrap',
                    overflow    : 'hidden',
                }}
            >
                {title ? title : 'タイトル'}
            </h1>
            <div
                style={{
                    fontSize    : 12,
                    textOverflow: 'ellipsis',
                    whiteSpace  : 'nowrap',
                    overflow    : 'hidden',
                }}>
                {body ? body : '　'}
            </div>
            <div
                style={{
                    fontSize : 12,
                    color    : '#909090',
                    alignSelf: 'flex-end',
                }}>
                {updatedAt}
            </div>
        </section>
    );
}
