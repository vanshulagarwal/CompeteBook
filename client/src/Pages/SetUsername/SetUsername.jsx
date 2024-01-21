// CodeforcesForm.jsx

import { useState } from 'react';
import './SetUsername.scss'



const SetUsername = () => {
    const [cfusername, setCfUsername] = useState('');
    const [lcusername, setLcUsername] = useState('');
    const [ccusername, setCcUsername] = useState('');

//set post request to /setusername such that we can gathe user data of various platforms and so that platform's contest rating in dashboard section
    const handleCfInputChange = (e) => {
        setCfUsername(e.target.value);
    };
    const handleLcInputChange = (e) => {
        setLcUsername(e.target.value);
    };
    const handleCcInputChange = (e) => {
        setCcUsername(e.target.value);
    };
    return (
        <>
            <div>
                <div>
                    <h1>
                        Enter your platforms ID
                    </h1>
                    <div className="Outer">
                        <div className='form-1'>
                            <form >
                                <label htmlFor="codeforcesUsername">Codeforces Username:</label>
                                <input
                                    type="text"
                                    id="codeforcesUsername"
                                    name="cf"
                                    value={cfusername}
                                    onChange={handleCfInputChange}
                                    placeholder="Enter your Codeforces username"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className='form-2'>
                        <form >
                                <label htmlFor="codeforcesUsername">LEETCODE  Username:</label>
                                <input
                                    type="text"
                                    id="codeforcesUsername"
                                    name="lc"
                                    value={lcusername}
                                    onChange={handleLcInputChange}
                                    placeholder="Enter your Codeforces username"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className='form-3'>
                        <form  >
                                <label htmlFor="codeforcesUsername">codechef Username:</label>
                                <input
                                    type="text"
                                    id="codeforcesUsername"
                                    name="cc"
                                    value={ccusername}
                                    onChange={handleCcInputChange}
                                    placeholder="Enter your Codeforces username"
                                    required
                                />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SetUsername