import React,{useState,useEffect} from 'react'
import './CertificatesPage.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useSelector} from 'react-redux'

function CertificatesPage() {
    // Retrive data from Global State
    const state = useSelector(state=>state)

    const imgurl = state.certificatesdata


    // var array = ["1","2","3","4","5"];
    var urlarray =imgurl.imgdata;
    // const [array] = useState([]);
    const [element,setElement] = useState(urlarray[0]);    
    const [i,seti] = useState(0);


    useEffect(()=>{
        if(urlarray.length!==0){
            if(i<1){
                document.getElementById("leftbtn").style.visibility = "hidden" ;
                document.getElementById("rightbtn").style.visibility = "visible" ;
            }else if(i>=(urlarray.length-1)){
                document.getElementById("rightbtn").style.visibility = "hidden" ;
                document.getElementById("leftbtn").style.visibility = "visible" ;
            }else{
                document.getElementById("leftbtn").style.visibility = "visible" ;
                document.getElementById("rightbtn").style.visibility = "visible" ;
            }
        }
    },[i,urlarray.length]);
    const lclickhandler = ()=>{
        if(i>0){
            setElement(urlarray[i-1]);
            seti(i-1);
        }
    };
    const rclickhandler = ()=>{
        if(i<(urlarray.length-1)){
            setElement(urlarray[i+1]);
            seti(i+1);
        }
    };

if(urlarray.length!==0){
    return (
        <div className = "certificatespage">
            {/* <h1>Certificates</h1> */}
            <div className = "certificate_header">
                <h1>Certificates</h1>
            </div>
            <div className = "certificate_body">
                <div className = "navbtn_conatiner">
                    <button id = "leftbtn" 
                    type = "button" 
                    onClick = {()=>lclickhandler()}
                    >{
                        <ArrowBackIosIcon fontSize = "large"/>
                    }
                    </button>
                </div>
                <div className = "certificateimg_container">
                    {/* {
                        imgurl.content.map((url,index)=>(
                            <div key = {index}>
                                <img src = {url} alt = "certificate"></img>
                            </div>
                        ))
                    }           */}
                    <img src = {element} alt = "certificate"></img>
                </div>
                <div className = "rightbtn">
                    <button id ="rightbtn"
                    type = "button" 
                    onClick = {()=>rclickhandler()}
                    >{
                        <ArrowForwardIosIcon fontSize = "large"/>
                    }</button>
                </div>
            </div>
            
        </div>
    );
}else{
    return(<h3 className = "noskill">Please add some to view</h3>);
}
    
}

export default CertificatesPage
