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
                            <p>Get Started</p>
                            <a href="/details/codeforces"><img src={arrow} alt="" /></a>
                        </div>
                    </div>
                    <div className="category-1-right">
                        <img className='img-photo' src={i} alt="" />
                    </div>
                </div>
                <div className="category-2">
                    <div className="category-2-left">
                        <div>
                            <h2>Leetcode</h2>
                        </div>
                        <div className="category-2-left-content">
                            <p>Get Started</p>
                            <a href="/details/leetcode"><img src={arrow} alt="" /></a>
                        </div>
                    </div>
                    <div className="category-2-right">
                        <img className='img-photo' src={i} alt="" />
                    </div>
                </div>
                <div className="category-3">
                    <div className="category-3-left">
                        <div>
                            <h2>Codechef</h2>
                        </div>
                        <div className="category-3-left-content">
                            <p>Get Started</p>
                            <a href="/details/codechef"><img src={arrow} alt="" /></a>
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
