import React, { useState } from 'react'
import './AchievementsForm.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FormModal from './FormModal'

function AchievementsForm(props) {

    const [achie,setAchie] = useState("")
    const[achiealert,setAchiealert] = useState("")
    const[achiealert2,setAchiealert2] = useState("")
    const[achiemodal,setAchiemodal] = useState(false)

    const addachievdata = e=>{
        console.log(achie)
        if(achie!==""){
            props.addachie(achie)
            setAchie("")
            setAchiealert("")
        }else{
            setAchiealert("Please enter your achievement to add")
        }
    }
    const achiemodalhandler = e=>{
        setAchiemodal(!achiemodal)
        if(props.data.achievemnts.length==0){
            setAchiealert2("please add atleast one achievement to view")
        }else{
            setAchiealert2("")
        }
    }



    return (
        <div className = "achievementsform">
            <div className = "achievementsform_container">
                <div className = "achie_block">
                     <div className = "head_container">
                        <h2>Achievements</h2>
                     </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_container">
                            <div className = "input_block">
                                <label>Achievement</label>
                                <input
                                type = "text"
                                name =  "achievement"
                                required
                                value = {achie}
                                onChange = {(e)=>setAchie(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = "btn_additem">
                            <button onClick = {addachievdata}>+</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>props.clearachie()}>Clear</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>achiemodalhandler()}
                            >{<VisibilityIcon fontSize = "small"/>}</button>
                        </div>
                    </div>
                    <p style = {{color:"red"}}>{achiealert2}</p>
                    <p style = {{color:"red"}}>{achiealert}</p>
                    <div className = "footer_container_st">
                        {/* Display enetered Content */} 
                        {
                            achiemodal && <FormModal achiemodalhandler = {()=>achiemodalhandler()} 
                            data = {props.data.achievemnts} type = "achievedata"/>                   
                         }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementsForm
