// Projects 
import caejpavid from "$lib/images/projects/caejpavid.mp4"
import cli from "$lib/images/projects/cli.mp4"
import caejpa1 from "$lib/images/projects/caejpa1.png"
import caejpa2 from "$lib/images/projects/caejpa2.png"
import caejpa3 from "$lib/images/projects/caejpa3.png"



export type Project = {
    key: string,
    title: string,
    description: string,
    ldescription?: string,
    details?: string,
    
    thumnail: string,
    images?: string[],
    video: string,

    tags: string[],

    links: { name: string, icon: string, link: string }[],
    features?: { title: string, description: string }[]
    technologies: { name: string, icon: string, usage?: string }[]

    type: "Command Line" | "Web Application" | "Mobile",

    // It needs to be the Tailwind class with the actual color code inside square brackets, in order to work; e.g: bg-[rgb(12,12,12)] OR bg-[#FFFFFF]
    bg?: string,
}

let string: string = "";
import githubIcon from "$lib/images/Logos/github.png"
import svelteIcon from "$lib/images/Logos/svelte.png"
import expressIcon from "$lib/images/Logos/express.png"
import mysqlIcon from "$lib/images/Logos/mysql.png"
import tailwindIcon from "$lib/images/Logos/tailwind.png"

const enProjects: Project[] = [
    {
        key: "caejpa",
        title: "CAEJPA",

        description: "Financial management web application designed to automate the processes and transactions of a savings and loan associationbuilt with TypeScript, SvelteKit, ExpressJS and MySQL.",
        ldescription: "Simple and user-friendly web application  Bank CAEJPA.",

        video: "https://drive.google.com/file/d/1MoIe6hkTGsGpH36OdVl-AJsTBlfjSyQV/preview",
        thumnail: caejpavid,
        images: [caejpa1, caejpa2, caejpa3],

        type: "Web Application",
        tags: ["Web Application", "Administration", "Role Based Authentication"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],

        features: [
            { title: "Role Based Authentication", description: "Based on session tokens, it provides three levels of users, with a smooth and clear distribution of roles and permissions across the application." },
            { title: "Role Based Authentication", description: ", three levels of users, with a smooth and clear distribution of roles and permissions across the application." },
            { title: "Role Based Authentication", description: ", three levels of users, with a smooth and clear distribution of roles and permissions across the application." },
            { title: "Role Based Authentication", description: "Ba, provides three levels of users, with a smooth and clear distribution of roles and permissions across the application." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "ExpressJS", icon: expressIcon },
            { name: "MySQL", icon: mysqlIcon },
        ],
    },
    {        
        key: "asisosso",
        title: "GOLANG",
        description: string,
        thumnail: cli,
        type: "Command Line",
        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],
        tags: ["Web Application", "Administration", "Role Based Authentication"],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "ExpressJS", icon: expressIcon },
            { name: "MySQL", icon: mysqlIcon }
        ],
        video: cli,
        bg: "bg-[rgb(12,12,12)]"
    },
]

const esProjects: Project[] = [
    {
        key: "caejpa",
        title: "CAEJPA",
        description: string,
        type: "Web Application",
        tags: ["Etiqueta de prueba"],
        thumnail: caejpavid,
        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "ExpressJS", icon: expressIcon },
            { name: "MySQL", icon: mysqlIcon }
        ],
        video: caejpavid
    },
    {
        key: "asisosso",
        title: "GOLANG",
        description: string,
        type: "Command Line",
        thumnail: cli,
        tags: ["Etiqueta de prueba"],
        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "ExpressJS", icon: expressIcon },
            { name: "MySQL", icon: mysqlIcon }
        ],
        video: cli
    }
]

export default {
    enProjects,
    esProjects,
}