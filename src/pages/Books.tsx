/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { FC, useEffect, useState } from 'react';

const Books: FC = () => {
    const [usersBooks, setUsersBooks] = useState<[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/books/')
            .then(({ data }) => setUsersBooks(data))
            .catch((err) => console.log(err));
    }, []);

    console.log(usersBooks)

    return <></>;
};

export default Books;
