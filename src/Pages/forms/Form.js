import React, { useState,useEffect } from 'react'
import './Form.css'
import FormNavbar from './FormNavbar'
import BasicInfoForm from './BasicInfoForm'
import EducationForm from './EducationForm'
import SkillsForm from './SkillsForm'
import ProjectsForm from './ProjectsForm'
import CertificatesForm from './CertificatesForm'
import AchievementsForm from './AchievementsForm'
import DeclarationForm from './DeclarationForm'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

import axios from '../../Components/axios'
import { Link, useHistory } from 'react-router-dom'
import { PortfolioAuth } from '../../Components/firebase'
import {useSelector} from 'react-redux'
import { useRef } from 'react'

function Form() {
    const history = useHistory()
    var basic_info = {
        name:"basic_info",
        fullname : "",
        email : "",
        tagline:"",
        tag1 : "",tag2 :"",tag3:"",
        linkedin : "",twitter:"",github:"",
        profilepic : ""
    }
    var edu_info = {
        name:"education_info",
        universityname:"",
        gcollegename :"",
        glocation:"",
        gyear:"",
        gcgpa:"",
        iboardname:"",
        icollegename:"",
        ilocation:"",
        iyear:"",
        icgpa:"",
        sboardname:"",
        schoolname:"",
        slocation:"",
        syear:"",
        scgpa:""
    }
    var skill_info = {
        name : "skill_info",
        data : [{
            category_name : 'programming',
            languages : []
        },{
            category_name : 'software tools',
            st_data : []
        },{
            category_name : "hardware expertise",
            he_data :[]
        }]
    }
    var proj_info = {
        name :"proj_info",
        data : [{
            category_name : 'IT Projects',
            itproj_data :[{
                imgurl :"data:image/png;base64,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",
                data : ["sample img"]
            }]
        },{
            category_name : 'Core Projects',
            coreproj_data :[
                {
                    imgurl:"data:image/png;base64,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",
                    data:["sample img"]
                }
            ]
        }]
    }
    var cert_info = {
        name: "certificate_info",
        imgdata : []
    }

    var achiev_info = {
        name :"acheiements_info",
        achievemnts : []
    }
    var decl_info = {
        name : "declaration_info",
        resume : "",
        decldate:"",
        location:"",
        ischecked : false
    }
    const[displayform,setDisplayform] = useState("Basicinfo");
    const[datafillcheck,setDatafillcheck] = useState(false)

    const[basic_data,setBasicData] = useState(basic_info)
    const[edu_data,setEduData] = useState(edu_info)
    const[skill_data,setSkillData] = useState(skill_info)
    const[proj_data,setProjectData] = useState(proj_info)
    const[cert_data,setCertData] = useState(cert_info)
    const[achie_data,setAchieData] = useState(achiev_info)
    const[decl_data,setDeclData] = useState(decl_info)
    // Retriving data from Global state and pushing into corresponding states
    const state = useSelector(state=>state)
    useEffect(()=>{
        if((state.isnew)?(state.isnew):false){
            setBasicData(basic_info)
            setEduData(edu_info)
            setSkillData(skill_info)
            setProjectData(proj_info)
            setCertData(cert_info)
            setAchieData(achiev_info)
            setDeclData(decl_info)

        }else{
            setBasicData(state.basicdata)
            setEduData(state.educationdata)
            setSkillData(state.skilldata)
            setProjectData(state.projectdata)
            setCertData(state.certificatesdata)
            setAchieData(state.achievementdata)
            setDeclData(state.declarationdata)
        }
    },[PortfolioAuth.currentUser?.uid])
   
    // const [data,setData] = useState([basic_data])
// Display Form Handler
const prevstateRef = useRef()
useEffect(()=>{
    prevstateRef.current = displayform
});
const currentformname = prevstateRef.current
const handleForm_display = (formname)=>{
    if(formname!==""){
        setDisplayform(formname)
    }else{
        setDisplayform(currentformname)
    }
    console.log(formname)
}

//  Basic Info Handlers
    const handleChange = (e,profilePic) =>{
        setBasicData({...basic_data,[e.target.name]:(profilePic?profilePic:e.target.value)})
    }
// Education Handlers
    const handleChange_e = (e)=>{
        if(e.target.name === "btn"){
            // data.push(edu_data)
            console.log(edu_data)
        }else{
            setEduData({...edu_data,[e.target.name]:e.target.value})
        }
    }
// Skill Handlers
    const handleArrayChange_s = (e,language) =>{
        let data = skill_data;
        
        if(language){
            data.data[0].languages = [...data.data[0].languages,language]
            console.log(language)
            setSkillData(data)
        }
        // console.log(data)
        console.log(skill_data.data[0].languages)
    }
    const handleArray_removeitem = (item_index) =>{
        let data = skill_data;
        console.log("index",item_index,data)
        data.data[0].languages?.splice(item_index,1)
        setSkillData(data)
        
        console.log("data = ",skill_data.data[0].languages)
    }
    {/* ST handlers*/}
    const handlest_additem = (dataset)=>{
        let data = skill_data
        let strarray = dataset.dataset.split(",");
        if(dataset.head==="" && dataset.dataset===""){
        }else{
            data.data[1].st_data = [...data.data[1].st_data,{head:dataset.head,body:strarray}]
        }
        setSkillData(data)
        console.log("data = ",skill_data.data[1].st_data)

    }
    const handlest_clear = ()=>{
        let data = skill_data
        data.data[1].st_data =[]
        setSkillData(data)
        console.log("data = ",skill_data.data[1].st_data)
    }

    {/* HE Handlers*/}
    const handlehe_additem = (dataset)=>{
        let data = skill_data
        let strarray = dataset.dataset.split(",");
        if(strarray.length>0 && dataset.head!==""){
            data.data[2].he_data = [...data.data[2].he_data,{head:dataset.head,body:strarray}]
        }
        setSkillData(data)
        console.log("data = ",skill_data.data[2].he_data)

    }
    const handlehe_clear = ()=>{
        let data = skill_data
        data.data[2].he_data =[]
        setSkillData(data)
        console.log("data = ",skill_data.data[2].he_data)
    }
// Project Handlers
    /*It*/
    const handleitproj_additem = (dataset)=>{
        let data = proj_data
        data.data[0].itproj_data = [...data.data[0].itproj_data,dataset]
        setProjectData(data)
        console.log("data = ",proj_data.data[0].itproj_data)
    }
    const handleitp_clear = e=>{
        let data = proj_data
        data.data[0].itproj_data = []
        setProjectData(data)
        console.log("data = ",proj_data.data[0].itproj_data)
    }
    /*Core*/
    const handlecoreproj_additem = (dataset)=>{
        let data = proj_data
        data.data[1].coreproj_data = [...data.data[1].coreproj_data,dataset]
        setProjectData(data)
        console.log("data = ",proj_data.data[1].coreproj_data)
    }
    const handlecorep_clear = e=>{
        let data = proj_data
        data.data[1].coreproj_data = []
        setProjectData(data)
        console.log("data = ",proj_data.data[1].coreproj_data)
    }
// Certificate handler
    const handlecert_additem = (imgurl)=>{
        let data = cert_data
        data.imgdata = [...data.imgdata,imgurl]
        setCertData(data)
        console.log("data = ",cert_data.imgdata)
    }
    const handlecert_clear = e =>{
        let data = cert_data
        data.imgdata = []
        setCertData(data)
        console.log("data = ",cert_data.imgdata)
    }
// Achievements handler
    const handleachie_additem = (text)=>{
        let data = achie_data
        data.achievemnts = [...data.achievemnts,text]
        setAchieData(data)
        console.log("data = ",achie_data.achievemnts)
    }
    const handleachie_clear = e =>{
        let data = cert_data
        data.achievemnts = []
        setAchieData(data)
        console.log("data = ",achie_data.achievemnts)
    }
// Declaration handler
    const handledecl_additem = (resumedata)=>{
        let data = decl_data
        data.resume = resumedata.resumedata
        data.decldate = resumedata.date
        if(data.resume!==""){
            data.ischecked = true
        }else{
            data.ischecked = false
        }
        setDeclData(data)
        console.log("data = ",decl_data.resume)
    }
    const handleChange_d = e=>{
        if(e.target.name==="location"){
            setDeclData({...decl_data,[e.target.name]:e.target.value})
        }
    }
    
// Form Handler
    const handle_formcheck = (flag)=>{
        setDatafillcheck(flag)
    }
    const handleForm_submit = e=>{
        // Validate(Check if required data is filled) and upload all the data along with user's Uid to database

        // let dataarray = [basic_data,edu_data,cert_data,skill_data,achie_data,proj_data,decl_data]
        // console.log(dataarray)
        // let location = decl_data.location
        if(datafillcheck){
            axios.post("insert"
            ,{
                user_id:PortfolioAuth.currentUser.uid,
                name:basic_data.fullname,
                email:basic_data.email,
                basicdata:basic_data,
                educationdata:edu_data,
                skilldata:skill_data,
                projectdata:proj_data,
                certificatesdata:cert_data,
                achievementdata:achie_data,
                declarationdata:decl_data
            })
            .then((resdata)=>{
                if(resdata){
                    alert("Data Submitted Succesfully")
                    history.push('/welcome')
                    console.log("Data Send Sucessfully")    
                    console.log(resdata)
                }else{
                    alert("Server Down")
                }
            
            }).catch((err)=>{
                alert(err)
                console.log(err)
            })
        }else{
            alert("Atleast fill the basic and edu details to Submit or server down")
        }
        
    }
    const handler_logout = e=>{
        PortfolioAuth
        .signOut()
        .then(()=>{
            // setBasicData(basic_info)
            // setEduData(edu_info)
            // setSkillData(skill_info)
            // setProjectData(proj_info)
            // setCertData(cert_info)
            // setAchieData(achiev_info)
            // setDeclData(decl_info)
            // window.location.reload(false);
            history.push('/welcome')
        })
    }


    // // Test
    // var String = "C,JAva,Python,Ruby,dataScience,ML,"
    // var strarray = String.split(",")
    // console.log(strarray)
    
    return (
        <div className = "form">
            {/* <h1>Form</h1> */}
            <div className ="form_container">
                <div className = "form_header">
                    <h1>My Portfolio</h1>
                    <div className= "form_nav_icons">
                        <div className = "form_icon">
                            <HomeIcon/>
                            <Link to = "/welcome">
                                <a>Home</a>
                            </Link>
                        </div>
                        <div className = "form_icon">
                            <ExitToAppIcon/>
                            <a onClick = {handler_logout}>Logout</a>
                        </div>
                    </div>
                </div>
                <div className = "form_body">
                    {/* <h1>Form Body</h1> */}
                    <div className = "form_navbar">
                        <FormNavbar formdisplay = {(formname)=>handleForm_display(formname)}/>
                    </div>
                    <div className = "form_body_container">
                        {/* <h1>Body</h1> */}
                           {displayform==="Basicinfo" && 
                           <BasicInfoForm data = {basic_data} 
                           handleChange = {(e,profilePic)=>handleChange(e,profilePic)}
                           formcheck = {handle_formcheck}
                           />} 
                           {displayform==="education" && 
                            <EducationForm data = {edu_data} 
                            handleChange = {(e)=>handleChange_e(e)}
                            formcheck = {handle_formcheck}
                            />
                            }
                            {displayform==="skillset" &&
                            <SkillsForm data = {skill_data} handleChange = {handleArrayChange_s}
                            removeitem = {(index)=>handleArray_removeitem(index)}
                            addst = {handlest_additem}
                            clearst = {handlest_clear}
                            addhe = {handlehe_additem}
                            clearhe = {handlehe_clear}
                            />    
                            }
                            {displayform==="projects" &&
                                <ProjectsForm
                                data = {proj_data}
                                additp = {handleitproj_additem} 
                                clearitd = {handleitp_clear}
                                addcp = {handlecoreproj_additem}
                                clearcpd = {handlecorep_clear}
                                />
                            }
                            {displayform === "certificates" &&
                                <CertificatesForm 
                                data = {cert_data}
                                addcert = {handlecert_additem}
                                clearcert = {handlecert_clear}
                                />
                            }
                            {displayform === "achievements" &&
                                <AchievementsForm
                                data = {achie_data}
                                addachie = {handleachie_additem}
                                clearachie = {handleachie_clear}
                                />
                            }
                            {displayform === "declaration" &&
                                <DeclarationForm
                                data = {decl_data}
                                replaceitem = {handledecl_additem}
                                formsubmithandler = {handleForm_submit}
                                handleChange = {handleChange_d}
                                />
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
