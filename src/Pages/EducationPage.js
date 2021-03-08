import React, { useEffect, useState }  from 'react'
import './EducationPage.css'
import {useSelector} from 'react-redux'

function EducationPage() {
    // Retrive data from Global State
    
    const state = useSelector(state =>state)
    const universityname = state.educationdata.universityname
    const gcollegename = state.educationdata.gcollegename
    const glocation = state.educationdata.glocation
    const gyear = state.educationdata.gyear
    const gcgpa = state.educationdata.gcgpa
    const iboardname = state.educationdata.iboardname
    const icollegename = state.educationdata.icollegename
    const ilocation = state.educationdata.ilocation
    const iyear = state.educationdata.iyear
    const icgpa = state.educationdata.icgpa
    const sboardname= state.educationdata.sboardname
    const schoolname= state.educationdata.schoolname
    const slocation= state.educationdata.slocation
    const syear= state.educationdata.syear
    const scgpa= state.educationdata.scgpa
    
    const [eg,setEg] = useState(false);
    const [int,setInt] = useState(false);
    const [sch,setSch] = useState(false);

    const[eg1,setEg1] = useState("+");
    const[int1,setInt1] = useState("+");
    const[sch1,setSch1] = useState("+");
    useEffect(()=>{
        if(eg){
            document.getElementById("eng_info").style.display = "block";
            setEg1("-");
        }else{
            document.getElementById("eng_info").style.display = "none"
            setEg1("+");
        }
        if(int){
            document.getElementById("int_info").style.display = "block";
            setInt1("-");
        }else{
            document.getElementById("int_info").style.display = "none"
            setInt1("+");
        }
        if(sch){
            document.getElementById("sch_info").style.display = "block";
            setSch1("-");
        }else{
            document.getElementById("sch_info").style.display = "none"
            setSch1("+");
        }
    },[eg,int,sch]);

    const toggleHandler = ()=>{
        setEg(!eg);
    }
    const toggleHandler1 = ()=>{
        setInt(!int);
    }
    const toggleHandler2 = () =>{
        setSch(!sch);
    }
// Style definitions
    
    return (
        <div className = "educationpage">
            {/* <h1>EducationPage</h1> */}
            <div className = "educationpage_container">
                <div className = "educationpage_header">
                    <h1>Education Details</h1>
                </div>
                {/* Engineering section */}
                <div className = "edu_eng">
                    <button 
                    onClick = {(e)=>toggleHandler(e)}
                    className = "expand_btn">
                        <span className ="span_">{eg1}</span>
                        <span>Graduation</span>
                        <span className = "span_grade">{gcgpa}</span>
                    </button>
                    <div className = "edu_eng_info" id = "eng_info">
                        <div className = "edu_eng_info_block">
                        <label>Year : </label>
                        <p className = "year">{gyear}</p>
                        </div>
                        <div className = "edu_eng_info_block">
                        <label>University Name : </label>
                        <p className = "university">{universityname}</p>
                        </div>
                        <div className = "edu_eng_info_block">
                        <label>College Name : </label>
                        <p className = "institutename">{gcollegename}</p>
                        </div>
                        <div className = "edu_eng_info_block">
                        <label>Location : </label>
                        <p className = "location">{glocation}</p>
                        </div>
                    </div>
                </div>
                
                {/* Intermediate section */}
                <div className = "edu_int">
                    <button 
                    onClick = {()=>toggleHandler1()}
                    className = "expand_btn">
                        <span className ="span_">{int1}</span>
                        <span>Intermediate</span>
                        <span className = "span_grade">{icgpa}</span>
                    </button>
                    <div className = "edu_int_info" id = "int_info">
                        <div className = "edu_int_info_block">
                        <label>Year : </label>
                        <p className = "year">{iyear}</p>
                        </div>
                        <div className = "edu_int_info_block">
                        <label>Board : </label>
                        <p className = "board">{iboardname}</p>
                        </div>
                        <div className = "edu_int_info_block">
                        <label>College Name : </label>
                        <p className = "institutename">{icollegename}</p>
                        </div>
                        <div className = "edu_int_info_block">
                        <label>Location : </label>
                        <p className = "location">{ilocation}</p>
                        </div>
                    </div>
                </div>
                {/* School section */}
                <div className = "edu_sch">
                    <button 
                    onClick = {()=>toggleHandler2()}
                    className = "expand_btn">
                        <span className ="span_">{sch1}</span>
                        <span>10th</span>
                        <span className = "span_grade">{scgpa}</span>
                    </button>
                    <div className = "edu_sch_info" id = "sch_info">
                        <div className = "edu_sch_info_block">
                        <label>Year : </label>
                        <p className = "year">{syear}</p>
                        </div>
                        <div className = "edu_sch_info_block">
                        <label>Board : </label>
                        <p className = "board">{sboardname}</p>
                        </div>
                        <div className = "edu_sch_info_block">
                        <label>School Name : </label>
                        <p className = "institutename">{schoolname}</p>
                        </div>
                        <div className = "edu_sch_info_block">
                        <label>Location : </label>
                        <p className = "location">{slocation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationPage
