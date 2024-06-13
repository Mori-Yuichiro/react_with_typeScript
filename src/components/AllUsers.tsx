import React, { memo } from "react";
import { UserType } from "../types/UserType";

type Props = {
    allUsers: UserType[]
}

export const AllUsers: React.FC<Props> = memo(({ allUsers }) => {
    return (
        <>
            {allUsers.map((user, i: number) => (
                <tr key={`user-${i}`}>
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
                    <td>{user.experienceDays}</td>
                    <td>{user.useLangs}</td>
                    <td>{user.availableStartCode}</td>
                    <td>{user.availableEndCode}</td>
                    <td>{user.availableStudent}</td>
                </tr>
            ))}
        </>
    );
})