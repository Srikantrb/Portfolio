import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { PortfolioAuth } from './firebase'

function ProtectedRoute({component:Component,...rest}) {
    return (
        <Route
        {...rest}
        render ={
            (props)=>{
                if(PortfolioAuth.currentUser){
                    return <Component {...props}/>
                }else{
                    return <Redirect
                    to = {{
                        pathname :'/welcome',
                        state :{
                            from :props.location
                        }
                    }}
                    
                    />
                }
            }
        }
        />

        
    )
}

export default ProtectedRoute
