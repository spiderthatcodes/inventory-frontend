import { FC, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { GOOGLE_BOOKS_API_KEY } from '../secrets'

const App: FC = () => {
    useEffect(() => {
        console.log('blah');
    }, []);

    const example = GOOGLE_BOOKS_API_KEY

    console.log(example)

    return (
        <div id='top-level'>
            <Nav />
        </div>
    );
}

export default App;
