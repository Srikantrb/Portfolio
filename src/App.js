import React,{useState} from 'react'
import './App.css';
import Form from './Pages/forms/Form';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';
import PortfolioPage from './Pages/PortfolioPage';
import RegisterPage from './Pages/RegisterPage';
import SpringTest from './Templates/SpringTest';

function App() {
  const [page,setPage] = useState(false);
  const btnclickhandler = ()=>{
    setPage(true);
  }
  
  return (
    <div className="app">
      {/* <h1>Welcome</h1> */}
      {/* <HomePage/> */}
      {/* <PortfolioPage/> */}
      {
        !page ? (<HomePage btnhandler = {()=>btnclickhandler()}/>) 
        : (<PortfolioPage/>)
      }
      {/* <RegisterPage/> */}
      {/* <LoginPage/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
