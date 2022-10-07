import React      from 'react';
import {useNotes} from './NoteProvider';
import iconDelete from './iconDelete.svg';

export default function App() {

    const {deleteSelectNote} = useNotes();

    return (
        <>
            <button
                onClick={() => deleteSelectNote()}
                style={{
                    display     : 'flex',
                    alignItems  : 'center',
                    border      : 0,
                    padding     : '5px 15px',
                    gap         : 5,
                    borderRadius: 100,
                    cursor      : 'pointer',
                    fontSize    : 12,
                }}
            >
                <img src={iconDelete} style={{height: 15}} alt="削除" />
                削除
            </button>
        </>
    );
}
