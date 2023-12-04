'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function Register() {
    const router = useRouter();

    const [credentials, setCredentials] = useState<RegisterCredentials>({
        username: '',
        password: '',
        repeatPassword: '',
        email: '',
    });

    const [errorMsg, setErrorMsg] = useState('');

    const registerSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        // console.log(credentials);

        if (Object.values(credentials).some((x) => x.length === 0)) {
            setCredentials((oldCredentials) => ({ ...oldCredentials, password: '', repeatPassword: '' }));
            setErrorMsg('All fields are required');
            return;
        }

        if (credentials.password !== credentials.repeatPassword) {
            setCredentials((oldCredentials) => ({ ...oldCredentials, password: '', repeatPassword: '' }));
            setErrorMsg('Password do not match');
            return;
        }

        await fetch('/api/auth', { method: 'POST', body: JSON.stringify(credentials) });

        // router.push('/');
    };

    return (
        <div>
            <h1>Register</h1>
            {errorMsg && <p>{errorMsg}</p>}
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
