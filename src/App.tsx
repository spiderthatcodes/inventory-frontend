/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { GOOGLE_BOOKS_API_KEY } from '../secrets';
import axios from 'axios';
import BookModal from './components/BookModal/BookModal';

const App: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [bookToShow, setBookToShow] = useState({});

    useEffect(() => {
        console.log('blah');
    }, []);

    const searchBooks = () => {
        const result = searchQuery.split(' ').join('+');
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${result}&key=${GOOGLE_BOOKS_API_KEY}`
            )
            .then(({ data }) => {
                setSearchResult(data.items);
                setSearchQuery('');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div id='top-level'>
            <Nav />
            <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => searchBooks()}>Search</button>
            {searchResult.length > 0 && (
                <div>
                    {searchResult
                        .filter(
                            (book: any) =>
                                book.volumeInfo.imageLinks?.thumbnail !=
                                undefined
                        )
                        .map((book: any) => {
                            console.log(
                                book.volumeInfo.imageLinks?.smallThumbnail
                            );
                            return (
                                <>
                                    <h1
                                        onClick={() => {
                                            setBookToShow(book.volumeInfo);
                                            setShowModal(true);
                                        }}
                                    >
                                        {book.volumeInfo.title}
                                    </h1>
                                    <img
                                        src={
                                            book.volumeInfo.imageLinks
                                                ?.thumbnail
                                        }
                                        alt='book'
                                    />
                                </>
                            );
                        })}
                </div>
            )}
            {showModal && <BookModal book={bookToShow} />}
        </div>
    );
};

export default App;
