import React from 'react';
import './App.css';
import {Search} from "./Search";

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

const useSemiPersistentState = key => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || ''
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
        console.log('Calling effect method')
    }, [key, value]);

    return [value, setValue];
};

const App = () => {
    const stories = [
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

    const [searchTerm, setSearchTerm] = useSemiPersistentState('search');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const searchStories = stories.filter(story => story.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <Search search={searchTerm} onSearch={handleSearch}/>

            <hr/>

            <List list={searchStories}/>
        </div>
    );

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

export const helloWorld3 = () => {
    const stories = [
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

    const handleChange = event => {
        console.log(event.target.value);
    };

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>

            <hr/>

            <List list={stories}/>
        </div>
    );
}

const List = ({list}) =>
    list.map(item => <Item key={item.objectID} item={item}/>);

const Item = ({item}) => (
    <div>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
    </div>
);