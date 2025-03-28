import React, { useState } from "react";
import "./calcpage.css";
import Arrow38 from "./arrow";

function CalcPage({ darkMode }) {
    const [percentage, setPercentage] = useState(null);
    const [classesTotal, setClassesTotal] = useState(null);
    const [classesAttended, setClassesAttended] = useState(null);
    const [classesSemester, setClassesSemester] = useState(null);
    const [criteria, setCriteria] = useState(75);

    function handleSubmit(e) {
        e.preventDefault();
        const total = parseFloat(e.target[0].value);
        const attended = parseFloat(e.target[1].value);
        const semester = parseFloat(e.target[2].value);
        const selectedCriteria = parseFloat(e.target.criteria.value);

        setClassesTotal(total);
        setClassesAttended(attended);
        setClassesSemester(semester);
        setCriteria(selectedCriteria);

        if (total > 0) {
            const calculatedPercentage = (attended / total) * 100;
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
        classesSemester !== null && classesTotal !== null 
            ? (((classesAttended + classesLeftToAttend) / classesSemester) * 100).toFixed(2) 
            : null;
    
    const keepuppercentage = 
        percentage !== null && classesSemester !== null
            ? Math.max(0, Math.ceil(((percentage * classesSemester) / 100) - classesAttended))
            : null;
    
    const criteriaClassesToMaintain = 
        criteria !== null && classesSemester !== null
            ? Math.max(0, Math.ceil(((criteria / 100) * classesSemester) - classesAttended))
            : null;

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
                                <label htmlFor="criteria">Criteria:</label>
                                <select id="criteria" name="criteria">
                                    <option value="60">60%</option>
                                    <option value="65">65%</option>
                                    <option value="70">70%</option>
                                    <option value="75">75%</option>
                                    <option value="80">80%</option>
                                    <option value="85">85%</option>
                                </select>
                                <button type="submit">Calculate</button>
                            </form>
                        </div>
                        <h2>{percentage !== null ? `Attendance: ${percentage}%` : ""}</h2>
                        <h2>Classes left to attend: {classesLeftToAttend}</h2>
                        <h2>{`Your Attendance percentage if you don't skip classes will be: ${noskipclasses}% `}</h2>
                        <h2>{`Number of classes to attend to keep up with your percentage: ${keepuppercentage}`}</h2>
                        <h2>{`Number of classes to attend to maintain the criteria: ${criteriaClassesToMaintain}`}</h2>
                    </div>
                    <Arrow38 />
                    <div className="analysis">
                        <h2>Analysis</h2>
                        <p>
                            This calculator helps you determine your attendance percentage and the number of classes you need to attend to meet the criteria.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CalcPage;