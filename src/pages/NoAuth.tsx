/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { FC, useState } from 'react';

const NoAuth: FC<{ setLoggedIn: any }> = ({ setLoggedIn }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [signingUp, setSigningUp] = useState<boolean>(false);

    const login = () => {
        const user = {
            username: username,
            password: password,
        };
        axios
            .post('http://localhost:8000/api/login/', user)
            .then(({data}) => {
                console.log(data);
                setUsername('');
                setPassword('');
                setLoggedIn(true);
            })
            .catch((err) => console.log(err));
    };

    const signup = () => {
        const user = {
            username: username,
            password: password,
            password_confirmation: confirmPassword,
        };
        axios
            .post('http://localhost:8000/api/signup/', user)
            .then(({data}) => {
                console.log(data);
                setUsername('');
                setPassword('');
                setConfirmPassword('')
                setLoggedIn(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <label>
                username
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                password
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            {signingUp && (
                <>
                    <br />
                    <label>
                        confirm password
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </label>
                </>
            )}
            <br />
            <button onClick={() => (signingUp ? signup() : login())}>
                {signingUp ? 'Sign Up' : 'Login'}
            </button>
            <p onClick={() => setSigningUp(true)}>Sign Up</p>
        </div>
    );
};

export default NoAuth;
