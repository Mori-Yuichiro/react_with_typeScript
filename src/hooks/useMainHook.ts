import { useCallback, useEffect, useState } from "react";
import { UserType } from "../types/UserType";
import { MentorType } from "../types/MentorType";
import { StudentType } from "../types/StudentType";


export const useMainHook = () => {
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

    // const mentorList: MentorType[] = USER_LIST.filter((user): user is MentorType => user.role === "mentor");
    const [mentorList, setMentorList] = useState<MentorType[]>(
        USER_LIST.filter((user): user is MentorType => user.role === "mentor")
    );
    const [studentList, setStudentList] = useState<StudentType[]>(
        USER_LIST.filter((user): user is StudentType => user.role === "student")
    );

    const [students, setStudents] = useState<StudentType[]>([]);
    const [mentors, setMentors] = useState<MentorType[]>([]);
    const [allUsers, setAllUsers] = useState<UserType[]>([]);
    const [selectedTab, setSelectedTab] = useState<string | null>("all");

    const [upStudyMinutes, setUpStudyMinutes] = useState<"up" | "down">("up");
    const [upScore, setUpScore] = useState<"up" | "down">("up");
    const [upExperienceDays, setUpExperienceDays] = useState<"up" | "down">("up");

    const onChangeTab = useCallback((k: string | null) => {
        setSelectedTab(k);
    }, [])

    // ソートに使う関数
    const compareFunc = useCallback((a: UserType, b: UserType) => {
        return a.id - b.id;
    }, [])

    const compareStudyMinute = useCallback((a: StudentType, b: StudentType) => {
        if (upStudyMinutes === "up") {
            setUpStudyMinutes("down");
            return a.studyMinutes - b.studyMinutes;
        } else {
            setUpStudyMinutes("up");
            return b.studyMinutes - a.studyMinutes;
        }
    }, [upStudyMinutes])

    const compareScore = useCallback((a: StudentType, b: StudentType) => {
        if (upScore === "up") {
            setUpScore("down");
            return a.studyMinutes - b.studyMinutes;
        } else {
            setUpScore("up");
            return b.studyMinutes - a.studyMinutes;
        }
    }, [upScore])

    const compareExperienceDays = useCallback((a: MentorType, b: MentorType) => {
        if (upExperienceDays === "up") {
            setUpExperienceDays("down");
            return a.experienceDays - b.experienceDays;
        } else {
            setUpExperienceDays("up");
            return b.experienceDays - a.experienceDays;
        }
    }, [upExperienceDays])

    const sortStudyMinutes = useCallback(() => {
        setStudents(prevStudents => [...prevStudents].sort(compareStudyMinute));
    }, [compareStudyMinute])

    const sortScore = useCallback(() => {
        setStudents(prevStudents => [...prevStudents].sort(compareScore));
    }, [compareScore])

    const sortExperienceDays = useCallback(() => {
        setMentors(prevExperienceDays => [...prevExperienceDays].sort(compareExperienceDays));
    }, [compareExperienceDays])

    // 新規ユーザー登録用
    const [selectedRole, setSelectedRole] = useState<"student" | "mentor">("student");

    const changeRole = useCallback(() => {
        if (selectedRole === "student") {
            setSelectedRole("mentor");
        } else if (selectedRole === "mentor") {
            setSelectedRole("student");
        }
    }, [selectedRole])

    const [newStudent, setNewStudent] = useState<StudentType>({
        id: studentList.length + mentorList.length + 1,
        name: "",
        role: "student",
        email: "",
        age: 0,
        postCode: "",
        phone: "",
        hobbies: [""],
        url: "",
        studyMinutes: 0,
        taskCode: 0,
        studyLangs: [""],
        score: 0
    });
    const [newMentor, setNewMentor] = useState<MentorType>({
        id: 0,
        name: "",
        role: 'mentor',
        email: "",
        age: 0,
        postCode: "",
        phone: "",
        hobbies: [],
        url: "",
        experienceDays: 0,
        useLangs: [],
        availableStartCode: 0,
        availableEndCode: 0
    });

    const changeNewStudent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewStudent({
            ...newStudent,
            [name]: value
        });
    }, [newStudent])

    const [newHobbies, setNewHobbies] = useState<string[]>([]);
    const [newHobby, setNewHobby] = useState<string>("");

    const onChangeNewHobby = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewHobby(e.target.value);
    }, [setNewHobby])

    const addNewHobby = useCallback(() => {
        setNewHobbies([...newHobbies, newHobby]);
        setNewHobby("");
    }, [newHobbies, newHobby])

    const addNewStudent = useCallback(() => {
        setNewStudent({
            ...newStudent,
            hobbies: newHobbies
        })
        setStudentList([...studentList, newStudent]);
    }, [newStudent, selectedRole, newHobbies])

    useEffect(() => {
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
        const newUsers: UserType[] = [...studentList, ...mentorList];
        setAllUsers(newUsers.sort(compareFunc));
    }, [selectedTab, addNewStudent])

    return {
        allUsers,
        students,
        mentors,
        onChangeTab,
        selectedTab,
        sortStudyMinutes,
        sortScore,
        sortExperienceDays,
        selectedRole,
        changeRole,
        newStudent,
        changeNewStudent,
        newHobbies,
        newHobby,
        onChangeNewHobby,
        addNewHobby,
        addNewStudent
    };
}