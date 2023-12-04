'use client';

import { FormEvent, useState } from 'react';

export default function Login() {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: '',
    });

    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(credentials);
        setCredentials((oldCredentials) => ({ ...oldCredentials, password: '' }));
        localStorage.setItem('credentials', JSON.stringify(credentials));
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => loginSubmitHandler(e)}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials((oldCredentials) => ({ ...oldCredentials, email: e.target.value }))}
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
