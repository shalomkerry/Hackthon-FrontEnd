import { Route, Router, Routes, useNavigate, Link } from "react-router-dom";


function Landing(){

    const navigate = useNavigate() 
    return (
        <>
        <div className="Landing">
        <nav>
            <h3 className="">Logo</h3>
            <div className="nav--middle">
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
            </div>
            <div className="nav--last">
                <button className='nav--last-button nav-transparent' onClick={()=>navigate('/loginPage')} >Sign In</button>
                <button className="nav--last-button nav-yellow" onClick={()=>navigate('/loginPage')}>Book Now</button>
            </div>
        </nav>
        <div className="hero">
            <div className="hero-section">
        <h1 className='hero-section-title'>Lorem ipsum dolor<br/>Lorem Ipsum </h1>
        <p className="hero-section-header">Lorem ipsum dolor sit amet consectetur.
        </p>
            </div>
        <div className="hero-buttons">
        <button className="hero-buttons-btn hero-btn-white"  onClick={()=>navigate('/loginPage')}>Sign In</button>
        <button onClick={()=>navigate('/bookNow')}className="hero-buttons-btn">Book Now</button>
        </div>

       <div className="bottom-section">
        <button className="bottom-section-button">Location</button>
        <p className="bottom-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Corrupti sunt distinctio nihil?</p>
        </div> 
        </div>
        <div className="bottom">
        <div className="Room flex">
        <img src="./src/assets/Icons/home.svg" alt="" />
        <div>
                <p>Room</p>
                <p>single bed</p>
        </div>

        <img src="./src/assets/Icons/down.svg" alt="" />
            </div>
            <div className="Check-in flex">
            <img src="./src/assets/Icons/date.svg" alt="" />
<div>

                <p>Check In</p>
                <p>15 May 2025</p>
</div>

        <img src="./src/assets/Icons/down.svg" alt="" />
            </div>
            <div className="Check-out flex">

            <img src="./src/assets/Icons/date.svg" alt="" />
<div>
                <p>Checkout</p>
                <p>16 May 2025</p>
</div>

        <img src="./src/assets/Icons/down.svg" alt="" />
            </div>
            <div className="Guests flex">
            <img src="./src/assets/Icons/users.svg" alt="" />
        <div>
                <p>Guest</p>
                <p>For Adults</p>
            
        </div>

        <img src="./src/assets/Icons/down.svg" alt="" />
            </div>

        <div>
            <button className="nav--last-button nav-yellow bottom-button" onClick={()=>navigate('/landingPage')}>Sign Up</button>
        </div>
        </div>
        </div>
        </>
    )
}
export default Landing