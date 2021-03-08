import React from 'react'
import "./FormModal.css"

function FormModal(props) {

    if(props.type ==="stdata"){
        var dataarray = props.data.st_data
    }else if(props.type==="hedata"){
        var hedataarray = props.data.he_data
    }
    if(props.type ==="itprojdata"){
        var itdataarray = props.data.itproj_data
    }else if(props.type ==="coreprojdata"){
        var cdataarray = props.data.coreproj_data
    }
    if(props.type === "certdata"){
        var certarray = props.data
        console.log(certarray)
    }
    if(props.type ==="achievedata"){
        var achiearray = props.data
    }
// Skill Modal
    if(props.type === "stdata" || props.type==="hedata"){
        return (
            <div className = "form_modal"
            >
                {/* Modal */}
                <div className = "form_modal_container">
                    <div className = "modal_header">
    
                    </div>
                    <div className = "modal_body">
                        {(dataarray?dataarray:hedataarray).map((item,index)=>(
                            <div key = {index} style = {{backgroundColor:"lightgray",borderRadius:"5px"}}>
                                <p>
                                    <span>Category Name : </span>{item.head}
                                </p>
                                <div>
                                    <span>Tool Set : </span>
                                    {
                                        item.body.map((childitem,childindex)=>(
                                            <span key = {childindex}>{childitem + ","}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        )) }
                    
                    </div>
                    <div className = "modal_footer">
                     {dataarray && <button onClick = {props.stmodalhandler}>Close</button>}
                     {hedataarray && <button onClick = {props.hemodalhandler}>Close</button>}
                    </div>
                </div>
            </div>
        )
    }
// Project Modal
    if(props.type ==="coreprojdata" || props.type ==="itprojdata"){
        return (
            <div className = "form_modal"
            >
                {/* Modal */}
                <div className = "form_modal_container">
                    <div className = "modal_header">
    
                    </div>
                    <div className = "modal_body">
                        {(itdataarray?itdataarray:cdataarray).map((item,index)=>(
                            <div key = {index} style = {{backgroundColor:"lightgray",borderRadius:"5px"}} 
                             className = "mdata_container">
                                <div style ={{marginRight:"10px"}}>
                                    <span>Project Img : </span><br/>
                                    <img src = {item.imgurl} alt = "" 
                                    style ={{width:"200px",height:"200px"}}></img>
                                </div>
                                <div>
                                    <span>Imp Points : </span><br/>
                                    {
                                        item.data.map((childitem,childindex)=>(
                                           <div key = {childindex}>
                                            <p>{childitem}</p>
                                           </div> 
                                        ))
                                    }
                                </div>
                            </div>
                        )) }
                    
                    </div>
                    <div className = "modal_footer">
                     {itdataarray && <button onClick = {props.itmodalhandler}>Close</button>}
                     {cdataarray && <button onClick = {props.coremodalhandler}>Close</button>}
                    </div>
                </div>
            </div>
        )
    }
// Certificate Modal
    if(props.type === "certdata"){
        return (
            <div className = "form_modal"
            >
                {/* Modal */}
                <div className = "form_modal_container">
                    <div className = "modal_header">
    
                    </div>
                    <div className = "modal_body certmodal_body">
                        {certarray?.map((item,index)=>(
                            <div key = {index} style = {{backgroundColor:"lightgray",borderRadius:"5px"}} 
                             className = "mdata_container">
                                    <img src = {item} alt = "" 
                                    style ={{width:"200px",height:"200px"}}></img>
                            </div>
                        )) }
                    
                    </div>
                    <div className = "modal_footer">
                     {certarray && <button onClick = {props.certmodalhandler}>Close</button>}
                    </div>
                </div>
            </div>
        )
    }
// Achievement MOdal
    if(props.type==="achievedata"){
        return (
            <div className = "form_modal"
            >
                {/* Modal */}
                <div className = "form_modal_container">
                    <div className = "modal_header">
    
                    </div>
                    <div className = "modal_body">
                        {achiearray?.map((item,index)=>(
                            <div key = {index} style = {{backgroundColor:"lightgray",borderRadius:"5px"}} 
                             className = "mdata_container">
                                    <p>{item}</p>
                            </div>
                        )) }
                    
                    </div>
                    <div className = "modal_footer">
                     {/* {achiearray && <button onClick = {props.achiemodalhandler}>Close</button>} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default FormModal
