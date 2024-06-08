export type MentorType = {
    id: number,
    name: string,
    role: 'mentor' | 'student',
    email: string,
    age: number,
    postCode: string,
    phone: string,
    hobbies: string[],
    url: string,
    experienceDays: number,
    useLangs: string[],
    availableStartCode: number,
    availableEndCode: number,
    availableStudent?: string[]
}