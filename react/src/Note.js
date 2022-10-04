import React      from 'react';
import {useNotes} from './NoteProvider';
import DateFormat from './DateFormat';

export default function Note({id, title, body, updated_at, selected}) {

    const {setSelectNoteId} = useNotes();

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
            onClick={() => setSelectNoteId(id)}
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
                <DateFormat date={updated_at} />
            </div>
        </section>
    );
}
