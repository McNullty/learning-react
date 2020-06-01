import React from 'react';
import './App.css';
import {InputWithLabel} from "./InputWithLabel";

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
    }, [key, value]);

    return [value, setValue];
};

const initialStories = [
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

const storiesReducer = (state, action) => {
    switch (action.type) {
        case 'STORIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'STORIES_FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'REMOVE_STORY':
            return {
                ...state,
                data: state.data.filter(
                    story => action.payload.objectID !== story.objectID
                ),
            };
        default:
            throw new Error();
    }
};

const getAsyncStories = () =>
    new Promise(resolve =>
        setTimeout(
            () =>resolve({data: {stories: initialStories}}),
            2000)
    );

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {

    const [searchTerm, setSearchTerm] = useSemiPersistentState('search');

    const [stories, dispatchStories] = React.useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false }
    );

    React.useEffect(() => {
        if (!searchTerm) return;

        dispatchStories({ type: 'STORIES_FETCH_INIT' });

        fetch(`${API_ENDPOINT}${searchTerm}`)
            .then(response => response.json())
            .then(result => {
                dispatchStories({
                    type: 'STORIES_FETCH_SUCCESS',
                    payload: result.hits,
                });
            })
            .catch(() =>
                dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
            );
    }, [searchTerm]);

    const handleRemoveStory = item => {
        dispatchStories({
            type: 'REMOVE_STORY',
            payload: item,
        });
    };

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h1>My Hacker Stories</h1>

            <InputWithLabel
                id="search"
                value={searchTerm}
                isFocused
                onInputChange={handleSearch}
            >
                <strong>Search:</strong>
            </InputWithLabel>

            <hr/>

            {stories.isError && <p>Something went wrong...</p>}

            {stories.isLoading ?
                (<p>Loading...</p>) :
                (<List list={stories.data} onRemoveStory={handleRemoveStory}/>)}

            <hr/>
            <div>Footer</div>
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

const List = ({list, onRemoveStory}) =>
    list.map(item => <Item
        key={item.objectID}
        item={item}
        onRemoveStory={onRemoveStory}
    />);

const Item = ({item, onRemoveStory}) => {
    function handleRemoveItem() {
        return onRemoveStory(item);
    }

    return (
        <div>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
                <button type="button" onClick={handleRemoveItem.bind(null,item)}>Dismiss</button>
            </span>
        </div>
    );
}