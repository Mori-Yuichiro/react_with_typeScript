import { useEffect, useState } from "react";
import { MentorType } from "../types/MentorType";
import { StudentType } from "../types/StudentType";


export const useMainHook = () => {
    type UserType = {
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

    // const USER_LIST: (MentorType | StudentType)[] = [
    const USER_LIST: (UserType)[] = [
        { id: 1, name: "鈴木太郎", role: "student", email: "test1@happiness.com", age: 26, postCode: "100-0003", phone: "0120000001", hobbies: ["旅行", "食べ歩き", "サーフィン"], url: "https://aaa.com", studyMinutes: 3000, taskCode: 101, studyLangs: ["Rails", "Javascript"], score: 68 },
        { id: 2, name: "鈴木二郎", role: "mentor", email: "test2@happiness.com", age: 31, postCode: "100-0005", phone: "0120000002", hobbies: ["サッカー", "ランニング", "筋トレ"], url: "https://bbb.com", experienceDays: 1850, useLangs: ["Next.js", "GoLang"], availableStartCode: 201, availableEndCode: 302 },
        { id: 3, name: "鈴木三郎", role: "student", email: "test3@happiness.com", age: 23, postCode: "300-0332", phone: "0120000003", hobbies: ["アニメ", "ゲーム", "旅行"], url: "https://ccc.com", studyMinutes: 125000, taskCode: 204, studyLangs: ["Rails", "Next.js"], score: 90 },
        { id: 4, name: "鈴木四郎", role: "mentor", email: "test4@happiness.com", age: 31, postCode: "100-0005", phone: "0120000004", hobbies: ["食べ歩き", "ランニング", "旅行"], url: "https://ddd.com", experienceDays: 260, useLangs: ["PHP", "Javascript"], availableStartCode: 103, availableEndCode: 408 },
        { id: 5, name: "鈴木五郎", role: "student", email: "test5@happiness.com", age: 22, postCode: "300-0005", phone: "0120000005", hobbies: ["筋トレ", "ランニング"], url: "https://eee.com", studyMinutes: 47800, taskCode: 305, studyLangs: ["Next.js", "Rails"], score: 84 },
        { id: 6, name: "鈴木六郎", role: "mentor", email: "test6@happiness.com", age: 28, postCode: "100-0007", phone: "0120000006", hobbies: ["ゲーム", "サッカー"], url: "https://fff.com", experienceDays: 260, useLangs: ["PHP", "Javascript"], availableStartCode: 101, availableEndCode: 302 },
        { id: 7, name: "鈴木七郎", role: "student", email: "test7@happiness.com", age: 24, postCode: "300-0008", phone: "0120000007", hobbies: ["筋トレ", "ダーツ"], url: "https://ggg.com", studyMinutes: 26900, taskCode: 401, studyLangs: ["PHP", "Rails"], score: 73 },
        { id: 8, name: "鈴木八郎", role: "mentor", email: "test8@happiness.com", age: 33, postCode: "100-0009", phone: "0120000008", hobbies: ["ランニング", "旅行"], url: "https://hhh.com", experienceDays: 6000, useLangs: ["Golang", "Rails"], availableStartCode: 301, availableEndCode: 505 },
    ];

    const [students, setStudents] = useState<StudentType[]>([]);
    const [mentors, setMentors] = useState<MentorType[]>([]);

    useEffect(() => {
        const mentorList: MentorType[] = USER_LIST.filter((user): user is MentorType => user.role === "mentor");
        const studentList: StudentType[] = USER_LIST.filter((user): user is StudentType => user.role === "student");

        // 対応可能な生徒を取得
        mentorList.map(mentor => {
            const availableStudent: string[] = [];
            studentList.map(student => {
                if (mentor.availableStartCode <= student.taskCode && mentor.availableEndCode >= student.taskCode) {
                    availableStudent.push(student.name);
                }
            })
            mentor.availableStudent = availableStudent;
        })

        // 対応可能なメンターを取得
        studentList.map(student => {
            const availableMentor: string[] = [];
            mentorList.map(mentor => {
                if (mentor.availableStartCode <= student.taskCode && mentor.availableEndCode >= student.taskCode) {
                    availableMentor.push(mentor.name);
                }
            })
            student.availableMentor = availableMentor;
        })

        setStudents(studentList);
        setMentors(mentorList);
    }, [])

    return { USER_LIST, students, mentors };
}