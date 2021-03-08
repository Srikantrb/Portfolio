import React,{useState,useEffect} from 'react'
import './ProjectsPage.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useSelector} from 'react-redux'

function ProjectsPage() {
    // Retrive data from Global State
    const state = useSelector(state=>state)

   
     // Creating project data or extract data from global state and handling project data
     const projdata = {
         type : "projectdata",
         content : state.projectdata.data[0].itproj_data
     };
     const projdatac = {
        type : "projectdata",
        content : state.projectdata.data[1].coreproj_data
    };

     var dataarray = projdata.content;
     var dataarrayc = projdatac.content;
     const [element,setElement] = useState(dataarray[0]);
     const [elementc,setElementc] = useState(dataarrayc[0]);    
    const [i,seti] = useState(0);
    const [j,setj]  = useState(0);
    

    useEffect(()=>{
        if(dataarray.length!==0){
            if(dataarray.length<=1){
                document.getElementById("leftbtni").style.visibility = "hidden" ;
                document.getElementById("rightbtni").style.visibility = "hidden" ;
            }else{
                if(i<1){
                    document.getElementById("leftbtni").style.visibility = "hidden" ;
                    document.getElementById("rightbtni").style.visibility = "visible" ;
                }else if(i>=(dataarray.length-1)){
                    document.getElementById("rightbtni").style.visibility = "hidden" ;
                    document.getElementById("leftbtni").style.visibility = "visible" ;
                }else{
                    document.getElementById("leftbtni").style.visibility = "visible" ;
                    document.getElementById("rightbtni").style.visibility = "visible" ;
                }
            }
        }
    },[i,dataarray.length]);

    useEffect(()=>{
        if(dataarrayc.length!==0){
            if(dataarrayc.length<=1){
                document.getElementById("leftbtnc").style.visibility = "hidden" ;
                document.getElementById("rightbtnc").style.visibility = "hidden" ;
            }else{
                if(j<1){
                    document.getElementById("leftbtnc").style.visibility = "hidden" ;
                    document.getElementById("rightbtnc").style.visibility = "visible" ;
                }else if(j>=(dataarrayc.length-1)){
                    document.getElementById("rightbtnc").style.visibility = "hidden" ;
                    document.getElementById("leftbtnc").style.visibility = "visible" ;
                }else{
                    document.getElementById("leftbtnc").style.visibility = "visible" ;
                    document.getElementById("rightbtnc").style.visibility = "visible" ;
                }
            }
        }
    },[j,dataarrayc.length]);

    const lclickhandleri = ()=>{
        if(i>0){
            setElement(dataarray[i-1]);
            seti(i-1);
            document.getElementById("project_imgatxt_container")
            .style.animation = "projectblock_anm 500ms ease "
        }
    };
    const rclickhandleri = ()=>{
        if(i<(dataarray.length-1)){
            setElement(dataarray[i+1]);
            seti(i+1);
            document.getElementById("project_imgatxt_container")
            .style.animation = "projectblock_anm 500ms ease "
        }
    };
    const lclickhandlerc = ()=>{
        if(j>0){
            setElementc(dataarrayc[j-1]);
            setj(j-1);
        }
    };
    const rclickhandlerc = ()=>{
        if(j<(dataarrayc.length-1)){
            setElementc(dataarrayc[j+1]);
            setj(j+1);
        }
    };
   
   //creating state and handlers for button div  handlilng
    const [itproj,setItproj] = useState(false);
    const [coreproj,setCoreproj] = useState(false);

    const[itproj1,setItproj1] = useState("+");
    const[coreproj1,setCoreproj1] = useState("+");
    useEffect(()=>{
        if(itproj){
            document.getElementById("project_it_info").style.display = "block";
            setItproj1("-");
        }else{
            document.getElementById("project_it_info").style.display = "none"
            setItproj1("+");
        }
        if(coreproj){
            document.getElementById("project_core_info").style.display = "block";
            setCoreproj1("-");
        }else{
            document.getElementById("project_core_info").style.display = "none"
            setCoreproj1("+");
        }
        
    },[itproj,coreproj]);

    const toggleHandler = ()=>{
        setItproj(!itproj);
    }
    const toggleHandler1 = ()=>{
        setCoreproj(!coreproj);
    }
    


if(state.projectdata.data[0].itproj_data.length!==0
    ||state.projectdata.data[1].coreproj_data.length!==0){
        return (
            <div className = "projectspage">
                {/* <h1>Projects</h1> */}
                <div className = "prop_container">
                    {/* header */}
                    <div className = "prop_header">
                        <h1>Projects</h1>
                    </div>
                    {/* IT Projects */}
                    <div className = "projects_it">
                        <button 
                        onClick = {(e)=>toggleHandler(e)}
                        className = "prop_expand_btn">
                            <span className ="prop_span_">{itproj1}</span>
                            <span className = "prop_headingspan">IT Projects</span>
                        </button>
                        <div className = "prop_project_itinfo" id = "project_it_info">
                            <div className = "prop_project_itinfo_block">
                                {/* Projects --imgs,text,arrows  */}
                                <div className = "project_body">
                                    <div className = "navbtn_conatiner">
                                        <button id = "leftbtni" 
                                        type = "button" 
                                        onClick = {()=>lclickhandleri()}
                                        >{
                                            <ArrowBackIosIcon fontSize = "large"/>
                                        }</button>
                                    </div>
                                    <div className = "project_imgatxt_container" id = "project_imgatxt_container">
                                        {/* {
                                            imgurl.content.map((url,index)=>(
                                                <div key = {index}>
                                                    <img src = {url} alt = "certificate"></img>
                                                </div>
                                            ))
                                        }           */}
                                        <img src = {element.imgurl}
                                         alt = "Project_img"
                                         ></img>
                                        <div className = "project_desc">
                                            {/* {element.data.map((desc,index)=>{
                                                <p key = {index} style = {{color:"white"}}>{desc}</p>
                                            })} */}
                                            <p>{element.data[0]}</p>
                                            <p>{element.data[1]}</p>
                                            <p>{element.data[2]}</p>
                                        </div>
                                    </div>
                                    <div className = "rightbtn">
                                        <button id ="rightbtni"
                                        type = "button" 
                                        onClick = {()=>rclickhandleri()}
                                        >{
                                            <ArrowForwardIosIcon fontSize = "large"/>
                                        }</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Core or non IT Projects */}
                    <div className = "projects_core">
                        <button 
                        onClick = {(e)=>toggleHandler1(e)}
                        className = "prop_expand_btn">
                            <span className ="prop_span_">{coreproj1}</span>
                            <span className = "prop_headingspan">Core Projects</span>
                        </button>
                        <div className = "prop_project_coreinfo" id = "project_core_info">
                            <div className = "prop_project_coreinfo_block">
                                {/* Projects --imgs,text,arrows  */}
                                <div className = "project_body">
                                    <div className = "navbtn_conatiner">
                                        <button id = "leftbtnc" 
                                        type = "button" 
                                        onClick = {()=>lclickhandlerc()}
                                        >{
                                            <ArrowBackIosIcon fontSize = "large"/>
                                        }</button>
                                    </div>
                                    <div className = "project_imgatxt_container">
                                        {/* {
                                            imgurl.content.map((url,index)=>(
                                                <div key = {index}>
                                                    <img src = {url} alt = "certificate"></img>
                                                </div>
                                            ))
                                        }           */}
                                        <img src = {elementc.imgurl} alt = "ProjectImage"></img>
                                        <div className = "project_desc">
                                            {/* {elementc.data?.map((desc,index)=>{
                                                <p key={index}>{desc}</p>
                                            })} */}
                                            <p>{elementc.data[0]}</p>
                                            <p>{elementc.data[1]}</p>
                                            <p>{elementc.data[2]}</p>
                                        </div>
                                    </div>
                                    <div className = "rightbtn">
                                        <button id ="rightbtnc"
                                        type = "button" 
                                        onClick = {()=>rclickhandlerc()}
                                        >{
                                            <ArrowForwardIosIcon fontSize = "large"/>
                                        }</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
            </div>
        );
    }else{
        return(<h3 className = "noskill">Please add some to view</h3>);
    }
    
}

export default ProjectsPage
