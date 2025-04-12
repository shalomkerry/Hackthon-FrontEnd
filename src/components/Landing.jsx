import { Route, Router, Routes, useNavigate, Link, useLocation } from "react-router-dom";


function Landing(){

    const {pathname} = useLocation();
    const navigate = useNavigate() 
    return (
        <>
        <div className="Landing">
        <nav>
            <h3>Logo</h3>
            <div className="middle">
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
                <p>Lorem</p>
            </div>
            <div className="nav--last">
                <button >Sign In</button>
                <button>Book Now</button>
            </div>
        </nav>
        <div className="hero">
            <div className="hero-section">
        <h1 className='hero-section-title'>Lorem ipsum dolor<br/>Lorem Ipsum </h1>
        <p className="hero-section-header">Lorem ipsum dolor sit amet consectetur.
        </p>
            </div>
        <div className="hero-buttons">
        <button onClick={()=>navigate('/loginPage')}>Sign In</button>
        <button>Book Now</button>
        </div>

       <div className="bottom-section">
        <button className="bottom-section-button">Location</button>
        <p className="bottom-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Corrupti sunt distinctio nihil?</p>
        </div> 
        </div>
        <div className="bottom">
        </div>
        </div>
        </>
    )
}
export default Landing