import React, { useEffect, useState } from 'react'
import FormModal from './FormModal';
import './SkillsForm.css'
import VisibilityIcon from '@material-ui/icons/Visibility';


function SkillsForm(props) {
    const[language,setLanguage] = useState("");
    const[lwmsg,setLwmsg] = useState("")
    const[stcategory,setStcategory] = useState("")
    const[stdata,setStdata] = useState("")
    const[stdatamodal,setStdatamodal] = useState(false)
    const[hecategory,setHecategory] = useState("")
    const[hedata,setHedata] = useState("")
    const[hedatamodal,setHedatamodal] = useState(false)


    var array = props.data.data[0].languages;
    const[plarray,setPlarray] = useState(array)
    useEffect(()=>{
        setPlarray(props.data.data[0].languages)
        console.log("props Updated")
    },[array,props.data,props])
    
    useEffect(()=>{
        if(stcategory==="")
        {
            document.getElementById("stcategory").style.border = "1px solid red"
        }else{
            document.getElementById("stcategory").style.border = "1px solid blue"
        }
        if(stdata===""){
            document.getElementById("stdata").style.border = "1px solid red"
        }else{
            document.getElementById("stdata").style.border = "1px solid blue"
        }
        if(hecategory==="")
        {
            document.getElementById("hecategory").style.border = "1px solid red"
        }else{
            document.getElementById("hecategory").style.border = "1px solid blue"
        }
        if(hedata===""){
            document.getElementById("hedata").style.border = "1px solid red"
        }else{
            document.getElementById("hedata").style.border = "1px solid blue"
        }
    },[stcategory,stdata,hecategory,hedata])
/*Programing Section*/
    const addlanguage = e =>{
        if(language){
            console.log(language)
            props.handleChange(e,language)
            // setPlarray([...plarray,language])
            setLwmsg("")
        }else{
            console.log("enter some text to add")
            setLwmsg("Please enter some text to add")
        }
        setLanguage("")
    }
    const removelanguage = (index)=>{
        console.log(index)
        const uarray = [...plarray]
        uarray.splice(index,1)
        setPlarray(uarray)
        props.removeitem(index)
        // plarray?.splice(index,1)
        console.log("alength",plarray.length,plarray)
        
    }
/* ST handlers*/
    const addstdata = e=>{
        console.log(stdata,stcategory)
            if(stdata!=="" && stcategory!==""){
                props.addst({head :stcategory,dataset:stdata})
                setStdata("")
                setStcategory("")
                document.getElementById("stcategory").style.border = "1px solid lightgrey"
                document.getElementById("stdata").style.border = "1px solid lightgrey"
            }
    }
    const rmstdata = (index)=>{

    }
    const stmodalhandler = e =>{
        setStdatamodal(!stdatamodal)
    }
/* HE handlers*/
    const addhedata = e=>{
        console.log(hedata,hecategory)
            if(hedata!=="" && hecategory!==""){
                props.addhe({head :hecategory,dataset:hedata})
                setHedata("")
                setHecategory("")
                document.getElementById("hecategory").style.border = "1px solid lightgrey"
                document.getElementById("hedata").style.border = "1px solid lightgrey"
            }
    }
    const hemodalhandler = e =>{
        setHedatamodal(!hedatamodal)
    }


    return (
        <div className = "skillsform">
            <div className = "skillsform_container">
{/* Programig Section */}
                <div className = "Programing_block">
                    <div className = "head_container">
                        <h2>Programming</h2>
                    </div>
                    <hr className = "highlightline"/>
                    <div className =  "body_container">
                        <div className = "input_block">
                            <label>Language</label>
                            <input
                            type = "text"
                            name =  "stools1"
                            value = {language}
                            onChange = {e=>setLanguage(e.target.value)}
                            />
                        </div>
                        <div className = "btn_additem">
                            <button onClick = {addlanguage}>+</button>
                            {/* <button onClick = {e=>props.handleChange(e)}>Print</button> */}
                        </div>
                    </div>
                    <div className = "footer_container">
                            {
                                plarray.map((pl,index)=>(
                                    <div key = {index} className = "pl_list">
                                        {/* <p>{pl}</p> */}
                                        <button onClick = {()=>removelanguage(index)}>{pl}</button>
                                    </div>
                                ))
                            }
                    </div>
                    <p style = {{color:"red"}}>{lwmsg}</p>
                </div>
                <hr/>
{/* Software Tools Section */}
                <div className = "softwaretools_block">
                    <div className = "head_container">
                        <h2>Software Tools</h2>
                    </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_container">
                            <div className = "input_block">
                                <label>Category Name</label>
                                <input
                                type = "text"
                                name =  "stcategoryname1"
                                id = "stcategory"
                                value = {stcategory}
                                onChange = {e=>setStcategory(e.target.value)}
                                />
                            </div>
                            <div className = "input_block">
                                <label>Names (Seperate by ,)</label>
                                <input
                                type = "textarea"
                                name =  "stools1"
                                id = "stdata"
                                value = {stdata}
                                onChange = {e=>setStdata(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = "btn_additem">
                            <button onClick = {addstdata}>+</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>props.clearst()}>Clear</button>
                            <button style = {{fontSize:"medium"}} 
                            onClick = {()=>stmodalhandler()}
                            >{<VisibilityIcon fontSize = "small"/>}</button>
                        </div>
                    </div>
                    <div className = "footer_container_st">
                            {/* Display enetered Content */}
                            {
                                stdatamodal && <FormModal stmodalhandler = {()=>stmodalhandler()} 
                                data = {props.data.data[1]} type = "stdata"/>
                            }
                    </div>
                </div>
                <hr/>
{/* Hardware Expertise Section */}
                <div className = "softwaretools_block">
                    <div className = "head_container">
                        <h2>Hardware Expertise</h2>
                    </div>
                    <hr className = "highlightline"/>
                    <div className = "body_container">
                        <div className = "input_container">
                            <div className = "input_block">
                                <label>Category Name</label>
                                <input
                                type = "text"
                                name =  "hecategoryname"
                                id = "hecategory"
                                value = {hecategory}
                                onChange = {e=>setHecategory(e.target.value)}
                                />
                            </div>
                            <div className = "input_block">
                                <label>Names (Seperate by ,)</label>
                                <input
                                type = "text"
                                name =  "hetools"
                                id = "hedata"
                                value = {hedata}
                                onChange = {e=>setHedata(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = "btn_additem">
                            <button onClick = {addhedata}>+</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>props.clearhe()}>Clear</button>
                            <button style = {{fontSize:"medium"}} onClick = {()=>hemodalhandler()}
                            >{<VisibilityIcon fontSize = "small"/>}</button>
                        </div>
                    </div>
                    <div className = "footer_container">
                            {/* Display enetered Content */}
                            {
                                hedatamodal && <FormModal hemodalhandler = {()=>hemodalhandler()} 
                                data = {props.data.data[2]} 
                                type = "hedata"/>
                            }                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm
