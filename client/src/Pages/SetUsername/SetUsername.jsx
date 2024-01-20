// CodeforcesForm.jsx

import React, { useState } from 'react';

const CodeforcesForm = () => {
    const [codeforcesUsername, setCodeforcesUsername] = useState('');

    const handleInputChange = (e) => {
        setCodeforcesUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any actions with the entered Codeforces username here
        console.log('Submitted Codeforces Username:', codeforcesUsername);
    };
}
import './SetUsername.scss'
const SetUsername = () => {
    return (
        <>
            <div>
                <div>
                    <h1>
                        Enter your platform's ID
                    </h1>
                    <div className="Outer">
                        <div className='form-1'>
                            <form >
                                <label htmlFor="codeforcesUsername">Codeforces Username:</label>
                                <input
                                    type="text"
                                    id="codeforcesUsername"
                                    // value={codeforcesUsername}
                                    // onChange={handleInputChange}
                                    placeholder="Enter your Codeforces username"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className='form-2'>
                            <form>

                            </form>
                        </div>
                        <div className='form-3'>
                            <form>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SetUsername