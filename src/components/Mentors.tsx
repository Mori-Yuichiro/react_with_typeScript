import React, { memo } from "react";
import { MentorType } from "../types/MentorType";

type Props = {
    mentors: MentorType[]
}

export const Mentors: React.FC<Props> = memo(({ mentors }) => {
    return (
        <>
            {mentors.map((user, i: number) => (
                <tr key={`mentor-${i}`}>
                    <th>{user.name}</th>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.postCode}</td>
                    <td>{user.phone}</td>
                    <td>{user.hobbies}</td>
                    <td>{user.url}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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