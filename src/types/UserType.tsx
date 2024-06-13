export type UserType = {
    id: number,
    name: string,
    role: 'mentor' | 'student',
    email: string,
    age: number,
    postCode: string,
    phone: string,
    hobbies: string[],
    url: string,
    studyMinutes?: number,
    taskCode?: number,
    studyLangs?: string[],
    score?: number,
    availableMentor?: string[],

    experienceDays?: number,
    useLangs?: string[],
    availableStartCode?: number,
    availableEndCode?: number,
    availableStudent?: string[]
}