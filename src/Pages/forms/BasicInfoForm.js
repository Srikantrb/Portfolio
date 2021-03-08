import React, { useState } from 'react'
import './BasicInfoForm.css'

function BasicInfoForm(props) {
    // var data = {
    //     name : "",
    //     email : "",
    //     tagline:"",
    //     tag1 : "",tag2 :"",tag3:"",
    //     linkedin : "",twitter:"",github:"",
    //     profilepic : ""
    // }
     // Basic User From 
    //  const[name,setName] = useState(props.fullname);
    //  const [email,setEmail] = useState("")
    //  const[tagline,setTagline] = useState("");
    //  const[tag1,setTag1] = useState("");
    //  const[tag2,setTag2] = useState("");
    //  const[tag3,setTag3] = useState("");
    //  const[linkedin,setLinkedin] = useState("");
    //  const[twitter,setTwitter] = useState("");
    //  const[github,setGithub] = useState("");
    //  const[profilePic,setProfilePic] = useState("");
         const[basicalert,setBasicalert] = useState("")
         const[basicsavealert,setBasicsavealert] = useState("")

          const handleFormsubmit = e =>{
              e.preventDefault()
            //  console.log(profilePic)
            // data.name = name
            // data.email = email
            // data.tagline = tagline
            // data.tag1 = tag1;data.tag2 = tag2;data.tag3 = tag3
            // data.linkedin = linkedin;data.twitter = twitter;data.github = github
            // data.profilepic = profilePic
            // console.log(data)
            console.log(props.data)
         }

        const handleProfilePic = async(e)=>{
            let reader = new FileReader();
               reader.onload =  ()=>{
                if(reader.readyState === 2){
                    props.handleChange(e,(reader.result))
                }
            }
           await reader.readAsDataURL(e.target.files[0]);
        }
        const handleFormsave = e=>{
            
            if(props.data.fullname===""){
                document.getElementsByName("fullname")[0].style.border = "1px solid red"
                setBasicalert("please fill all the required fields")
                setBasicsavealert("")
            }else{
                document.getElementsByName("fullname")[0].style.border = "1px solid lightgrey"
            }
            if(props.data.email===""){
                document.getElementsByName("email")[0].style.border = "1px solid red"
                setBasicalert("please fill all the required fields")
                setBasicsavealert("")
            }else{
                document.getElementsByName("email")[0].style.border = "1px solid lightgrey"
            }
            if(props.data.tagline===""){
                document.getElementsByName("tagline")[0].style.border = "1px solid red"
                setBasicalert("please fill all the required fields")
                setBasicsavealert("")
            }else{
                document.getElementsByName("tagline")[0].style.border = "1px solid lightgrey"
            }
            if(props.data.tag1===""){
                document.getElementsByName("tag1")[0].style.border = "1px solid red"
                setBasicalert("please fill all the required fields")
                setBasicsavealert("")
            }else{
                document.getElementsByName("tag1")[0].style.border = "1px solid lightgrey"
            }
            if(props.data.linkedin===""){
                document.getElementsByName("linkedin")[0].style.border = "1px solid red"
                setBasicalert("please fill all the required fields")
                setBasicsavealert("")
            }else{
                document.getElementsByName("linkedin")[0].style.border = "1px solid lightgrey"
            }
            // if(props.data.profilepic===""){
            //     document.getElementsByName("profilepic")[0].style.border = "1px solid red"
            //     setBasicalert("please fill all the required fields")
            //     setBasicsavealert("")
            // }else{
            //     document.getElementsByName("profilepic")[0].style.border = "1px solid lightgrey"
            // }
            if(props.data.linkedin!==""
            &&props.data.tag1!==""&&props.data.email!==""
            &&props.data.fullname!==""&&props.data.tagline!==""){
                setBasicalert("")
                setBasicsavealert("Data saved!")
                props.formcheck(true)
            }else{
                props.formcheck(false)
            }
            console.log(props.data)

        }
        
    return (
        <div className = "basicinfoform">
                <div className = "basicinfoform_container">
                    <form onSubmit = {handleFormsubmit}>
                        <div className = "basicuserinfo_container">
                            <div className = "input_block">
                                <label>Full Name <span style={{color:"red"}}> *</span></label>
                                <input
                                type = "text"
                                name =  "fullname"
                                required
                                value = {props.data.fullname}
                                onChange = {e=>props.handleChange(e)}
                                />
                            </div>
                            <div className = "input_block">
                                <label>Email <span style={{color:"red"}}> *</span></label>
                                <input
                                type = "email"
                                name =  "email"
                                required
                                value = {props.data.email}
                                onChange = {(e)=>props.handleChange(e)}
                                />
                            </div>
                            <div className = "input_block">
                                <label>Tag Line <span style={{color:"red"}}> *</span></label>
                                <input
                                type = "text"
                                name =  "tagline"
                                required
                                value = {props.data.tagline}
                                onChange = {(e)=>props.handleChange(e)}
                                />
                            </div>
                        </div>
                        <hr/>
                        <div className =  "tags_container">
                            <label>Key Tags <span style={{color:"red"}}> *</span></label>
                            <div className = "tagsinput_conatiner">
                            <div className = "taginput_block">
                                    <input
                                    type = "text"
                                    name =  "tag1"
                                    required
                                    value = {props.data.tag1}
                                    onChange = {(e)=>props.handleChange(e)}
                                    />
                                </div>
                                <div className = "taginput_block">
                                    <input
                                    type = "text"
                                    name =  "tag2"
                                    value = {props.data.tag2}
                                    onChange = {(e)=>props.handleChange(e)}
                                    />
                                </div>
                                <div className = "taginput_block">
                                    <input
                                    type = "text"
                                    name =  "tag3"
                                    value = {props.data.tag3}
                                    onChange = {(e)=>props.handleChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className = "links_container">
                                <div className = "input_block">
                                    <label>Linked In <span style={{color:"red"}}> *</span></label>
                                    <input
                                    type = "text"
                                    name =  "linkedin"
                                    required
                                    value = {props.data.linkedin}
                                    onChange = {(e)=>props.handleChange(e)}
                                    />
                                </div>
                                <div className = "input_block">
                                    <label>Twitter</label>
                                    <input
                                    type = "text"
                                    name =  "twitter"
                                    value = {props.data.twitter}
                                    onChange = {(e)=>props.handleChange(e)}
                                    />
                                </div>
                                <div className = "input_block">
                                    <label>Git Hub</label>
                                    <input
                                    type = "text"
                                    name =  "github"
                                    value = {props.data.github}
                                    onChange = {(e)=>props.handleChange(e)}
                                    />
                                </div>
                        </div>
                        <hr/>
                        <div className = "profilepic_container">
                                <div className = "input_block">
                                    <label>Profile Pic<span style={{color:"red"}}> *</span></label>
                                    <input
                                    type = "file"
                                    accept = "image/*"
                                    name =  "profilepic"
                                    required
                                    onChange = {(e)=>handleProfilePic(e)}
                                    style ={{width:"270px"}}
                                    />
                                </div>
                                {props.data.profilepic!=="" &&<p>1 file selected</p>}
                                <p style = {{color:"red"}}>{basicalert}</p>
                                <hr/>
                                <p style = {{color:"blueviolet"}}>{basicsavealert}</p>
                                <div className = "submitform_btn">
                                    <button type = "button" onClick = {(e)=>handleFormsave(e)}>Save</button>
                                </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default BasicInfoForm
