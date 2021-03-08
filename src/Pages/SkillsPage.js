import React, { useState } from 'react'
import Skills from '../Templates/Skills'
import './SkillsPage.css'
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import BuildIcon from '@material-ui/icons/Build';
import {useSelector} from 'react-redux'

function SkillsPage() {
    // Retrive data from Global State
    const state = useSelector(state=>state)

    const data = {
        program : {
            type : "programing",
            content :state.skilldata.data[0].languages 
        } ,
        softt : {
            type : "software tools",
            content : state.skilldata.data[1].st_data
        },
        harde : {
            type : "Hardware Expertise",
            content : state.skilldata.data[2].he_data
        }
    };
    
    const [flag,setFlag] = useState(true);
    const [skilldata,setSkilldata] = useState({});

    const pbtnHandler = ()=>{
        console.log("btn pressed");
        setFlag(!flag);
        setSkilldata(data.program);
    };
    const sbtnHandler = ()=>{
        console.log("btn pressed");
        setFlag(!flag);
        setSkilldata(data.softt);
    };
    const hbtnHandler = ()=>{
        console.log("btn pressed");
        setFlag(!flag);
        setSkilldata(data.harde);
    };
if(state.skilldata.data[0].languages.length!==0
        ||state.skilldata.data[1].st_data.length!==0
        ||state.skilldata.data[2].he_data.length!==0){
        return (
            flag?(
                <div className = "skillspage">
                {/* <h1>Skills</h1> */}
                {/* <div className = "skillspage_container"> */}
                    <div className = "skillspage_header">
                        <h1>Technical Skills</h1>
                    </div>
                    <div className = "skillspage_body">
                        <div className = "skillpage_btncontainer">
                        <button 
                        className = "skillpage_btn pbtn" 
                        type = "button"
                        onClick = {()=>pbtnHandler()}
                        >
                            <span>
                                <KeyboardIcon/>
                            </span>PROGRAMMING</button>
                        <button 
                        className = "skillpage_btn sbtn"
                        type = "button"
                        onClick = {()=>sbtnHandler()}
                        >
                            <span>
                            <BuildIcon/>
                            </span>SOFTWARE TOOLS</button>
                        <button 
                        className = "skillpage_btn hbtn"
                        type = "button"
                        onClick = {()=>hbtnHandler()}
                        >
                            <span>
                            <LocalCarWashIcon/>
                            </span>HARDWARE EXPERTISE</button>
                        </div>
                    </div>
                    <div className = "skillspage_footer">
                        <p>Click on a category to see my skill profile!</p>
                    </div>
                {/* </div> */}
                
            </div>
            ) : (<Skills data1 = {skilldata} btnHandler = {()=>pbtnHandler()}/>)
           
        );
}else{
        return(<h3 className = "noskill">Please add some to view</h3>);
}
    
}

export default SkillsPage
