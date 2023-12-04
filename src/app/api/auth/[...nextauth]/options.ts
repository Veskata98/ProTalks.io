import GoogleProvider from 'next-auth/providers/google';

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
                console.log('Profile Google: ', profile);

                return {
                    ...profile,
                    id: profile.sub,
                };
            },
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
    ],
};
