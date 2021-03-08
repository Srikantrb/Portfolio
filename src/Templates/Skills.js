import React from 'react'
import SkillContainer from './SkillContainer';
import './Skills.css'

function Skills(props) {
    console.log(props.data1);
    return (
        <div className = "skills">
            {/* <div className = "skills_container"> */}
                <div className ="skills_header">
                    <h1>{props.data1.type}</h1>
                </div>
                <div className = "skills_body">
                    {
                        (props.data1.type === "programing")?(<div className = "item_container">
                            {/* Map through skills in the programing section */}
                            {
                            props.data1.content.map((item,index) =>(
                                <h3 key = {index}
                                className = "item"
                                >{item}</h3>
                            ))   
                            }
                        </div>) : (<div className = "skillblock_container">
                            {/* Call the skillsContainer by passing props */}
                            {
                                props.data1.content.map((item,index)=>(
                                <div key = {index}
                                className = "skill_conatiner"
                                >
                                    <SkillContainer head = {item.head} content = {item.body}/>
                                </div>
                                ))
                            }
                        </div>)
                    }
                </div>
                <div className ="skills_footer">
                    <button type = "button" onClick = {props.btnHandler}>BACK TO MENU</button>
                </div>
            {/* </div>             */}
        </div>
    )
}

export default Skills
