import React, { useState } from 'react'
import {useSpring,animated} from 'react-spring'

function SpringTest() {
    const [isvisible,setIsvisible] = useState(true)
    const props = useSpring({
        from:{opacity:0,marginTop:-500},
        to : {opacity:1,marginTop:0},
    })
    const props1 = useSpring({
        from:{opacity:0},
        to : {opacity:1},
        config:{duration:2000,delay:2000}
    })
    const props2 = useSpring({
        from :{}
    })
    return (
        <animated.div style = {props}>
            {
                isvisible ? (<div style = {{backgroundColor:"steelblue",color:"white"}}>
                <h1>Heading 1</h1>
                <p>paragraph 1</p>
            </div>):''
            }
            
            <animated.div style = {props1}>
            <div style = {{backgroundColor:"blue",color:"white"}}>
                <h1>Heading 1</h1>
                <p>paragraph 1</p>
            </div>
            </animated.div>
            <button onClick = {e=>setIsvisible(!isvisible)}>Hide</button>
        </animated.div>
    )
}

export default SpringTest
