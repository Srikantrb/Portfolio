import React from 'react'
import { useState } from 'react'
import './EducationForm.css'

function EducationForm(props) {
    const[edualert,setEdualert] = useState("")
    const[edusavealert,setEdusavealert] = useState("")
    const handleFormsave =e=>{
        if(props.data.universityname==="" ||props.data.gcollegename==="" 
        ||props.data.glocation==="" || props.data.gcgpa===""
        ||props.data.gyear==="" ||props.data.iboardname===""
        ||props.data.icollegename===""||props.data.ilocation===""
        ||props.data.iyear===""||props.data.icgpa===""
        ||props.data.sboardname===""||props.data.schoolname===""
        ||props.data.slocation===""||props.data.syear===""
        ||props.data.scgpa==="" ){
            setEdualert("Please fill all the required fields")
            setEdusavealert("")
            props.formcheck(false)
        }else{
            setEdualert("")
            setEdusavealert("Data saved !")
            props.formcheck(true)
        }

    }


    return (
        <div className = "eductaionform">
            {/* education Form */}
            <div className = "eductaionform_container">
                <div className = "graduation_block">
                    <div className = "head_container">
                        <h2>Graduation</h2>
                    </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_block">
                            <label>University Name<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "universityname"
                            required
                            value = {props.data.universityname}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>College Name<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "gcollegename"
                            required
                            value = {props.data.gcollegename}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Location<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name = "glocation"
                            required
                            value = {props.data.glocation}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Year<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "gyear"
                            required
                            placeholder = "2013 - 2015"
                            value = {props.data.gyear}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>CGPA<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "number"
                            name =  "gcgpa"
                            required
                            placeholder = "0.00"
                            value = {props.data.gcgpa}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <hr/>
                {/* Intermediate Section */}
                <div className = "intermediate_block">
                    <div className = "head_container">
                        <h2>Intermediate or Equivalent</h2>
                    </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_block">
                            <label>Board Name<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "iboardname"
                            required
                            value = {props.data.iboardname}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>College Name<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "icollegename"
                            required
                            value = {props.data.icollegename}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Location<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name = "ilocation"
                            required
                            value = {props.data.ilocation}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Year<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "iyear"
                            required
                            placeholder = "2013 - 2015"
                            value = {props.data.iyear}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>CGPA<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "number"
                            name =  "icgpa"
                            required
                            placeholder = "0.00"
                            value = {props.data.icgpa}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <hr/>
                {/* Schooling section */}
                <div className = "schooling_block">
                     <div className = "head_container">
                        <h2>School</h2>
                    </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_block">
                            <label>Board Name<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "sboardname"
                            required
                            value = {props.data.sboardname}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>School Name<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "schoolname"
                            required
                            value = {props.data.schoolname}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Location<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name = "slocation"
                            required
                            value = {props.data.slocation}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Year<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "text"
                            name =  "syear"
                            required
                            placeholder = "2013 - 2015"
                            value = {props.data.syear}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>CGPA<span style={{color:"red"}}> *</span></label>
                            <input
                            type = "number"
                            name =  "scgpa"
                            required
                            placeholder = "0.00"
                            value = {props.data.scgpa}
                            onChange = {e=>props.handleChange(e)}
                            />
                        </div>
                    </div>
                </div>
                <p style ={{color:"red"}}>{edualert}</p>
                <hr/>
                <p style = {{color:"blueviolet"}}>{edusavealert}</p>
                <div className = "submitform_btn">
                    <button type = "button" name = "btn" onClick = {(e)=>handleFormsave(e)}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default EducationForm
