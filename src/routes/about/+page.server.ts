// /src/routes/strategic-objectives/+page.server.ts
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    const current_url = url.pathname;
    return { current_url };
};