import arrow from '../../assets/arrow.svg'
import i from '../../assets/pic.svg'
import './Home.css'
const Home = () => {

    return (
        <div className='home'>
            <div className="categories">
                <div className="category-1">
                    <div className="category-1-left">
                        <div>
                            <h2>Codeforces</h2>
                        </div>
                        <div className='category-1-left-content'>
                            <p>Codeforces</p>
                            <img src={arrow} alt="" />
                            <a href="/details/codeforces">here</a>
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
                            <a href="/details/codechef">here</a>
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
                            <a href="/details/leetcode">here</a>
                        </div>
                    </div>
                    <div className="category-3-right">
                        <img className='img-photo' src={i} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
