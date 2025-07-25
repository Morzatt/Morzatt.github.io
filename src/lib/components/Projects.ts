// Projects 

// CREAR SECCION DE LENGUAJES
// REFACTORIZAR PROYECTOS Y DEMAS LENGUAJES
// AGREGAR Y CAMBIAR FEATURES DE ERITRON


// CAEJPA
import caejpavid from "$lib/images/projects/caejpavid.mp4"
import cli from "$lib/images/projects/cli.mp4"
import caejpa1 from "$lib/images/projects/caejpa1.png"
import caejpa2 from "$lib/images/projects/caejpa2.png"
import caejpa3 from "$lib/images/projects/caejpa3.png"

// ERITRON
import eritronThumbnail from "$lib/images/projects/eritron/eritron_thumbnail.mp4"
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

// CARELOG
import carelogThumbnail from "$lib/images/projects/carelog/carelog-thumbnail.mp4"
import carelog1 from "$lib/images/projects/carelog/1.png"
import carelog2 from "$lib/images/projects/carelog/2.png"
import carelog3 from "$lib/images/projects/carelog/3.png"
import carelog4 from "$lib/images/projects/carelog/4.png"
import carelog5 from "$lib/images/projects/carelog/5.png"
import carelog6 from "$lib/images/projects/carelog/6.png"
import carelog7 from "$lib/images/projects/carelog/7.png"
import carelog8 from "$lib/images/projects/carelog/8.png"
import carelog9 from "$lib/images/projects/carelog/9.png"
import carelog10 from "$lib/images/projects/carelog/10.png"
import carelog11 from "$lib/images/projects/carelog/11.png"
import carelog12 from "$lib/images/projects/carelog/12.png"
import carelog13 from "$lib/images/projects/carelog/13.png"


export type Project = {
    key: string,
    title: string,
    description: string,
    ldescription?: string,
    details?: string,

    thumbnail: string,
    images?: string[],
    video: string,

    tags: string[],

    links: { name: string, icon: string, link: string }[],
    features?: { title: string, description: string }[]
    technologies: { name: string, icon: string, usage?: string }[]

    type: "Command Line" | "Web Application" | "Mobile",

    // It needs to be the Tailwind class with the actual color code inside square brackets, in order to work; e.g: bg-[rgb(12,12,12)] OR bg-[#FFFFFF]
    bg?: `bg-[${string}]`,
    aditionalStyles?: string,
}

let string: string = "";
// ICONS IMPORT
import githubIcon from "$lib/images/Logos/github.png"
import svelteIcon from "$lib/images/Logos/svelte.png"
import expressIcon from "$lib/images/Logos/express.png"
import electronJsIcon from "$lib/images/Logos/electron_logo.svg"
import PWAIcon from "$lib/images/Logos/pwa_logo.png"
import tailwindIcon from "$lib/images/Logos/tailwind.png"

import sqliteIcon from "$lib/images/Logos/SQLite-Logo.png"
import postgreIcon from "$lib/images/Logos/postgre.png"
import mysqlIcon from "$lib/images/Logos/mysql.png"

const enProjects: Project[] = [
    // EJEMPLO CLI
    // {        
    //     key: "asisosso",
    //     title: "GOLANG",
    //     description: string,
    //     thumbnail: cli,
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

    // ERITRON
    {
        key: "eritron",
        title: "NexusVital",

        description: "Blood Bank Management Application: Comprehensive solution for administrative and operational management",
        ldescription: "Complete solution for the administrative and operational management of blood bank's activities. It facilitates the detailed registration of donors, including personal and contact information, while allows for precise control of donations, from date and blood type to processing status. The platform also manages the recording of laboratory results associated with each sample, ensuring safety and traceability. Furthermore, it efficiently organizes data from collaborating institutions, such as hospitals and clinics, optimizing coordination and distribution. Its intuitive design aims to enhance efficiency and security across all key blood bank processes.",

        video: "https://drive.google.com/file/d/1Hi7M1GhekcBBQXZFOJStdpgTk7BtQt7Y/preview",
        thumbnail: eritronThumbnail,
        images: [
            eritron1, eritron2, eritron3, eritron4, eritron5, eritron6, eritron7, eritron8, eritron9, eritron10, eritron11, eritron12, eritron13, eritron14, eritron15, eritron16, eritron17, eritron18, eritron19,
        ],

        type: "Web Application",
        tags: ["Blood Banks", "Clinical Software", "Clinical Control", "Laboratory", "Data Science"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt" }],

        features: [
            { title: "Comprehensive Donor Registration", description: "Securely stores detailed personal information, medical history, and blood type for each donor. This facilitates quick and accurate identification for future donations." },
            { title: "Integrated Donation Management ", description: "Controls the entire donation process, from donor selection and medical history review, through extraction process data and laboratory results, ensuring complete records." },
            { title: "Advanced Donation Visualization and Querying", description: "Provides powerful tools to search and filter donations by multiple fields such as blood type, date, hour, donor, beneficiary, or destiny, optimizing information access." },
            { title: "Dynamic Questionnaire and Lab Configuration ", description: "Allows for flexible modification of donor screening questionnaire questions and laboratory parameters. This ensures adaptability to new health protocols and requirements." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "SQLite", icon: sqliteIcon },
            { name: "PostgreSQL", icon: postgreIcon },
            { name: "ElectronJS", icon: electronJsIcon },
            { name: "PWA", icon: PWAIcon },
        ],

        bg: "bg-[#f8f8f8]",
        aditionalStyles: "scale-110"
    },

    // CARELOG
    {
        key: "carelog",
        title: "CareLog C.A",

        description: "Tracks daily in/out times, manages work permits and sick leave (with photo evidence), and offers easy attendance visualization and queries",
        ldescription: "Comprehensive attendance tracking application, designed to simplify and optimize workforce management for any company. It provides robust features for registering and managing every employee's profile, centralizing essential data. Key personnel can be designated to take daily attendance, ensuring accurate logging of in and out times. The app also efficiently handles work permits and health-related time off, offering the crucial capability to include photos of physical vouchers for verified documentation. With powerful tools for visualizing and querying attendance records, managers can easily track punctuality, monitor absences, and generate insightful reports, leading to improved operational efficiency and informed decision-making.",

        video: "https://drive.google.com/file/d/19pVOIsxlkdavceiL65nInpWv4CqmmuzF/preview",
        thumbnail: carelogThumbnail,
        images: [carelog1, carelog2, carelog3, carelog4, carelog5, carelog6, carelog7, carelog8, carelog9, carelog10, carelog11, carelog12, carelog13],

        type: "Command Line",
        tags: ["Blood Banks", "Clinical Software", "Clinical Control", "Laboratory", "Data Science"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/skool" }],

        features: [
            { title: "Comprehensive Employee Registration", description: "Enables the company to register and manage all employee profiles, including personal data, roles, and departments." },
            { title: "Detailed Permit and Absence Management", description: "Facilitates the recording and tracking of work permits and health-related time off. Users can document the reason and duration, with the ability to attach photos of physical vouchers for verification and auditing." },
            { title: "Daily In and Out Attendance Logging", description: "Offers an efficient way to record each employee's entry and exit times" },
            { title: "Advanced Attendance Visualization and Querying", description: "Provides tools to quickly view the attendance status of the entire team and perform detailed queries by employee or date." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "MySQL", icon: mysqlIcon }
        ],
        bg: "bg-[#291334]",
        aditionalStyles: "scale-110"
    },

    // SCHOOL 
    {
        key: "school",
        title: "ScholaDesk",

        description: "Streamlines school operations, managing student, professor, and employee data/documents, plus classrooms and schedules. Centralize your school's core administration effortlessly.",
        ldescription: "Comprehensive school management application, designed to centralize and optimize all critical administrative and operational tasks. It provides robust capabilities for registering and managing student data and documents, ensuring easy access and organized records, while also efficiently handling professor and employee profiles, including their data and documents, simplifying HR processes. Furthermore, it offers powerful tools for managing classrooms and creating detailed class schedules, streamlining academic planning. Aims to enhance efficiency, communication, and organization across the entire educational institution, making daily operations smoother for everyone involved.",

        video: "https://drive.google.com/file/d/1Hi7M1GhekcBBQXZFOJStdpgTk7BtQt7Y/preview",
        thumbnail: eritronThumbnail,
        images: [
            eritron1, eritron2, eritron3, eritron4, eritron5, eritron6, eritron7, eritron8, eritron9, eritron10, eritron11, eritron12, eritron13, eritron14, eritron15, eritron16, eritron17, eritron18, eritron19,
        ],

        type: "Web Application",
        tags: [
            "School Management",
            "Educational Administration",
            "Education Software",
            "Student Data",
            "Classroom Management",
            "School Scheduling",
            "School HR",
            "Educational Platform",
            "School Digitalization",
            "Academic Control"
        ],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/school" }],

        features: [
            {
                "title": "Comprehensive Profile Management",
                "description": "Allows registration and management of detailed student, professor, and employee data. Includes personal, academic, contact information, and quick access to their documents."
            },
            {
                "title": "Centralized Document Control",
                "description": "Provides a secure repository to upload, organize, and access important documents for students, staff, and the institution. Simplifies inquiries and reduces administrative paperwork."
            },
            {
                "title": "Classroom and Schedule Administration",
                "description": "Enables configuration and assignment of classrooms, plus creation of detailed class schedules for all courses. Optimizes resource distribution and academic planning efficiently."
            },
            {
                "title": "Visualization and Query Dashboard",
                "description": "Offers an intuitive interface to quickly view key information and perform filtered searches. Facilitates data-driven decision-making and swift access to relevant data."
            }
        ],

        technologies: [
            { name: "SvelteKit", icon: svelteIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "PostgreSQL", icon: postgreIcon },
        ],

        bg: "bg-[#f8f8f8]",
        aditionalStyles: "scale-110"
    },

    // CAEJPA
    {
        key: "caejpa",
        title: "CAEJPA",

        description: "Easily manage savings accounts, loans, and withdrawals online. It's designed for quick, secure transactions.",
        ldescription: "Intuitive web application that offers a comprehensive solution for managing a savings bank. It streamlines key operations like handling savings accounts, processing loan applications and repayments, and executing secure withdrawals. Our platform aims to enhance efficiency for both users and administrators by providing a user-friendly interface for all financial transactions, ensuring accuracy and ease of access to essential banking services from anywhere, anytime.",

        video: "https://drive.google.com/file/d/1MoIe6hkTGsGpH36OdVl-AJsTBlfjSyQV/preview",
        thumbnail: caejpavid,
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
]

const esProjects: Project[] = [
    // ERITRON
    {
        key: "eritron",
        title: "NexusVital",

        description: "Aplicación de Gestión de Banco de Sangre: Solución integral para la administración y operación",
        ldescription: "Solución integral para la gestión de las actividades administrativas y operativas de bancos de sangre. Facilita el registro detallado de donantes, incluyendo información personal y de contacto, a su vez que permite el control preciso de las donaciones, desde la fecha y tipo de sangre hasta el estado de procesamiento. La plataforma también gestiona el registro de resultados de laboratorio asociados a cada muestra, asegurando la seguridad y trazabilidad. Además, organiza eficientemente los datos de instituciones colaboradoras, como hospitales y clínicas, optimizando la coordinación y distribución. Su diseño intuitivo busca mejorar la eficiencia y la seguridad en todos los procesos clave del banco de sangre.",

        video: "https://drive.google.com/file/d/1Hi7M1GhekcBBQXZFOJStdpgTk7BtQt7Y/preview",
        thumbnail: eritronThumbnail,
        images: [
            eritron1, eritron2, eritron3, eritron4, eritron5, eritron6, eritron7, eritron8, eritron9, eritron10, eritron11, eritron12, eritron13, eritron14, eritron15, eritron16, eritron17, eritron18, eritron19,
        ],

        type: "Web Application",
        tags: ["Banco de Sangre", "Software Clinico", "Control Clinico", "Pruebas de Laboratorio", "Ciencia de Datos"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt" }],

        features: [
            { title: "Registro Completo de Donantes:", description: "Permite el almacenamiento seguro y detallado de la información personal, historial médico y tipo de sangre de cada donante. Facilita la identificación rápida y precisa para futuras donaciones." },
            { title: "Gestión Integral de Donaciones:", description: " Controla el proceso de donación desde la selección del donante y revisión de historial médico, hasta los datos de extracción y resultados de laboratorio, asegurando un registro completo." },
            { title: "Visualización y Consulta Avanzada de Donaciones:", description: "Ofrece herramientas poderosas para buscar y filtrar donaciones por múltiples campos como tipo de sangre, fecha, hora, donante, beneficiario o destino, optimizando el acceso a la información." },
            { title: "Configuración Dinámica de Cuestionarios y Laboratorio: ", description: "Permite modificar las preguntas del cuestionario de selección de donantes y los parámetros del laboratorio de forma flexible. Esto asegura la adaptabilidad a nuevos protocolos sanitarios." },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "SQLite", icon: sqliteIcon },
            { name: "PostgreSQL", icon: postgreIcon },
            { name: "ElectronJS", icon: electronJsIcon },
            { name: "PWA", icon: PWAIcon },
        ],
        bg: "bg-[#f8f8f8]",
        aditionalStyles: "scale-110"
    },

    // CARELOG
    {
        key: "carelog",
        title: "CareLog C.A",

        description: "Registra entradas/salidas, gestiona permisos y bajas médicas (con foto), y permite visualizar y consultar asistencias fácilmente",
        ldescription: "Aplicación de gestión de asistencia diseñada para simplificar y optimizar la administración de personal en cualquier empresa. Ofrece funciones robustas para el registro y manejo de cada perfil de empleado, centralizando datos esenciales. Personal clave puede ser designado para registrar la asistencia diaria, asegurando un control preciso de horarios de entrada y salida. La aplicación también gestiona eficientemente permisos de trabajo y ausencias por salud, con la capacidad crucial de incluir fotos de comprobantes físicos para verificación documentada. Con potentes herramientas para visualizar y consultar registros de asistencia, los gerentes pueden monitorear fácilmente puntualidad, ausencias y generar informes útiles, mejorando la eficiencia operativa y la toma de decisiones.",

        video: "https://drive.google.com/file/d/19pVOIsxlkdavceiL65nInpWv4CqmmuzF/preview",
        thumbnail: carelogThumbnail,
        images: [carelog1, carelog2, carelog3, carelog4, carelog5, carelog6, carelog7, carelog8, carelog9, carelog10, carelog11, carelog12, carelog13],

        type: "Command Line",
        tags: ["Blood Banks", "Clinical Software", "Clinical Control", "Laboratory", "Data Science"],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt/skool" }],

        features: [
            { title: "Registro Completo de Empleados", description: "Permite a la empresa registrar y gestionar todos los perfiles de sus empleados, incluyendo datos personales, roles y departamentos." },
            { title: "Gestión Detallada de Permisos y Ausencias", description: "Facilita el registro y seguimiento de permisos de trabajo y ausencias relacionadas con la salud. Los usuarios pueden documentar el motivo y la duración, con la capacidad de adjuntar fotos de comprobantes físicos para verificación y auditoría." },
            { title: "Registro Diario de Asistencia (Entrada y Salida)", description: "Ofrece una forma eficiente de registrar los horarios de ingreso y egreso de cada empleado." },
            { title: "Visualización y Consulta Avanzada de Asistencias", description: "Proporciona herramientas para visualizar rápidamente el estado de asistencia de todo el equipo y realizar consultas detalladas por empleado o fecha. " },
        ],
        technologies: [
            { name: "SvelteKit", icon: svelteIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "MySQL", icon: mysqlIcon }
        ],
        bg: "bg-[#291334]",
        aditionalStyles: "scale-110"
    },

    // SCHOOL 
    {
        key: "school",
        title: "NexusVital",

        description: "Aplicación destinada a optimizar las operaciones escolares más comunes: gestionando datos/documentos de estudiantes, profesores y empleados, además de aulas y horarios. Centraliza la administración escolar sin esfuerzo.",
        ldescription: "Completa aplicación de gestión escolar, diseñada para centralizar y optimizar todas las tareas administrativas y operativas más críticas. Ofrece capacidades robustas para el registro y manejo de datos y documentos de estudiantes, asegurando un acceso fácil y registros organizados. La aplicación también gestiona eficientemente los perfiles de profesores y empleados, incluyendo sus datos y documentos, simplificando los procesos de RRHH. Además, proporciona herramientas potentes para la administración de aulas y la creación de horarios de clases detallados, agilizando la planificación académica. Busca mejorar la eficiencia, la comunicación y la organización en toda la institución educativa, facilitando las operaciones diarias para todos los involucrados.",

        video: "https://drive.google.com/file/d/1Hi7M1GhekcBBQXZFOJStdpgTk7BtQt7Y/preview",
        thumbnail: eritronThumbnail,
        images: [
            eritron1, eritron2, eritron3, eritron4, eritron5, eritron6, eritron7, eritron8, eritron9, eritron10, eritron11, eritron12, eritron13, eritron14, eritron15, eritron16, eritron17, eritron18, eritron19,
        ],

        type: "Web Application",
        tags: [
            "Gestión Escolar",
            "Administración Educativa",
            "Software Educativo",
            "Datos Estudiantiles",
            "Gestión de Aulas",
            "Horarios Escolares",
            "Recursos Humanos Escolar",
            "Plataforma Educativa",
            "Digitalización Escolar",
            "Control Académico"
        ],

        links: [{ name: "Github", icon: githubIcon, link: "https://github.com/Morzatt" }],

        features: [
            {
                "title": "Gestión Integral de Perfiles",
                "description": "Permite registrar y administrar datos detallados de estudiantes, profesores y empleados. Incluye información personal, académica, de contacto y acceso rápido a sus documentos."
            },
            {
                "title": "Control Centralizado de Documentos",
                "description": "Ofrece un repositorio seguro para subir, organizar y acceder a documentos importantes de alumnos, personal y la institución. Facilita la consulta y reduce el papeleo administrativo."
            },
            {
                "title": "Administración de Aulas y Horarios",
                "description": "Permite configurar y asignar aulas, además de crear horarios de clases detallados para todos los cursos. Optimiza la distribución de recursos y la planificación académica."
            },
            {
                "title": "Panel de Visualización y Consulta",
                "description": "Ofrece una interfaz intuitiva para visualizar rápidamente la información clave y realizar búsquedas filtradas. Facilita la toma de decisiones y el acceso rápido a datos relevantes."
            }
        ],

        technologies: [
            { name: "SvelteKit", icon: svelteIcon },
            { name: "TailwindCSS", icon: tailwindIcon },
            { name: "PostgreSQL", icon: postgreIcon },
        ],
        bg: "bg-[#f8f8f8]",
        aditionalStyles: "scale-110"
    },

    // CAEJPA
    {
        key: "caejpa",
        title: "CAEJPA",

        description: "Aplicación web enfocada en simplificar operaciones de caja de ahorro. Gestiona fácilmente ahorros, préstamos y retiros online. Diseñada para transacciones rápidas y seguras",
        ldescription: "Esta intuitiva aplicación web ofrece una solución integral para la gestión de una caja de ahorro. Agiliza operaciones clave como la administración de cuentas de ahorro, el procesamiento de solicitudes y pagos de préstamos, y la ejecución de retiros seguros. Nuestra plataforma busca mejorar la eficiencia tanto para usuarios como para administradores, proporcionando una interfaz fácil de usar para todas las transacciones financieras, asegurando precisión y facilidad de acceso a servicios bancarios esenciales desde cualquier lugar y en cualquier momento.",

        video: "https://drive.google.com/file/d/1Hi7M1GhekcBBQXZFOJStdpgTk7BtQt7Y/preview",
        thumbnail: caejpavid,
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
]

export default {
    enProjects,
    esProjects,
}