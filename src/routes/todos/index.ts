import { getAll, add, remove, update } from './_api';
import type { RequestHandler } from '@sveltejs/kit';

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const get: RequestHandler = async ({ locals }) => {
    await wait(500);

    if (!locals.userid) {
        return {
            status: 401,
        };
    }

    return {
        body: {
            tasks: getAll(),
        },
    };
};

export const post: RequestHandler = async ({ request, locals }) => {
    await wait(500);

    if (!locals.userid) {
        return {
            status: 401,
        };
    }

    const form = await request.formData();
    const text = form.get('text').toString();

    add(text);

    return {};
};

// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect = {
    status: 303,
    headers: {
        location: '/todos',
    },
};

export const patch: RequestHandler = async ({ request, locals }) => {
    await wait(500);

    if (!locals.userid) {
        return {
            status: 401,
        };
    }

    const form = await request.formData();

    const uid = form.get('uid').toString();
    const text = form.has('text') ? form.get('text').toString() : null;
    const done = form.has('done') ? !!form.get('done').toString() : null;

    update({ text, done, uid });

    return redirect;
};

export const del: RequestHandler = async ({ request, locals }) => {
    await wait(500);

    if (!locals.userid) {
        return {
            status: 401,
        };
    }

    const form = await request.formData();
    const id = form.get('uid').toString();

    remove(id);

    return redirect;
};
