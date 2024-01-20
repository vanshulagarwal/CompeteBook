import React, { useState, useEffect } from 'react';
import './Contest.scss'; // Add your CSS file for styling

const ContestPage = () => {
    const [contestData, setContestData] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState('Codeforces');

    // Assume you have a backend API endpoint to fetch contest data based on platform
    const fetchContestData = async () => {
        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
            const response = await fetch(`YOUR_API_ENDPOINT?platform=${selectedPlatform}`);
            const data = await response.json();
            setContestData(data);
        } catch (error) {
            console.error('Error fetching contest data:', error);
        }
    };

    useEffect(() => {
        fetchContestData();
    }, [selectedPlatform]);

    return (
        <div className="contest-page">
            <h1>Upcoming Contests</h1>
            <div className="buttons-container">
                <button onClick={() => setSelectedPlatform('Codeforces')}>Codeforces</button>
                <button onClick={() => setSelectedPlatform('LeetCode')}>LeetCode</button>
                <button onClick={() => setSelectedPlatform('GFG')}>GFG</button>
            </div>
            <div className="contest-list">
                {contestData.map((contest) => (
                    <div
                        key={contest.id}
                        className={`contest-item ${contest.attempted ? 'attempted' : ''}`}
                    >
                        <div className="contest-name">{contest.name}</div>
                        <div className="contest-date">{contest.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContestPage;
