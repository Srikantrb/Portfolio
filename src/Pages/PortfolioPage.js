import React, { useEffect, useState } from 'react'
import SideNavbar from '../Components/SideNavbar'
import AchievementsPage from './AchievementsPage'
import CertificatesPage from './CertificatesPage'
import EducationPage from './EducationPage'
import './PortfolioPage.css'
import ProjectsPage from './ProjectsPage'
import SkillsPage from './SkillsPage'
import WelcomePage from './WelcomePage'
import {BrowserRouter as Router,Switch,Route,HashRouter} from 'react-router-dom'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import Form from './forms/Form'
import ProtectedRoute from '../Components/ProtectedRoute'
import PageNotFound from './PageNotFound'
import axios from 'axios'

function PortfolioPage(props) {
 
    const pagehandler = e=>{
        props.pagehandler()
    }
    
    
    return (
        <HashRouter>
            <div className = "portfoliopage">
                {/* <h1>PortfolioPage</h1> */}
                <div className = "warnmsg" style = {{color:"red"}}>"This Page Can only be Opened on Desktops"</div>
                <div className = "portfoliopage_container">
                    {/* SideNav bar -- contains sections of resume */}
                    {/* <SideNavbar pagehandler = {pagehandler}/> */}
                    
                    {/* Welcomepage -- renders different components in the same place*/}
                    {/* <WelcomePage/> */}
                    {/* Education -- List details of education */}
                    <div className = "portfolioinfo_container">
                        {/* <EducationPage/> */}
                        {/* <WelcomePage/> */}
                        {/* <SkillsPage/> */}
                        {/* <CertificatesPage/> */}
                        {/* <AchievementsPage/> */}
                        {/* <ProjectsPage/> */}
                        <Switch>
                            <Route exact path = "/welcome">
                                <SideNavbar/>
                                <WelcomePage/>
                            </Route>
                            <Route exact path = "/education">
                                <SideNavbar/>
                                <EducationPage/>
                            </Route>
                            <Route exact path = "/skills">
                                <SideNavbar/>
                                <SkillsPage/>
                            </Route>
                            <Route exact path = "/projects">
                                <SideNavbar/>
                                <ProjectsPage/>
                            </Route>
                            <Route exact path = "/certificates">
                                <SideNavbar/>
                                <CertificatesPage/>
                            </Route>
                            <Route exact path = "/achievements">
                                <SideNavbar/>
                                <AchievementsPage/>
                            </Route>
                            <Route exact path = "/register">
                                <RegisterPage/>
                            </Route>
                            <Route exact path = "/login">
                                <LoginPage/>
                            </Route>
                            <ProtectedRoute exact path = "/form" component = {Form}>
                            </ProtectedRoute>
                            <Route exact path = "/">
                                <SideNavbar/>
                                <WelcomePage/>
                            </Route>
                            <Route exact path = "*" component = {PageNotFound}/>
                        </Switch>
                        {/* <SkillsPage/> */}
                    </div>
                </div>

            </div>
        </HashRouter>
        
    )
}

export default PortfolioPage
