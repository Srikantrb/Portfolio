import React, { useState } from 'react'
import './CertificatesForm.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FormModal from './FormModal'

function CertificatesForm(props) {
    const[certimgurl,setCertimgurl] = useState("")
    const[certalrert,setCertalert] = useState("")
    const[certmodal,setCertmodal] =useState(false)

    const handleProfilePic = async(e)=>{
        let reader = new FileReader();
           reader.onload =  ()=>{
            if(reader.readyState === 2){
                // props.handleChange(e,(reader.result))
                setCertimgurl(reader.result)
            }
        }
       await reader.readAsDataURL(e.target.files[0]);
    }
    const addcertdata = e=>{
        console.log(certimgurl)
        if(certimgurl!==""){
            props.addcert(certimgurl)
            setCertimgurl("")
            setCertalert("")
        }else{
            setCertalert("Please pick an image to add")
        }
    }
    const certmodalhandler = e=>{
        setCertmodal(!certmodal)
    }

    return (
        <div className = "certificatesform">
            {/* <h1>Certificates Form</h1> */}
            <div className = "certificatesform_container">
                <div className = "cert_block">
                     <div className = "head_container">
                        <h2>Certificates</h2>
                     </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_container">
                            <div className = "input_block">
                                <label>Certificate</label>
                                <input
                                type = "file"
                                accept = "image/*"
                                name =  "profilepic"
                                required
                                onChange = {(e)=>handleProfilePic(e)}
                                />
                            </div>
                        </div>
                        <div className = "btn_additem">
                            <button onClick = {addcertdata}>+</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>props.clearcert()}>Clear</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>certmodalhandler()}
                            >{<VisibilityIcon fontSize = "small"/>}</button>
                        </div>
                    </div>
                    <p style = {{color:"red"}}>{certalrert}</p>
                    <div className = "footer_container_st">
                        {/* Display enetered Content */} 
                        {
                            certmodal && <FormModal certmodalhandler = {()=>certmodalhandler()} 
                            data = {props.data.imgdata} type = "certdata"/>                   
                         }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificatesForm
