import type { LayoutLoad } from './$types';

export const load = ( () => {
    return {};
}) satisfies LayoutLoad;

export const ssr = false;
export const prerender = true;