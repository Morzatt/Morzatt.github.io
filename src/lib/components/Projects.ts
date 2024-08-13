type Project = {
    title: string,
    description: string,
    image: string,
    link: string,
    type: "Command Line" | "Web Application"
}

let string: string = "";

const enProjects: Project[] = [
    {
        title: "CAEJPA",
        description: string,
        image: string,
        link: string,
        type: "Web Application"
    },
    {
        title: "GOLANG",
        description: string,
        image: string,
        link: string,
        type: "Command Line"
    }
]

const esProjects: Project[] = [
    {
        title: string,
        description: string,
        image: string,
        link: string,
        type: "Web Application"
    },
    {
        title: "GOLANG",
        description: string,
        image: string,
        link: string,
        type: "Command Line"
    }
]

export default {
    enProjects,
    esProjects
}