import arrow from '../../assets/arrow.svg'
import i from '../../assets/pic.svg'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
    return (
        <>
            <Navbar />
            <div>
                <div>
                    <h2>Welcome Back Yash!</h2>
                </div>
                <div className="categories">
                    <div className="category-1">
                        <div className="category-1-left">
                            <div>
                                <h2>Platform :-</h2>
                            </div>
                            <div className='category-1-left-content'>
                                <p>Codeforces</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="category-1-right">
                            <img className='img-photo' src={i} alt="" />
                        </div>
                    </div>
                    <div className="category-2">
                        <div className="category-2-left">
                            <div>
                                <h2>Platform:-</h2>
                            </div>
                            <div className="category-2-left-content">
                                <p>Leetcode</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="category-2-right">
                            <img className='img-photo' src={i} alt="" />
                        </div>
                    </div>
                    <div className="category-3">
                        <div className="category-3-left">
                            <div>
                                <h2>Platform</h2>
                            </div>
                            <div className="category-3-left-content">
                                <p>Codechef</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="category-3-right">
                            <img className='img-photo' src={i} alt="" />
                        </div>
                    </div>
                    <div className="category-4">
                        <div className="category-4-left">
                            <div>
                                <h2>Platform</h2>
                            </div>
                            <div className='category-4-left-content'>
                                <p>HackerRank</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="category-4-right">
                            <img className='img-photo' src={i} alt="" />
                        </div>
                    </div>
                    <div className="category-5">
                        <div className="category-5-left">
                            <div>
                                <h2>Platform</h2>
                            </div>
                            <div className='category-5-left-content'>
                                <p>GFG</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className="category-5-right">
                            <img className='img-photo' src={i} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home
