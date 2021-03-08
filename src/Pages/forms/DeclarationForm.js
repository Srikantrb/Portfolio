import React, { useState } from 'react'
import './DeclarationForm.css'

var date = new Date()


function DeclarationForm(props) {
    const [ischecked,setIschecked] = useState(false)
    const[place,setPlace] = useState("")
    const[declalert,setDeclalert] = useState("")

    const handleResume = async(e)=>{
        let rs = new FormData();
        rs.append("Resume",e.target.files[0])
        console.log(rs.get("Resume"));

        let reader = new FileReader()
        reader.onload = ()=>{
            if(reader.readyState===2){
                // Do Something
                if(ischecked){
                    props.replaceitem({resumedata:reader.result,
                        date:`${date.getDay() + 1}/${date.getMonth()}/${date.getFullYear()}`
                        })
                    setDeclalert("")
                }else{
                    setDeclalert("Please check the check box")
                }
            }
        }
       await reader.readAsDataURL(e.target.files[0])
    }
    const handleForm_submit = e=>{
        if(ischecked){
            props.formsubmithandler()
            setDeclalert("")
        }else{
            setDeclalert("Please fill all the details")
        }
    }


    return (
        <div className = "declarationform">
            {/* <h1>DeclarationForm</h1> */}
            <div className ="declarationform_container">
                <div className = "head_container">
                    <h2>Declaration</h2>
                </div>
                <hr className = "highlightline"/>
                <div className = "body_conatiner">
                    <div className = "inputcheck_block">
                        <input
                        type = "checkbox"
                        name = "decl_checkbox"
                        onChange = {(e)=>setIschecked(!ischecked)}
                        />
                        <p>Sample Text</p>
                    </div>
                    <div className = "input_block decinput_block" style = {{width:"200px",marginBottom:"10px"}}>
                        <label>Resume</label>
                        <input
                        type = "file"
                        accept = ".pdf"
                        name =  "resume"
                        required
                        onChange = {(e)=>handleResume(e)}
                         />
                         {props.data.resume!=="" && <p>Selected 1 file</p>}
                    </div>
                </div>
                <p style = {{color:"red"}}>{declalert}</p>
                <div className = "footer_container declfooter">
                    <hr/>
                    <div className = "location_block" style = {{marginTop:"10px"}}>
                        <input
                        type = "text"
                        name = "location"
                        value = {props.data.location}
                        onChange = {(e)=>props.handleChange(e)}
                        />
                        <input
                        type = "text"
                        name = "date"
                        value = {`${date.getDay() + 1}/${date.getMonth()}/${date.getFullYear()}`}
                        readOnly
                        />
                    </div>
                    <div className = "submit_btn">
                     <button onClick = {()=>handleForm_submit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeclarationForm
