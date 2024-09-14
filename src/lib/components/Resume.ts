type LabExperiences = {
    id: number,
    date: {
        from: string,
        to: string,
    },
    role: string,
    name: string,
    labours: string[],
}

const enExperiences: LabExperiences[] = [
    {
        id: 1,
        date: {
            from: "oct-10-2023",
            to: "jun-06-2024"
        },
        role: "Junior Developer",
        name: "CAEJPA",
        labours: [
            "Designed, developed and deployed a secure file sharing web application to a LAN network currently in use by over a hundred professionals.",
            "Helped on the virtualization and ",
            "Designed and created documentation to help business users understand the purpose and definition of every database column in the system.",
            "Configure and Maintain LAN Networks.",
        ]
    },
    {
        id: 2,
        date: {
            from: "jan-17-2023",
            to: "present"
        },
        role: "Freelance Developer",
        name: "Fiverr",
        labours: [
            "Build, Debug and Deploy Back-End Applications.",
            "Handle test and deployment processes."
        ]
    }
]
const esExperiences: LabExperiences[] = [
    {
        id: 1,
        date: {
            from: "10-oct-2023",
            to: "06-jun-2024"
        },
        role: "Desarrollador Junior",
        name: "CAEJPA",
        labours: [
            "Desarrollo de Web UI/UX",
            "Construir, Debuggear y Refactorizar REST API's",
            "Diseño y Migración de esquemas MySQL",
            "Configurar y Mantener redes LAN."
        ]
    },
    {
        id: 2,
        date: {
            from: "17-ene-2023",
            to: "presente"
        },
        role: "Desarrollador Freelance",
        name: "Fiverr",
        labours: [
            "Construir, Debuggear y Mantener REST API's",
        ]
    }
]

const enSoftSkills: string[] = [
    "Team Work",
    "Time Management",
    "Flexibility",
    "Communication",
    "Efficiency"
]

const esSoftSkills: string[] = [
    "Trabajo en Equipo",
    "Administración del Tiempo",
    "Flexibilidad",
    "Comunicación",
    "Eficiencia"
]
import htmlIcon from "$lib/images/Logos/html.png"
import cssIcon from "$lib/images/Logos/css.png"
import tailwindLogo from "$lib/images/Logos/tailwind.png"

import jsIcon from "$lib/images/Logos/js.png"
import tsIcon from "$lib/images/Logos/ts.png"
import reactIcon from "$lib/images/Logos/react.png"
import svelteIcon from "$lib/images/Logos/svelte.png"
import postgreIcon from"$lib/images/Logos/postgre.png" 
import dockerIcon from"$lib/images/Logos/docker.webp"
import mysqlIcon from"$lib/images/Logos/mysql.png"
import golangIcon from "$lib/images/Logos/go.png"
import phpIcon from "$lib/images/Logos/php.png"
import gitIcon from "$lib/images/Logos/git.png"
import laravelIcon from "$lib/images/Logos/laravel.png"
import expressIcon from "$lib/images/Logos/express.png"
import cIcon from "$lib/images/Logos/c.png"
import rustIcon from "$lib/images/Logos/rust.png"

type Technologies = {
    icon: string,
    name: string,
    subTech?: {
        icon: string,
        name: string
    }[],
}

const techSkills: Technologies[] = [
    {
        icon: jsIcon,
        name: "JavaScript",
        subTech: [
            {
                icon: reactIcon,
                name: "React"
            },
            {
                icon: svelteIcon,
                name: "Svelte"
            },
            {
                icon: expressIcon,
                name: "ExpressJS"
            },
        ]
    },
    {
        icon: golangIcon,
        name: "Golang",
    },
    {
        icon: phpIcon,
        name: "PHP",
        subTech: [
            {
                icon: laravelIcon,
                name: "Laravel" 
            }
        ]
    },
    {
        icon: postgreIcon,
        name: "PostgreSQL",
    },
    {
        icon: gitIcon,
        name: "Git"
    },
    {
        icon: dockerIcon,
        name: "Docker",
    },
    {
        icon: cssIcon,
        name: "CSS",
        subTech: [
            {
                icon: tailwindLogo,
                name: "TailwindCSS"
            }
        ]
    },
    {
        icon: tsIcon,
        name: "TypeScript"
    },
    {
        icon: cIcon,
        name: "C"
    },
    {
        icon: mysqlIcon,
        name: "MySQL"
    },
    {
        icon: htmlIcon,
        name: "HTML"
    },
    // {
    //     icon: rustIcon,
    //     name: "Rust"
    // }
]
export default {
    experiences: { enExperiences, esExperiences },
    softSkills: { enSoftSkills, esSoftSkills },
    techSkills
}