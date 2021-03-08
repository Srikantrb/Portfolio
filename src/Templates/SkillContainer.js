import React from 'react'
import './SkillContainer.css'

function SkillContainer(props) {
    
    return (
        <div className = "skillcontainer">
            <h2>{props.head}</h2>
            <hr></hr>
            {
                props.content?.map((item,index)=>(
                    <h3 key = {index}
                    className = "skill_item"
                    >{item}</h3>
                ))
            }
        </div>
    )
}

export default SkillContainer
