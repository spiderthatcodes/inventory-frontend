/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios'
import { FC } from 'react';
import { BookCard, ModalContainer } from './style';

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
        <ModalContainer>
            {book ? (
                <div>
                    <h1>{book.title}</h1>
                </div>
            ) : (
                <>
                    {searchResult.length > 0 && (
                        <>
                            {searchResult
                                .filter(
                                    (book: any) =>
                                        book.volumeInfo.imageLinks?.thumbnail !=
                                        undefined
                                )
                                .map((book: any, index: number) =>
                                    <BookCard key={index}>
                                        <h1 id='title'
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
                                        <div id='details'></div>
                                    </BookCard>
                                )}
                        </>
                    )}
                </>
            )}
        </ModalContainer>
    );
};

export default BookModal;
