/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';

const NoAuth: FC<{ setLoggedIn: any }> = ({ setLoggedIn }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [signingUp, setSigningUp] = useState<boolean>(false);
    setLoggedIn
    const login = () => {
        const user = {
            username: username,
            password: password,
        };
        user;
    };

    const signup = () => {
        const user = {
            username: username,
            password: password,
            password_confirmation: confirmPassword,
        };
        user;
    };

    return (
        <div>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {signingUp && (
                <input
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            )}
            <button onClick={() => (signingUp ? signup() : login())}>
                {signingUp ? 'Sign Up' : 'Login'}
            </button>
            <p onClick={() => setSigningUp(true)}>Sign Up</p>
        </div>
    );
};

export default NoAuth;
