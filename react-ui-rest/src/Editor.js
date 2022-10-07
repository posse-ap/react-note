import React      from 'react';
import Fetch      from './Fetch';
import {useNotes} from './NoteProvider';
import DateFormat from './DateFormat';

export default function NoteList() {
    const {selectNoteId} = useNotes();

    if (!selectNoteId) return <></>;
    return (
        <Fetch
            uri={`http://localhost/rest/note/${selectNoteId}`}
            renderSuccess={({data}) => {
                if (!data) return <></>;
                return (
                    <form
                        key={data.id}
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
                                <DateFormat date={data.updated_at} />
                            </div>
                        </div>
                        <input
                            defaultValue={data.title}
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
                            defaultValue={data.body}
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
                    </form>
                );
            }}
        ></Fetch>
    );
}
