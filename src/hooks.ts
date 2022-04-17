import cookie from 'cookie';
import type { Handle, GetSession } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');

	event.locals.userid = cookies.session_id;
	event.params.hasUser = cookies.session_id;

	const response = await resolve(event);

	return response;
};

export const getSession: GetSession = async ({ locals }) => {
	return locals.userid;
};
