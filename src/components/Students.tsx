import { memo } from "react";
import { StudentType } from "../types/StudentType";

type Props = {
    students: StudentType[]
}

export const Students: React.FC<Props> = memo(({ students }) => {
    return (
        <>
            {students.map((user, i: number) => (
                <tr key={`student-${i}`}>
                    <th>{user.name}</th>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.postCode}</td>
                    <td>{user.phone}</td>
                    <td>{user.hobbies}</td>
                    <td>{user.url}</td>
                    <td>{user.studyMinutes}</td>
                    <td>{user.taskCode}</td>
                    <td>{user.studyLangs}</td>
                    <td>{user.score}</td>
                    <td>{user.availableMentor}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            ))}
        </>
    );
})