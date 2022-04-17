import { serialize } from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async () => {
    const name = 'Mock user';

    return {
        status: 200,
        headers: {
            'Set-Cookie': serialize('session_id', name, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // one week
            }),
        },
        body: {
            name,
        },
    };
};
