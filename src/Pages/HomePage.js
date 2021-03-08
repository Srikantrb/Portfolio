import React, { useEffect } from 'react'
import './HomePage.css'
import Typical from 'react-typical'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function HomePage(props) {
    const array = ["Software developer",4000,"Mechanical engineer",4000,"Researcher",4000];
    
    useEffect(()=>{
        window.history.pushState({page : "home page"},"home page" ,"/")
    },[])

    // const jumpInbtn = ()=>{
    //     // jump page to portfolio page ---- react router dom [history.push()]
    // }
    return (
        <div className = "homepage">
            <div className = "homepage_container">
                {/* <h1>Hello, Sir</h1> */}
                <div className = "name">
                    <h1>Srikanth Reddy Badam</h1>
                </div>
                {/* <p>Where are you looking at?</p> */}
                <div>
                    <span>I am a <br/>
                    <h2 className = "typical">
                            <Typical
                            steps = {array}
                            loop = {Infinity}
                            wrapper = "p"
                            />
                    </h2>
                    </span>
                </div>
                <div className = "location">
                    <h2>AP, India</h2>
                </div>
                <button onClick = {props.btnhandler}>Jump In
                    <span className = "hpbtn_icon">
                        <ArrowDownwardIcon/>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default HomePage
