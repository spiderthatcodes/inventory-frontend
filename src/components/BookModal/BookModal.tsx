/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios'
import { FC } from 'react';

const BookModal: FC<{
    book?: any;
    searchResult: [];
    setBookToShow: any;
    setShowModal: any;
}> = ({ book, searchResult, setBookToShow, setShowModal }) => {
    // const saveBook = () => {
    //     axios.post()
    // }

    return (
        <>
            {book ? (
                <div>
                    <h1>{book.title}</h1>
                </div>
            ) : (
                <div>
                    {searchResult.length > 0 && (
                        <div>
                            {searchResult
                                .filter(
                                    (book: any) =>
                                        book.volumeInfo.imageLinks?.thumbnail !=
                                        undefined
                                )
                                .map((book: any) =>
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
                                )}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default BookModal;
