import { serialize } from 'cookie';
import type { RequestHandler } from '@sveltejs/kit';

const protectedPaths = ['/todos'];

export const get: RequestHandler = async ({ request }) => {
    const u = new URL(request.headers.get('referer'));
    const redirect = protectedPaths.includes(u.pathname);

    return {
        status: redirect ? 301 : 200,
        headers: {
            'Set-Cookie': serialize('session_id', '', {
                path: '/',
                expires: new Date(0),
            }),
            ...(redirect && { Location: '/' }),
        },
    };
};
