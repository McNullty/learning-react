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

const getAsyncStories = () =>
    new Promise(resolve =>
        setTimeout(
            () =>resolve({data: {stories: initialStories}}),
            2000)
    );

const App = () => {

    const [searchTerm, setSearchTerm] = useSemiPersistentState('search');

    const [stories, setStories] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);

        getAsyncStories()
            .then(result => {
            setStories(result.data.stories);

            setIsLoading(false);
            })
            .catch(() => setIsError(true));
    }, []);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleRemoveStory = item => {
        const newStoriesList = stories.filter(story => item.objectID !== story.objectID);

        setStories(newStoriesList);
    };

    const searchStories = stories.filter(story => story.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()));

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

            {isError && <p>Something went wrong...</p>}

            {isLoading ?
                (<p>Loading...</p>) :
                (<List list={searchStories} onRemoveStory={handleRemoveStory}/>)}

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