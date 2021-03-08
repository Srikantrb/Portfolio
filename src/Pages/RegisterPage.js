import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './RegisterPage.css'
import {PortfolioAuth} from '../Components/firebase'

function RegisterPage() {
    const history = useHistory()

    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const handleRegisterForm = e=>{
        e.preventDefault()
        // Firebase Registration
        PortfolioAuth.createUserWithEmailAndPassword(email,password).then((res)=>{
            console.log(res)
            alert("Sign up succesfull")
            history.push('/login')
            history.push('/form')

        }).catch((err)=>{
            alert(err.message)
            console.log(err)

        })
    }

    return (
        <div className = "registerpage">
            <div className = "registerpage_conatiner">
                {/* RegisterationPage */}
                <div className = "registerpage_header">
                    <span>{}</span><h2>Register</h2>
                </div>
                <hr/>
                <div className = "registerpage_body">
                    <form>
                        <div className = "input_block">
                            <label>User Name</label>
                            <input
                            type = "text"
                            name =  "username"
                            id = "username"
                            value = {username}
                            onChange = {e=>setUsername(e.target.value)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>Email Address</label>
                            <input
                            type = "email"
                            name =  "email"
                            id = "email"
                            value = {email}
                            onChange = {e=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className = "input_block">
                            <label>password</label>
                            <input
                            type = "text"
                            name =  "password"
                            id = "password"
                            value = {password}
                            onChange = {e=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className = "registration_submit_btn">
                            <button 
                            style ={{backgroundColor:"orange",cursor:"pointer"
                            ,border:"1px solid black",outline:"none",borderRadius:"3px",
                            boxShadow:"0px 1px 1px 0px rgba(0, 0, 0, 0.5)"}}
                            type = "button" onClick = {(e)=>handleRegisterForm(e)}>Register</button>
                        </div>
                    </form>
                </div>
                <div className = "registerpage_footer" >
                    <p onClick = {()=>history.push("/login")}>Already registered ? Click here to Login!</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
