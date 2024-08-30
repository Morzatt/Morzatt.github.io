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
            "Develop Web UI/UX.",
            "Build, Debug and Refactor REST API's.",
            "Design and Migrate MySQL schemas.",
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

import jsIcon from "$lib/images/Logos/js.png"
import reactIcon from "$lib/images/Logos/react.png"
import svelteIcon from "$lib/images/Logos/svelte.png"
import postgreIcon from"$lib/images/Logos/postgre.png" 
import dockerIcon from"$lib/images/Logos/docker.webp"
import mysqlIcon from"$lib/images/Logos/mysql.png"
import golangIcon from "$lib/images/Logos/go.png"
import phpIcon from "$lib/images/Logos/php.png"
import nodeIcon from "$lib/images/Logos/node.png"
import gitIcon from "$lib/images/Logos/git.png"

type Technologies = { icon: string, name: string }

const techSkills: Technologies[] = [
    {
        icon: jsIcon,
        name:"JavaScript"
    }, 
    {
        icon: golangIcon,
        name: "Golang"
    },
    {
        icon: postgreIcon,
        name: "PostgreSQL"
    },
    {
        icon: dockerIcon,
        name:"Docker"
    }, 
    {
        icon: nodeIcon,
        name: "NodeJS"
    },
    {
        icon: phpIcon,
        name: "PHP"
    },
    {
        icon: reactIcon,
        name: "React"
    },
    {
        icon: svelteIcon,
        name:"Svelte"
    }, 
    {
        icon: mysqlIcon,
        name: "MySQL"
    },
    {
        icon: gitIcon, 
        name: "Git"
    }
]


export default {
    experiences: { enExperiences, esExperiences },
    softSkills: { enSoftSkills, esSoftSkills },
    techSkills 
}