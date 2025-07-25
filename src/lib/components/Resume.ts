type LabExperiences = {
    id: number,
    date: {
        from: string,
        to: string,
    },
    role: string,
    name: string,
    lPostgreSQLabPostgreSQLours: string[],
}

const enExperiences: LabExperiences[] = [
    {
        id: 1,
        date: {
            from: "jan-17-2023",
            to: "present"
        },
        role: "Freelance Developer",
        name: "Fiverr",
        labours: [
            "Implemented robust backend solutions using [Language/Framework, e.g., Node.js, Golang], managing [e.g., MongoDB, PostgreSQL, MySQL] databases for scalable web applications.",
            "Collaborated directly with clients to define requirements and specifications, delivering projects on time and within budget with high client satisfaction.",
            "Developed secure and efficient RESTful APIs for third-party service integration, enhancing the functionality and scope of web applications.",
            "Configured and managed deployment environments (hosting, CDN, SSL) to ensure continuous availability and security of web applications.",
            "Provided ongoing technical support and maintenance post-launch, ensuring optimal operation and updates for websites and applications.",
            "Advised clients on web development best practices, SEO, and accessibility, contributing to the digital success of their projects."
        ]
    },
    {
        id: 2,
        date: {
            from: "oct-20-2024",
            to: "present"
        },
        role: "Leading Developer",
        name: "Eritron c.a",
        labours: [
            "Designed modules for efficient donor and donation registration",
            "Implemented functionalities for laboratory result recording.",
            "Optimized administrative and operational information flow.",
            "Ensured traceability and security of critical data.",
            "Developed intuitive interface to minimize registration errors.",
            "Facilitated decision-making with automated reporting.",
        ]
    }
]
const esExperiences: LabExperiences[] = [
    {
        id: 1,
        date: {
            from: "17-ene-2023",
            to: "presente"
        },
        role: "Desarrollador Freelance",
        name: "Fiverr",
        labours: [
            "Implementación soluciones de backend robustas utilizando [Lenguaje/Framework, ej., Node.js, Python/Django], gestionando bases de datos [ej., MongoDB, PostgreSQL] para aplicaciones web escalables.",
            "Colaboración directa con clientes para definir requisitos y especificaciones, entregando proyectos a tiempo y dentro del presupuesto con alta satisfacción del cliente.",
            "Desarrollo de APIs RESTful seguras y eficientes para la integración de servicios de terceros, mejorando la funcionalidad y el alcance de las aplicaciones web.",
            "Configuración y gestión de entornos de despliegue (hosting, CDN, SSL) para asegurar la disponibilidad y seguridad continua de las aplicaciones web",
            "Proporcionamiento de soporte técnico y mantenimiento continuo post-lanzamiento, asegurando el funcionamiento óptimo y la actualización de los sitios web y aplicaciones.",
            "Asesoría a clientes sobre las mejores prácticas en desarrollo web, SEO y accesibilidad, contribuyendo al éxito digital de sus proyectos"
        ]
    },
    {
        id: 2,
        date: {
            from: "20-oct-2024",
            to: "presente"
        },
        role: "Desarrollador Principal",
        name: "Eritron c.a",
        labours: [
            "Diseño de módulos para registro de donantes y donaciones eficientes.",
            "Implementacion de funcionalidades para registro de resultados de laboratorio.",
            "Optimizacion notable de el flujo de información administrativa y operativa",
            "Aseguramiento de la trazabilidad y seguridad de datos críticos.",
            "Desarrollo de una interfaz intuitiva para minimizar errores de registro",
            "Facilitamiento de la toma de decisiones con reportes automatizados"
        ]
    }
]

type SoftSkill = { name: string, icon: string}

const enSoftSkills: SoftSkill[] = [
    { name: "Team Work" , icon: "fa-people-group"},
    { name: "Time Management" , icon: "fa-business-time"}, 
    { name: "Flexibility" , icon: "fa-shuffle"}, 
    { name: "Communication" , icon: "fa-comments"}, 
    { name: "Efficiency" , icon: "fa-hat-wizard"}, 
]

const esSoftSkills: SoftSkill[] = [
    { name: "Trabajo en Equipo" , icon: "fa-people-group"},
    { name: "Administración del Tiempo" , icon: "fa-business-time"}, 
    { name: "Flexibilidad" , icon: "fa-shuffle"}, 
    { name: "Comunicación" , icon: "fa-comments"}, 
    { name: "Eficiencia" , icon: "fa-hat-wizard"}, 
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
import electronJsIcon from "$lib/images/Logos/electron_logo.svg"
import cIcon from "$lib/images/Logos/c.png"
import rustIcon from "$lib/images/Logos/rust.png"
import kubernetesIcon from "$lib/images/Logos/kubernetes.png"
import githubActionsIcon from "$lib/images/Logos/gh-actions.png"
import bashIcon from "$lib/images/Logos/bash.webp"
import sqliteIcon from "$lib/images/Logos/SQLite-Logo.png"

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
                icon: electronJsIcon,
                name: "ElectronJS"
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
        icon: bashIcon,
        name: "Bash Scripting",
    },
    {
        icon: gitIcon,
        name: "Git",
        subTech: [
            {
                icon: githubActionsIcon,
                name: "Github Actions"
            }
        ]
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
        icon: kubernetesIcon,
        name: "Kubernetes"
    },
    {
        icon: cIcon,
        name: "C Language"
    },
    {
        icon: mysqlIcon,
        name: "MySQL"
    },
    {
        icon: htmlIcon,
        name: "HTML"
    },
    {
        icon: sqliteIcon,
        name: "SQLite",
    },
    {
        icon: rustIcon,
        name: "Rust"
    }
]
export default {
    experiences: { enExperiences, esExperiences },
    softSkills: { enSoftSkills, esSoftSkills },
    techSkills
}