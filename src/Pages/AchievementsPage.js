import React from 'react'
import './AchievementsPage.css'
import {useSelector} from 'react-redux'

function AchievementsPage() {
    const state = useSelector(state=>state)


    const achievementdata = state.achievementdata
if(achievementdata.achievements.length!==0){
    return (
        <div className = "achievementspage">
            <div className = "achp_header">
                <h1>Achivements</h1>
            </div>
            <div className = "achp_body">
                {
                    achievementdata.achievements?.map((item,index)=>(
                        <div key = {index}
                        className = "achp_itemblock"
                        >
                            {/* <span>&#8226;</span> */}
                            <p>{item}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}else{
    return(<h3 className = "noskill">Please add some to view</h3>);
}
    
}

export default AchievementsPage
