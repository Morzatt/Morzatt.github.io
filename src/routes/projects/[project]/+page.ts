import Projects from '$lib/components/Projects.js'
import {l} from "$lib/stores/language.store.js"
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
    let lan;
    l.subscribe((l) => {
        lan = l
    })

    let four0four = false;
    for (let i of lan === "EN" ? Projects.enProjects : Projects.esProjects) {
        if (i.key === params.project) {
            four0four = true;
            true
        }
    }

    if (!four0four) {
        throw error(404, lan === "EN" ? "Page Not Found" : "Página no Encontrada")
    }

    return {
        p: params.project
    }
}