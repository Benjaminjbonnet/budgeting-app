import axios from 'axios'
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'




function Landing(isLoggedIn,setIsLoggedIn) {
  const [employee,setEmployee] = useState([]);
    const [loginValues, setLoginValues]= useState({
      username:'',
      passowrd:''
    });
    let navigate = useNavigate();
      const handleUsernameChange = (event) => setLoginValues({ ...loginValues, username: event.target.value });
      const handlePasswordChange = (event) => setLoginValues({ ...loginValues, passowrd: event.target.value });

function login(){
  axios.post('http://3.93.170.1:7070/login',{
    ...setLoginValues,
    username: loginValues.username,
    password: loginValues.passowrd
  }).then(response =>{
    setEmployee(response.data);
    verifyUser(response.data);
    
  })
  

 function verifyUser(response){
   for(let i =0;i<response.length;i++){
       if (response[i].password == loginValues.passowrd){
         setIsLoggedIn('true')
        navigate('/employees');
       } 
   }
  
}

}



  return (
    //   Background Image
    <div className='backgroundlanding'>
        {/* This is the
        nave back container */}
           <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
    
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
     
 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>

</div>
{/* End of navbar container */}
<section className="h-100 gradient-form">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-5">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                 
                  <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="username" id="form2Example11" className="form-control" placeholder="Username " onChange={handleUsernameChange} value={loginValues.username}/>
                 
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example22" className="form-control"  onChange={handlePasswordChange} value={loginValues.passowrd}/>
               
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    {/* Login button */}
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={login}>Log in</button>
                   
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
           
         
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Landing