/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { FC } from 'react';
import { GOOGLE_BOOKS_API_KEY } from '../../../secrets';

const Nav: FC<{
    searchQuery: string;
    setSearchResult: any;
    setSearchQuery: any;
    setShowModal: any;
}> = ({ searchQuery, setSearchResult, setSearchQuery, setShowModal }) => {
    const searchBooks = () => {
        const result = searchQuery.split(' ').join('+');
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${result}&key=${GOOGLE_BOOKS_API_KEY}`
            )
            .then(({ data }) => {
                setSearchResult(data.items);
                setSearchQuery('');
                setShowModal(true)
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
          <h1>Inventory Project</h1>
            <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => searchBooks()}>Search</button>
        </div>
    );
};

export default Nav;
