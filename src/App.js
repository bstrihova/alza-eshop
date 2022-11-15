import React from 'react';
import './index.scss';
import Header from './containers/Header';
import Main from './containers/Main';

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;
