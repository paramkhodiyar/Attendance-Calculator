import React, { useState } from "react";
import { useEffect } from "react";
import "./calcpage.css";

function CalcPage({ darkMode }) {
    const [percentage, setPercentage] = useState(null);
    const [classesTotal, setClassesTotal] = useState(null);
    const [classesAttended, setClassesAttended] = useState(null);
    const [classesSemester, setClassesSemester] = useState(null);

    function handleSubmit(e) {  
        e.preventDefault();
        const classesTotal = parseFloat(e.target[0].value);
        const classesAttended = parseFloat(e.target[1].value);
        const classesSemester = parseFloat(e.target[2].value);
        setClassesTotal(classesTotal);
        setClassesAttended(classesAttended);
        setClassesSemester(classesSemester);

        if (classesTotal > 0) {
            const calculatedPercentage = (classesAttended / classesTotal) * 100;
            setPercentage(calculatedPercentage.toFixed(2));
        } else {
            setPercentage("Invalid input");
        }
    }

    const classesLeftToAttend = 
        classesSemester !== null && classesTotal !== null
            ? classesSemester - classesTotal
            : 0;
    const noskipclasses = 
        classesSemester !== null && classesTotal !== null ? ((classesAttended + classesLeftToAttend) / classesSemester )*100 : "undefined"
    const keepuppercentage = 
        classesSemester !== null && classesTotal !== null 
            ? ((percentage * classesSemester)/100) - classesAttended : 0
    return (
        <>
            <div className="mainpage">
                <div className="container">
                    <div className="card">
                        <h1>Calculator</h1>
                        <p>Calculate your attendance percentage with ease!</p>
                        <div className="formcontainer">
                            <form className="form" onSubmit={handleSubmit}>
                                <input type="number" placeholder="Classes Total so-far" />
                                <input type="number" placeholder="Classes Attended so-far" />
                                <input type="number" placeholder="Total classes for the semester" />
                                <button type="submit">Calculate</button>
                            </form>
                        </div>
                        <h2>{percentage !== null ? `Attendance: ${percentage}%` : ""}</h2>
                        <h2>Classes left to attend: {classesLeftToAttend}</h2>
                        <h2>{`Your Attendance percentage if you dont skip classes will be :${noskipclasses}% `}</h2>
                        <h2>{`Number of classes to attend to keep up with your percentage :${keepuppercentage} `}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalcPage;