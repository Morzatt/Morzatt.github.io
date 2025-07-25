import Projects from '$lib/components/Projects.js'
import {l} from "$lib/stores/language.store.js"
import { error } from '@sveltejs/kit';

// --- NEW: Add the entries function ---
export async function entries() {
    // Collect all project keys from both English and Spanish lists
    const allProjectKeys = new Set();

    Projects.enProjects.forEach(project => allProjectKeys.add(project.key));
    Projects.esProjects.forEach(project => allProjectKeys.add(project.key));

    // Map them to the format SvelteKit expects for dynamic routes
    return Array.from(allProjectKeys).map(key => ({ project: key }));
}

export const load = ({ params }) => {
    // let lan;
    // l.subscribe((l) => {
    //     lan = l
    // })

    // let four0four = false;

    // for (let i of lan === "EN" ? Projects.enProjects : Projects.esProjects) {
    //     if (i.key === params.project) {
    //         four0four = true;
    //         true
    //     }
    // }

    // if (!four0four) {
    //     throw error(404, { message: lan === "EN" ? "Page Not Found" : "Página no Encontrada" })
    // }

    let lan;
    // Note: l.subscribe will only work on the client side.
    // During prerendering (server-side), this subscription won't execute.
    // For prerendering, we assume a default or fetch based on the 'params'
    // or ensure both language projects are always available.
    
    // For prerendering, we need to check both English and Spanish projects
    // to see if the project key exists. The language store is more for client-side
    // dynamic switching.
    
    const projectKey = params.project;
    let foundProject = false;

    // Check if the project key exists in either English or Spanish projects
    if (Projects.enProjects.some(p => p.key === projectKey) || Projects.esProjects.some(p => p.key === projectKey)) {
        foundProject = true;
    }

    if (!foundProject) {
        // Fallback for language if needed, though for a 404, a generic message is often fine.
        // During prerendering, if a key isn't found by 'entries', this won't even be called for it.
        // This 'error' throw is primarily for direct navigation to a non-existent URL.
        let errorMessage = "Page Not Found";
        // If you need language-specific 404s during client-side navigation,
        // you'd typically handle language detection differently on the server.
        // For build-time prerendering, this part is less critical because `entries` prevents it.
        throw error(404, { message: errorMessage });
    }

    return {
        p: params.project,
        key: projectKey
    }
}