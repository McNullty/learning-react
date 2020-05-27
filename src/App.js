import React from 'react';
import './App.css';

const title = 'React'

const welcome = {
    greeting: 'Hey',
    title: 'React',
};

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

function App() {
  return helloWorld3();
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

export function helloWorld3() {
    return (
        <div>
            <h1>My Hacker Stories</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />

            <hr />

            <List />
        </div>
    );
}

function List() {
    return list.map(function(item) {
        return (
            <div key={item.objectID}>
                <span>
                <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </div>
        );
    });
}
