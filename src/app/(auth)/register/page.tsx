'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';

type RegisterCredentials = {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
};

export default function Register() {
    const [credentials, setCredentials] = useState<RegisterCredentials>({
        username: '',
        password: '',
        repeatPassword: '',
        email: '',
    });

    const registerSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(credentials);
        setCredentials((oldCredentials) => ({ ...oldCredentials, password: '' }));
        localStorage.setItem('credentials', JSON.stringify(credentials));
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => registerSubmitHandler(e)}>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    value={credentials.username}
                    onChange={(e) =>
                        setCredentials((oldCredentials) => ({ ...oldCredentials, username: e.target.value }))
                    }
                    autoComplete="new-password"
                />

                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials((oldCredentials) => ({ ...oldCredentials, email: e.target.value }))}
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

                <label htmlFor="password">Repeat Password</label>
                <input
                    name="password-repeat"
                    type="password"
                    value={credentials.repeatPassword}
                    onChange={(e) =>
                        setCredentials((oldCredentials) => ({ ...oldCredentials, repeatPassword: e.target.value }))
                    }
                    autoComplete="new-password"
                />

                <button>Register</button>
            </form>
            <p>
                Already have registration? <Link href="/login">Log in</Link>
            </p>
        </div>
    );
}
