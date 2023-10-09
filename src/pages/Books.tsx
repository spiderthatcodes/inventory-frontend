/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

const Books: FC = () => {
    const [usersBooks, setUsersBooks] = useState<[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/books/')
            .then(({ data }) => setUsersBooks(data.books))
            .catch((err) => console.log(err));
    }, []);

    return (
      <div>
        {usersBooks.map((book: any) => <div>
          <h1>{book.title}</h1>
          <h2>By: {book.author}</h2>
          <img src={book.cover_image} alt={book.title} />
        </div>)}
      </div>
    )
};

export default Books;
