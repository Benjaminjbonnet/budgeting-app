import React, { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Reimbursements from './Components/Reimbursements';
import Landing from './Components/Landing';
import LoginProvider from './Components/LoginProvider';

function App() {
const [isLoggedIn, setIsLoggedIn]=useState(false);

function determinIftheUserIsLoggedIn (){

setIsLoggedIn(true)
}
function logout(){
  setIsLoggedIn(false)
}
  return (
    <LoginProvider>

      <div className='container-'>
        <h1 className='mt-3'>
        
        </h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Router>
              <Routes>
              <Route path='/employees' element={<Budget/> }  isLoggedIn={isLoggedIn}/>
                <Route path='/' element={<Landing/>}  determinIftheUserIsLoggedIn={ determinIftheUserIsLoggedIn} />
                <Route path='/reimbursements' element={ <Reimbursements/> } logout={logout} isLoggedIn={isLoggedIn}/>
               
              </Routes>
            </Router>
            
           
          </div>
        </div>
      </div>
    
   
    </LoginProvider>
  )
}

export default App