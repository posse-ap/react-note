import iconAdd    from './iconAdd.svg';
import React      from 'react';
import {useNotes} from './NoteProvider';

export default function App() {

    const {addNote} = useNotes();

    return (
        <>
            <button
                onClick={() => addNote()}
                style={{
                    display        : 'flex',
                    alignItems     : 'center',
                    border         : 0,
                    padding        : '5px 15px',
                    gap            : 5,
                    borderRadius   : 100,
                    cursor         : 'pointer',
                    backgroundColor: '#356EB8',
                    color          : '#fff',
                    fontSize       : 12,
                }}
            >
                <img src={iconAdd} style={{height: 15}} alt="新規作成"/>
                新規作成
            </button>
        </>
    );
}
