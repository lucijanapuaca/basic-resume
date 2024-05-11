import React from 'react';

function PersonalInformation(props) {
    const { dateOfBirth, address, contact } = props;
    return (
        <div className="container">
            <h3>Personal Information</h3>
            <div className="content">
                <p><b>Date of birth:</b> {dateOfBirth}</p>
                <p><b>Address:</b> {address}</p>
                <p><b>Contact:</b> {contact}</p>
            </div>
        </div>
    );
}


function Abilities() {

    const skillAcquired = [
        { skill: "HTML", percentage: 90 },
        { skill: "CSS", percentage: 70 },
        { skill: "JavaScript", percentage: 50 },
        { skill: "C", percentage: 80 }
    ];

    return (
        <div className="container">
            <h3>Abilities</h3>
            <div className="content">
                {skillAcquired.map((item, index) => (
                    <div key={index} className="skills">
                        <div>
                            <p>{item.skill}</p>
                        </div>
                        <div className="graph-container">
                            <svg width="100" height="20">
                                <rect width={item.percentage} height="20" />
                            </svg>
                        </div>
                        <div>
                            <span>{item.percentage}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

function Resume() {
    return (
        <div className="resume-container">
            <div className="name">
                <h1>Lucijana Puača</h1>
            </div>
            <div className="sections">
                <PersonalInformation
                    dateOfBirth="15.12.2001."
                    address="Šižgorićeva 7, Split"
                    contact="0989371113"
                />
                <Abilities />
            </div>
        </div>
    );
}

export default Resume;
