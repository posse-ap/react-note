import React        from 'react';
import ReactDOM     from 'react-dom/client';
import App          from './App';
import NoteProvider from './NoteProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NoteProvider>
            <App />
        </NoteProvider>
    </React.StrictMode>,
);
