import React,{useState} from 'react'
import './ProjectsForm.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FormModal from './FormModal'

function ProjectsForm(props) {
    const [ip1,setIp1] = useState("")
    const [ip2,setIp2] = useState("")
    const [ip3,setIp3] = useState("")
    const [itdatamodal,setItdatamodal] = useState(false)
    const [coredatamodal,setCoredatamodal] = useState(false)
    const [cp1,setCp1] = useState("")
    const [cp2,setCp2] = useState("")
    const [cp3,setCp3] = useState("")
    const [itimgurl,setItimgurl] = useState("")
    const [coreimgurl,setCoreimgurl] = useState("")
    const [italert,setItalert] = useState("")
    const [corealert,setCorealert] = useState("")

    const handleProfilePic = async(e) =>{
        console.log(e.target.name)
        let reader = new FileReader();
               reader.onload =  ()=>{
                if(reader.readyState === 2){
                    // props.handleChange(e,(reader.result))
                    if(e.target.name==="itprojectpic"){
                        setItimgurl(reader.result)
                    }else if(e.target.name === "coreprojectpic"){
                        setCoreimgurl(reader.result)
                    }
                    
                }
            }
           await reader.readAsDataURL(e.target.files[0]);
    }
// IT handler
    const additprojdata = e=>{
        console.log(ip1,ip2,ip3,itimgurl)
            if(itimgurl!=="" && ip1!==""){
                // props.addst({head :stcategory,dataset:stdata})
                props.additp({imgurl:itimgurl,data:[ip1,ip2 && ip2,ip3 && ip3]})
                setItimgurl("")
                setIp1("")
                setIp2("")
                setIp3("")
                setItalert("")
            }else{
                setItalert("Please enter all required fields to add")
            }
    }
    const itmodalhandler = e=>{
        setItdatamodal(!itdatamodal)
    }
// Core Projects handler
    const addcoreprojdata = e=>{
        console.log(cp1,cp2,cp3,coreimgurl)
            if(coreimgurl!=="" && cp1!==""){
                // props.addst({head :stcategory,dataset:stdata})
                props.addcp({imgurl:coreimgurl,data:[cp1,cp2&&cp2,cp3&&cp3]})
                setCoreimgurl("")
                setCp1("")
                setCp2("")
                setCp3("")
                setCorealert("")
            }else{
                setCorealert("Please enter all required fields to add")
            }
    }
    const coremodalhandler = e=>{
        setCoredatamodal(!coredatamodal)
    }


    return (
        <div className = "projectsform">
            {/* <h1>Projects Form</h1> */}
            <div className = "projectsform_container">
                     <div className = "it_block">
                        <div className = "head_container">
                            <h2>IT Projects</h2>
                        </div>
                        <hr className = "highlightline"/>
                        <div className = "body_container">
                            <div className = "input_container">
                                <div className = "input_block">
                                    <label>Project Pic</label>
                                    <input
                                        type = "file"
                                        accept = "image/*"
                                        name =  "itprojectpic"
                                        required
                                        onChange = {(e)=>handleProfilePic(e)}
                                    />
                                </div>
                                <div className = "input_block">
                                    <label>Important Points</label>
                                    <input
                                    type = "text"
                                    name =  "ip1"
                                    id = "ip1"
                                    value = {ip1}
                                    onChange = {e=>setIp1(e.target.value)}
                                    />
                                    <input
                                    type = "text"
                                    name =  "ip2"
                                    id = "ip2"
                                    value = {ip2}
                                    onChange = {e=>setIp2(e.target.value)}
                                    />
                                    <input
                                    type = "text"
                                    name =  "ip3"
                                    id = "ip3"
                                    value = {ip3}
                                    onChange = {e=>setIp3(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className = "btn_additem">
                                <button onClick = {additprojdata}>+</button>
                                <button style = {{fontSize:"medium"}} onClick = {()=>props.clearitd()}>Clear</button>
                                <button style = {{fontSize:"medium"}} 
                                onClick = {()=>itmodalhandler()}
                                >{<VisibilityIcon fontSize = "small"/>}</button>
                            </div>
                        </div>
                        <p style = {{color:"red"}}>{italert}</p>
                        <div className = "footer_container_st">
                                {/* Display enetered Content */} 
                                {
                                    itdatamodal && <FormModal itmodalhandler = {()=>itmodalhandler()} 
                                    data = {props.data.data[0]} type = "itprojdata"/>
                                }
                        </div>
                    </div>
                    <hr/> 
{/* Core Block */}
                    <div className = "core_block">
                        <div className = "head_container">
                            <h2>Core Projects</h2>
                        </div>
                        <hr className = "highlightline"/>
                        <div className = "body_container">
                            <div className = "input_container">
                                <div className = "input_block">
                                    <label>Project Pic</label>
                                    <input
                                        type = "file"
                                        accept = "image/*"
                                        name =  "coreprojectpic"
                                        required
                                        onChange = {(e)=>handleProfilePic(e)}
                                    />
                                </div>
                                <div className = "input_block">
                                    <label>Important Points</label>
                                    <input
                                    type = "text"
                                    name =  "cp1"
                                    id = "cp1"
                                    value = {cp1}
                                    onChange = {e=>setCp1(e.target.value)}
                                    />
                                    <input
                                    type = "text"
                                    name =  "cp2"
                                    id = "cp2"
                                    value = {cp2}
                                    onChange = {e=>setCp2(e.target.value)}
                                    />
                                    <input
                                    type = "text"
                                    name =  "cp3"
                                    id = "cp3"
                                    value = {cp3}
                                    onChange = {e=>setCp3(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className = "btn_additem">
                                <button onClick = {addcoreprojdata}>+</button>
                                <button style = {{fontSize:"medium"}} onClick = {()=>props.clearcpd()}>Clear</button>
                                <button style = {{fontSize:"medium"}} 
                                onClick = {()=>coremodalhandler()}
                                >{<VisibilityIcon fontSize = "small"/>}</button>
                            </div>
                        </div>
                        <p style = {{color:"red"}}>{corealert}</p>
                        <div className = "footer_container_st">
                                {/* Display enetered Content */} 
                                {
                                    coredatamodal && <FormModal coremodalhandler = {()=>coremodalhandler()} 
                                    data = {props.data.data[1]} type = "coreprojdata"/>
                                }
                        </div>
                    </div>            
          </div>
                
        </div>
    )
}

export default ProjectsForm
