import React        from 'react';
import {useNotes}   from './NoteProvider';
import ButtonDelete from './ButtonDelete';

export default function NoteList() {

    const {selectNote, updateNote} = useNotes();

    if (!selectNote) return <></>;
    return (
        <div
            style={{
                display      : 'flex',
                flexDirection: 'column',
                gap          : 15,
                height       : '100%',
            }}
        >
            <div
                style={{
                    display   : 'flex',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        marginRight: 'auto',
                        fontSize   : 12,
                        color      : '#909090',
                    }}>
                    {selectNote.updatedAt}
                </div>
                <ButtonDelete></ButtonDelete>
            </div>

            <input
                value={selectNote.title}
                onChange={event => updateNote({...selectNote, title: event.target.value})}
                placeholder="タイトル"
                style={{
                    fontSize  : 24,
                    border    : 0,
                    padding   : '5px 0',
                    fontWeight: 'bold',
                    outline   : 'none',
                }}
            />
            <textarea
                value={selectNote.body}
                onChange={event => updateNote({...selectNote, body: event.target.value})}
                style={{
                    width   : '100%',
                    border  : 0,
                    fontSize: 14,
                    flexGrow: 1,
                    padding : 0,
                    outline : 'none',
                }}
                placeholder="本文"
            />
        </div>
    );
}
