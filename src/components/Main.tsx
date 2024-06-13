import React, { memo } from "react";
import { useMainHook } from "../hooks/useMainHook";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AllUsers } from "./AllUsers";
import { Students } from "./Students";
import { Mentors } from "./Mentors";

export const Main: React.FC = memo(() => {
    const {
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
    } = useMainHook();

    const InlineStyle = {
        cursor: "pointer",
    }

    return (
        <>
            <button onClick={changeRole}>Change Role</button>
            <table>
                <thead>
                    <tr>
                        <th>名前</th>
                        <td>
                            <input type="text" name="name" value={newStudent.name} onChange={changeNewStudent} />
                        </td>
                    </tr>
                    <tr>
                        <th>ロール</th>
                        <td>{selectedRole}</td>
                    </tr>
                    <tr>
                        <th>メールアドレス</th>
                        <td>
                            <input type="text" name="email" value={newStudent.email} onChange={changeNewStudent} />
                        </td>
                    </tr>
                    <tr>
                        <th>年齢</th>
                        <td>
                            <input type="text" name="age" value={newStudent.age} onChange={changeNewStudent} />
                        </td>
                    </tr>
                    <tr>
                        <th>郵便番号</th>
                        <td>
                            <input type="text" name="postCode" value={newStudent.postCode} onChange={changeNewStudent} />
                        </td>
                    </tr>
                    <tr>
                        <th>電話番号</th>
                        <td>
                            <input type="text" name="phone" value={newStudent.phone} onChange={changeNewStudent} />
                        </td>
                    </tr>
                    <tr>
                        <th>趣味</th>
                        {newHobbies.map((hobby, i) => (
                            <td key={`hobby-${i}`}>{hobby}</td>
                        ))}
                        <td>
                            <input type="text" name="hobbies" value={newHobby} onChange={onChangeNewHobby} />
                            <button onClick={addNewHobby}>追加</button>
                        </td>
                    </tr>
                    <tr>
                        <th>URL</th>
                        <td>
                            <input type="text" name="url" value={newStudent.url} onChange={changeNewStudent} />
                        </td>
                    </tr>
                    {(selectedRole === "student") ? (
                        <>
                            <tr>
                                <th>勉強時間</th>
                                <td>
                                    <input type="text" name="studyMinutes" value={newStudent.studyMinutes} onChange={changeNewStudent} />
                                </td>
                            </tr>
                            <tr>
                                <th>課題番号</th>
                                <td>
                                    <input type="text" name="taskCode" value={newStudent.taskCode} onChange={changeNewStudent} />
                                </td>
                            </tr>
                            <tr>
                                <th>勉強中の言語</th>
                                <td>
                                    <input type="text" name="studyLangs" value={newStudent.studyLangs} onChange={changeNewStudent} />
                                </td>
                            </tr>
                            <tr>
                                <th>ハピネススコア</th>
                                <td>
                                    <input type="text" name="score" value={newStudent.score} onChange={changeNewStudent} />
                                </td>
                            </tr>
                        </>
                    ) : (
                        <>
                            <tr>
                                <th>実務経験月数</th>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>現場で使っている言語</th>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>担当できる課題番号初め</th>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>担当できる課題番号終わり</th>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                        </>
                    )}
                </thead>
            </table >
            <button onClick={addNewStudent}>ユーザー追加</button>
            <Tabs
                defaultActiveKey="all"
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={(k: string | null, e: React.SyntheticEvent<unknown>) => onChangeTab(k)}
            >
                <Tab eventKey="all" title="All" />
                <Tab eventKey="student" title="Student" />
                <Tab eventKey="mentor" title="Mentor" />
            </Tabs>
            <div className="main">
                <table>
                    <thead>
                        <tr>
                            <th>名前</th>
                            <th>ロール</th>
                            <th>メールアドレス</th>
                            <th>年齢</th>
                            <th>郵便番号</th>
                            <th>電話番号</th>
                            <th>趣味</th>
                            <th>URL</th>
                            <th>
                                勉強時間<br />
                                {(selectedTab === "student") && <span style={InlineStyle} onClick={sortStudyMinutes}>ソート</span>}
                            </th>
                            <th>課題番号</th>
                            <th>勉強中の言語</th>
                            <th>
                                ハピネススコア<br />
                                {(selectedTab === "student") && <span style={InlineStyle} onClick={sortScore}>ソート</span>}
                            </th>
                            <th>対応可能なメンター</th>
                            <th>
                                実務経験月数<br />
                                {(selectedTab === "mentor") && <span style={InlineStyle} onClick={sortExperienceDays}>ソート</span>}
                            </th>
                            <th>現場で使っている言語</th>
                            <th>担当できる課題番号初め</th>
                            <th>担当できる課題番号終わり</th>
                            <th>対応可能な生徒</th>
                        </tr>
                        {(selectedTab === "all") ? (
                            <AllUsers allUsers={allUsers} />
                        ) : (selectedTab === "student") ? (
                            <Students students={students} />
                        ) : (selectedTab === "mentor") ? (
                            <Mentors mentors={mentors} />
                        ) : <></>}
                    </thead>
                </table>
            </div>
        </>
    );
})
