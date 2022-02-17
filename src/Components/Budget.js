import React from 'react'
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import "./styles.css"
function Budget () {
    const [employees,setEmployees] = useState([]);

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=10')
        .then((response) => {
            setEmployees(response.data.results);
            
        })
        .catch(error=> console.log(error))
    },[]);
    console.log(employees);
    return (
        <div className='employeewrapper'>
                     <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h4 className="text-white">Collapsed content</h4>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
      {/* Navbar buttons and links */}
  <div className="topbarLinks">
  <Link className='navicon' to="/reimbursements"> Tickets</Link>
<Link className='navicon' to="/">logout</Link>
 <Link className='navicon' to="/">Home</Link>

        </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>

</div>

          <div className="column">
            {employees.map(({index,name,email,picture,location }) => (
              <div className="post" key={index}>
                <div className="cardwrapper">
                  <div className="cardTop">
                    <div className="card-top-con">
                      <img className="cardimg" src={picture.large}></img>
                    <span className="username">{name.first}</span> <span>{name.last} </span>
                    </div>
                 
                  </div>
                  <p className="content">{}</p>
                </div>
               
                <span>{location.city}</span><span >{location.state}</span>
                      <p className="email">
                        
                        {email}</p>
              </div>
            ))}
          </div>
        </div>
      );
            }
export default Budget 