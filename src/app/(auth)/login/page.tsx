'use client';

import { FormEvent, useState } from 'react';

type LoginCredentials = {
    username: string;
    password: string;
};

export default function Login() {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        username: '',
        password: '',
    });

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(credentials);
        setCredentials((oldCredentials) => ({ ...oldCredentials, password: '' }));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => loginSubmitHandler(e)}>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    value={credentials.username}
                    onChange={(e) =>
                        setCredentials((oldCredentials) => ({ ...oldCredentials, username: e.target.value }))
                    }
                    autoComplete="new-password"
                />
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials((oldCredentials) => ({ ...oldCredentials, password: e.target.value }))
                    }
                    autoComplete="new-password"
                />
                <button>Login</button>
            </form>
        </div>
    );
}
