import Projects from '$lib/components/Projects.js'
import {l} from "$lib/stores/language.store.js"
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
    let lan;
    l.subscribe((l) => {
        lan = l
    })

    let four0four = false;
    let imageIndex: number = parseInt(params.image);

    for (let i of lan === "EN" ? Projects.enProjects : Projects.esProjects) {
        if (i.images) {
            if (i.images[imageIndex] !== undefined) {
                four0four = true;
                true
            }
        }
    }

    if (!four0four) {
        throw error(404, { message: lan === "EN" ? "This Image doesn't exist" : "Esta imagen no existe." })
    }

    return {
        p: params.project,
        img: params.image
    }
}