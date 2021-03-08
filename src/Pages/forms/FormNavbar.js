import React,{useEffect} from 'react'
import './FormNavbar.css'

function FormNavbar(props) {
    
    useEffect(()=>{
        document.getElementsByName("BasicInfo")[0].style.background = "cornflowerblue"
    },[])

    const handleClick = (e)=>{
                console.log(e.target.id)
                props.formdisplay(e.target.id)
                document.getElementsByName("BasicInfo")[0].style.background = "none"

                if(e.target.id!==""){
                    if(e.target.id==="Basicinfo"){
                        document.getElementById("Basicinfo").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("Basicinfo").style.background = "none"
                    }
                    if(e.target.id==="education"){
                        document.getElementById("education").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("education").style.background = "none"
                    }
                    if(e.target.id==="skillset"){
                        document.getElementById("skillset").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("skillset").style.background = "none"
                    }
                    if(e.target.id==="projects"){
                        document.getElementById("projects").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("projects").style.background = "none"
                    }
                    if(e.target.id==="certificates"){
                        document.getElementById("certificates").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("certificates").style.background = "none"
                    }
                    if(e.target.id==="achievements"){
                        document.getElementById("achievements").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("achievements").style.background = "none"
                    }
                    if(e.target.id==="declaration"){
                        document.getElementById("declaration").style.background = "cornflowerblue"
                    }else{
                        document.getElementById("declaration").style.background = "none"
                    }
                }
    }

    return (
        <div className = "formnavbar" >
            {/* <h1>Navbar</h1> */}
            <div className = "formnavbar_container" onClick = {(e)=>handleClick(e)}>
              <div className = "formnavbar_section" > 
                  <h3 id = "Basicinfo" name="BasicInfo">Basic Info</h3>
              </div>
              <div className = "formnavbar_section" > 
                  <h3 id = "education">Education details</h3>
              </div>
              <div className = "formnavbar_section" > 
                  <h3 id = "skillset">Skill Set</h3>
              </div>
              <div className = "formnavbar_section" > 
                  <h3 id = "projects">Projects</h3>
              </div>
              <div className = "formnavbar_section" > 
                  <h3 id = "certificates">Certificates</h3>
              </div>
              <div className = "formnavbar_section" >
                <h3 id = "achievements">Achievements</h3>
              </div>
              <div className = "formnavbar_section" > 
                  <h3 id = "declaration">Declaration</h3>
              </div>
            </div>
        
        </div>
    )
}

export default FormNavbar
