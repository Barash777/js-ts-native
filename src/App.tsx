import React from 'react';
import './App.css';

function App() {

    // console.log(splitIntoWords('hello world'))

    const names = ['a', 'b', 'c', 'd', 'e']
    const users = [{name: 'a'}, {name: 'b'}, {name: 'c'}, {name: 'd'}, {name: 'e'}]
    const leElements = names.map((n, index) => <li key={index}>{n}</li>)
    const leElements2 = users.map((u, index) => <li key={index}>{u.name}</li>)

    return (
        <div className="App">
            learn react

            <ul>{leElements}</ul>
            <ul>{leElements2}</ul>


        </div>
    );
}

export default App;
