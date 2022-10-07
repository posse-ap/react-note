import React     from 'react';
import NoteList  from './NoteList';
import Editor    from './Editor';

export default function App() {
    return (
        <div
            style={{
                display: 'flex',
                height : '100vh',
                color  : '#333333',
            }}
        >
            {/*左エリア*/}
            <div
                style={{
                    width      : 300,
                    minWidth   : 300,
                    maxWidth   : 300,
                    borderRight: '1px solid #E6E6E6',
                    maxHeight  : '100%',
                    position   : 'relative',
                }}
            >
                {/*ノート一覧*/}
                <div
                    style={{
                        display      : 'flex',
                        flexDirection: 'column',
                        width        : '100%',
                        borderRight  : '1px solid #E6E6E6',
                        overflowY    : 'scroll',
                        maxHeight    : '100%',
                    }}
                >
                    <NoteList></NoteList>
                </div>
                {/*追加ボタン*/}
                <div
                    style={{
                        position : 'absolute',
                        bottom   : 20,
                        left     : '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                </div>
            </div>

            {/*右エリア*/}
            <div
                style={{
                    flexGrow: 1,
                    padding : '20px',
                }}
            >
                <Editor />
            </div>
        </div>
    );
}
