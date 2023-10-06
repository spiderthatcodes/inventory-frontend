/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import BookModal from './components/BookModal/BookModal';
// import NoAuth from './pages/NoAuth';
import Books from './pages/Books';
// import axios from 'axios';

const App: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [bookToShow, setBookToShow] = useState();
    // const [loggedIn, setLoggedIn] = useState<boolean>(true);




    return (
        <div id='top-level'>
            <Nav
                searchQuery={searchQuery}
                setSearchResult={setSearchResult}
                setSearchQuery={setSearchQuery}
                setShowModal={setShowModal}
            />

            <Books />

            {/* {loggedIn ? <Books /> : <NoAuth setLoggedIn={setLoggedIn} />} */}

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
