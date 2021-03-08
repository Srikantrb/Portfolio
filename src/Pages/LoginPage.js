import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import './LoginPage.css'
import {PortfolioAuth} from '../Components/firebase'

function LoginPage() {
    const history = useHistory()
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const handleLoginForm = e=>{
        e.preventDefault()
        // Firebase Login
        PortfolioAuth
        .signInWithEmailAndPassword(email,password)
        .then((res)=>{
            console.log(res)
            alert("Sign in succesful")
            history.push('/welcome')
        })
        .catch((err)=>{
            console.log(err)
            alert(err.message)
        })

    }




    return (
        <div className = "loginpage">
            <div className="loginpage_conatiner">
            <div className = "loginpage_header">
                    <h2>Login</h2>
                </div>
                <hr/>
                <div className = "loginpage_body">
                    <form>
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
                        <div className = "loginpage_submit_btn">
                            <button 
                            style ={{backgroundColor:"orange",cursor:"pointer"
                            ,border:"1px solid black",outline:"none",borderRadius:"3px",
                            boxShadow:"0px 1px 1px 0px rgba(0, 0, 0, 0.5)"}}
                            type = "button" onClick = {(e)=>handleLoginForm(e)}>Login</button>
                        </div>
                    </form>
                </div>
                <div className = "loginpage_footer">
                    <p onClick = {()=>history.push("/register")}
                    style = {{cursor:"pointer"}}
                    >Not a member ? Click here to Register!</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
