// Projects 
import caejpavid from "$lib/images/projects/caejpavid.mp4"
import cli from "$lib/images/projects/cli.mp4"
import caejpa1 from "$lib/images/projects/caejpa1.png"
import caejpa2 from "$lib/images/projects/caejpa2.png"
import caejpa3 from "$lib/images/projects/caejpa3.png"

import eritronThumbnail from "$lib/images/projects/eritron-thumbnaill.mp4"
import eritron1 from "$lib/images/projects/eritron/1.png"
import eritron2 from "$lib/images/projects/eritron/2.png"
import eritron3 from "$lib/images/projects/eritron/3.png"
import eritron4 from "$lib/images/projects/eritron/4.png"
import eritron5 from "$lib/images/projects/eritron/5.png"
import eritron6 from "$lib/images/projects/eritron/6.png"
import eritron7 from "$lib/images/projects/eritron/7.png"
import eritron8 from "$lib/images/projects/eritron/8.png"
import eritron9 from "$lib/images/projects/eritron/9.png"
import eritron10 from "$lib/images/projects/eritron/10.png"
import eritron11 from "$lib/images/projects/eritron/11.png"
import eritron12 from "$lib/images/projects/eritron/12.png"
import eritron13 from "$lib/images/projects/eritron/13.png"
import eritron14 from "$lib/images/projects/eritron/14.png"
import eritron15 from "$lib/images/projects/eritron/15.png"
import eritron16 from "$lib/images/projects/eritron/16.png"
import eritron17 from "$lib/images/projects/eritron/17.png"
import eritron18 from "$lib/images/projects/eritron/18.png"
import eritron19 from "$lib/images/projects/eritron/19.png"


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

import sqliteIcon from "$lib/images/Logos/SQLite-Logo.png"
import postgreIcon from"$lib/images/Logos/postgre.png" 

const enProjects: Project[] = [
    {
        key: "caejpa",
        title: "CAEJPA",

        description: "Easily manage savings accounts, loans, and withdrawals online. It's designed for quick, secure transactions.",
        ldescription: "Intuitive web application that offers a comprehensive solution for managing a savings bank. It streamlines key operations like handling savings accounts, processing loan applications and repayments, and executing secure withdrawals. Our platform aims to enhance efficiency for both users and administrators by providing a user-friendly interface for all financial transactions, ensuring accuracy and ease of access to essential banking services from anywhere, anytime.",

        video: "https://drive.google.com/file/d/1MoIe6hkTGsGpH36OdVl-AJsTBlfjSyQV/preview",
        thumnail: caejpavid,
        images: [caejpa1, caejpa2, caejpa3],

        type: "Web Application",
        tags: ["Fintech", "Administrative Management", "Digital Bank", "Secure Transactions", "Credit and Savings"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],

        features: [
            { title: "Role Based Authentication", description: "Based on session tokens, it provides three levels of users, with a smooth and clear distribution of roles and permissions across the application." },
            { title: "Savings Accounts", description: "Displays balances, movements, and transactions" },
            { title: "Fund Withdrawals", description: "Processes requests for money withdrawals." },
            { title: "Loan Payments", description: "Facilitates payment of loan installments." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "ExpressJS", icon: expressIcon },
            { name: "MySQL", icon: mysqlIcon },
        ],
    },

    // {        
    //     key: "asisosso",
    //     title: "GOLANG",
    //     description: string,
    //     thumnail: cli,
    //     type: "Command Line",
    //     links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],
    //     tags: ["Web Application", "Administration", "Role Based Authentication"],
    //     technologies: [
    //         { name: "SvelteKit", icon: svelteIcon }, 
    //         { name: "TailwindCSS", icon: tailwindIcon },
    //         { name: "ExpressJS", icon: expressIcon },
    //         { name: "MySQL", icon: mysqlIcon }
    //     ],
    //     video: cli,
    //     bg: "bg-[rgb(12,12,12)]"
    // },

    {
        key: "eritron",
        title: "Eritron C.A",

        description: "Blood Bank Management Application: Comprehensive solution for administrative and operational management",
        ldescription: "This application is a comprehensive solution for the administrative and operational management of a blood bank. It facilitates the detailed registration of donors, including personal and contact information. It allows for precise control of donations, from date and blood type to processing status. The platform also manages the recording of laboratory results associated with each sample, ensuring safety and traceability. Furthermore, it efficiently organizes data from collaborating institutions, such as hospitals and clinics, optimizing coordination and distribution. Its intuitive design aims to enhance efficiency and security across all key blood bank processes.",

        video: "https://drive.google.com/file/d/1Hi7M1GhekcBBQXZFOJStdpgTk7BtQt7Y/preview",
        thumnail: eritronThumbnail,
        images: [eritron1, eritron2, eritron3, eritron4, eritron5, eritron6, eritron7, eritron8, eritron9, eritron10, eritron11, eritron12, eritron13, eritron14, eritron15, eritron16, eritron17, eritron18, eritron19],

        type: "Web Application",
        tags: ["Blood Banks", "Clinical Software", "Clinical Control", "Laboratory", "Data Science"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt" }],

        features: [
            { title: "Role Based Authentication", description: "Based on session tokens, it provides three levels of users, with a smooth and clear distribution of roles and permissions across the application." },
            { title: "Laboratory Results", description: "Stores and links test results to donations" },
            { title: "Unit Traceability", description: "Tracks each unit from donation to destination" },
            { title: "Statistical Reports", description: "Generates reports on donations and availability" },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "SQLite", icon: sqliteIcon },
            { name: "PostgreSQL", icon: postgreIcon},
        ],
    },
]

const esProjects: Project[] = [
    // {
    //     key: "caejpa",
    //     title: "CAEJPA",
    //     description: string,
    //     type: "Web Application",
    //     tags: ["Etiqueta de prueba"],
    //     thumnail: caejpavid,
    //     links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],
    //     technologies: [
    //         { name: "SvelteKit", icon: svelteIcon }, 
    //         { name: "TailwindCSS", icon: tailwindIcon },
    //         { name: "ExpressJS", icon: expressIcon },
    //         { name: "MySQL", icon: mysqlIcon }
    //     ],
    //     video: caejpavid
    // },
    // {
    //     key: "asisosso",
    //     title: "GOLANG",
    //     description: string,
    //     type: "Command Line",
    //     thumnail: cli,
    //     tags: ["Etiqueta de prueba"],
    //     links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],
    //     technologies: [
    //         { name: "SvelteKit", icon: svelteIcon }, 
    //         { name: "TailwindCSS", icon: tailwindIcon },
    //         { name: "ExpressJS", icon: expressIcon },
    //         { name: "MySQL", icon: mysqlIcon }
    //     ],
    //     video: cli
    // },

    {
        key: "caejpa",
        title: "CAEJPA",

        description: "Aplicación web enfocada en simplificar operaciones de caja de ahorro. Gestiona fácilmente ahorros, préstamos y retiros online. Diseñada para transacciones rápidas y seguras",
        ldescription: "Esta intuitiva aplicación web ofrece una solución integral para la gestión de una caja de ahorro. Agiliza operaciones clave como la administración de cuentas de ahorro, el procesamiento de solicitudes y pagos de préstamos, y la ejecución de retiros seguros. Nuestra plataforma busca mejorar la eficiencia tanto para usuarios como para administradores, proporcionando una interfaz fácil de usar para todas las transacciones financieras, asegurando precisión y facilidad de acceso a servicios bancarios esenciales desde cualquier lugar y en cualquier momento.",

        video: "https://drive.google.com/file/d/1MoIe6hkTGsGpH36OdVl-AJsTBlfjSyQV/preview",
        thumnail: caejpavid,
        images: [caejpa1, caejpa2, caejpa3],

        type: "Web Application",
        tags: ["Web Application", "Administration", "Role Based Authentication"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/caejpa" }],

        features: [
            { title: "Autenticación basada en Roles", description: "Basado en tokens de sesión, proporciona tres niveles de usuarios, con una distribución fluida y clara de funciones y permisos en toda la aplicación." },
            { title: "Cuentas de Ahorro", description: "Muestra saldos, movimientos y transacciones" },
            { title: "Retiros de Fondos", description: "Procesa solicitudes de retiro de dinero." },
            { title: "Pagos de Préstamos", description: "Facilita el pago de cuotas de préstamos." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "ExpressJS", icon: expressIcon },
            { name: "MySQL", icon: mysqlIcon },
        ],
    },

    {
        key: "eritron",
        title: "Eritron C.A",

        description: "Aplicación de Gestión de Banco de Sangre: Solución integral para la administración y operación",
        ldescription: "Esta aplicación es una solución integral para la gestión administrativa y operativa de un banco de sangre. Facilita el registro detallado de donantes, incluyendo información personal y de contacto. Permite el control preciso de las donaciones, desde la fecha y tipo de sangre hasta el estado de procesamiento. La plataforma también gestiona el registro de resultados de laboratorio asociados a cada muestra, asegurando la seguridad y trazabilidad. Además, organiza eficientemente los datos de instituciones colaboradoras, como hospitales y clínicas, optimizando la coordinación y distribución. Su diseño intuitivo busca mejorar la eficiencia y la seguridad en todos los procesos clave del banco de sangre.",

        video: "https://drive.google.com/file/d/1MoIe6hkTGsGpH36OdVl-AJsTBlfjSyQV/preview",
        thumnail: eritronThumbnail,
        images: [eritron1, eritron2, eritron3, eritron4, eritron5, eritron6, eritron7, eritron8, eritron9, eritron10, eritron12, eritron13],

        type: "Web Application",
        tags: ["Banco de Sangre", "Software Clinico", "Control Clinico", "Pruebas de Laboratorio", "Ciencia de Datos"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt" }],

        features: [
            { title: "Autenticación basada en Roles", description: "Basado en tokens de sesión, proporciona tres niveles de usuarios, con una distribución fluida y clara de funciones y permisos en toda la aplicación." },
            { title: "Resultados de Laboratorio", description: "Guarda y conecta resultados de laboratorio a sus respectivas donaciones" },
            { title: "Trazabilidad de Unidades de Sangre", description: "Rastrea cada unidad de sangre desde su donacion hasta el destino." },
            { title: "Reportes Estadisticos", description: "Genera reportes de donaciones y disponibilidad de componentes sanguineos." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon }, 
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "SQLite", icon: sqliteIcon },
            { name: "PostgreSQL", icon: postgreIcon},
        ],
    },

]

export default {
    enProjects,
    esProjects,
}