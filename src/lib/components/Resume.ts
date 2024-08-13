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

export default {
    experiences: { enExperiences, esExperiences },
    softSkills: { enSoftSkills, esSoftSkills }
}