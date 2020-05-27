import React from 'react';
import './App.css';

const title = 'React'

const welcome = {
    greeting: 'Hey',
    title: 'React',
}

function App() {
  return helloWorld2();
}

export default App;

export function helloWorld0() {
  return (
      <div>
        <h1>Hello World!</h1>
      </div>
  );
}

export function helloWorld1() {
    return (
        <div>
            <h1>Hello {title}</h1>
        </div>
    );
}

export function helloWorld2() {
    return (
        <div>
            <h1>
                {welcome.greeting} {welcome.title}
            </h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </div>
    );
}
