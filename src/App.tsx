/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import BookModal from './components/BookModal/BookModal';

const App: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [bookToShow, setBookToShow] = useState();

    console.log(showModal)

    useEffect(() => {
        // this is going to pull in the existing lists eventually
        console.log('blah');
    }, []);

    return (
        <div id='top-level'>
            <Nav
                searchQuery={searchQuery}
                setSearchResult={setSearchResult}
                setSearchQuery={setSearchQuery}
                setShowModal={setShowModal}
            />

            {showModal && (
                <BookModal
                    book={bookToShow}
                    searchResult={searchResult}
                    setBookToShow={setBookToShow}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default App;
