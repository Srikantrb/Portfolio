import React from 'react'
import './WelcomePage.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useSpring,animated } from 'react-spring';

function WelcomePage() {
    // Retrive data from state
    const state = useSelector(state=>state)
    const fullname = state.name
    const tag1 = state.basicdata.tag1
    const tag2 = state.basicdata.tag2
    const tag3 = state.basicdata.tag3
    const tagline = state.basicdata.tagline.split(',')
    // console.log(tagline.split(','))

// Spring definition 
    const sprop1 = useSpring({
        from:{marginTop:-1000},
        marginTop:0
    })
    return (
            <div className = "welcomepage">
                {/* <h1>WelcomePage</h1> */}
                <div className = "welcomepage_container">
                    <div className = "welcomepage_name">
                        <h1>{fullname}</h1>
                    </div>
                    <hr></hr>
                    <div className = "welcomepage_skills">
                        <p>{tag1}</p>
                        <p>{tag2}</p>
                        <p>{tag3}</p>
                    </div>
                    <div className = "welcomepage_profiletag">
                        <p>{tagline[0]}<br/> 
                        {tagline[1]&&tagline[1]}</p>
                    </div>
                    <div className = "welcomepage_info">
                        <p>Have a look around to learn more about<br/> 
                        my projects and background</p>
                    </div>
                        
                    
                </div>
                
                    <div className = "link_div">
                        <Link to = "/education" className = "wp_link">
                            <div className = "welcomepage_navigator">
                                <p>Click Here!</p>
                                <KeyboardArrowDownIcon className = "navigator_icon"/>
                            </div>
                        </Link>
                    </div>
            </div>
    )
}

export default WelcomePage
