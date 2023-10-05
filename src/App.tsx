import { FC, useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { GOOGLE_BOOKS_API_KEY } from '../secrets';
import axios from 'axios';

const App: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<[]>([])
    console.log(searchQuery);

    useEffect(() => {
        console.log('blah');
    }, []);

    const searchBooks = () => {
        const result = searchQuery.split(' ').join('+');
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${result}&key=${GOOGLE_BOOKS_API_KEY}`
            )
            .then(({data}) => setSearchResult(data.items))
            .catch((err) => console.log(err));
    };

    console.log(searchResult)

    return (
        <div id='top-level'>
            <Nav />
            <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => searchBooks()}>Search</button>
        </div>
    );
};

export default App;
