export type StudentType = {
    id: number,
    name: string,
    role: 'student' | "graduate",
    email: string,
    age: number,
    postCode: string,
    phone: string,
    hobbies: string[],
    url: string,
    studyMinutes: number,
    taskCode: number,
    studyLangs: string[],
    score: number,
    availableMentor?: string[]
}
