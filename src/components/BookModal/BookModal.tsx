/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from 'axios'
import { FC } from 'react';
import { BookCard, ModalContainer } from './style';
import axios from 'axios';

const BookModal: FC<{
    book?: any;
    searchResult: [];
    setBookToShow: any;
    setShowModal: any;
}> = ({ book, searchResult, setBookToShow, setShowModal }) => {
    const saveBook = () => {
        const bookToAdd = {
            title: book.title,
            author: book.authors[0],
            description: book.description,
            status: 'read',
            published_on: book.publishedDate,
            genre: book.categories[0],
            cover_image: book.imageLinks.thumbnail,
        };
        axios
            .post('http://localhost:8000/api/books/', bookToAdd)
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
    };

    return (
        <ModalContainer>
            {book ? (
                <div>
                    <h1>{book?.authors[0]}</h1>
                    <button onClick={() => saveBook()}>Add Book</button>
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
                                .map((book: any, index: number) => (
                                    <BookCard key={index}>
                                        <h1
                                            id='title'
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
                                ))}
                        </>
                    )}
                </>
            )}
        </ModalContainer>
    );
};

export default BookModal;
