import { error } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	if (event.request.method === 'POST' && event.request.url.includes('?throw-hooks-error')) {
		error(403, 'Hooks error');
	}

	return await resolve(event);
};
