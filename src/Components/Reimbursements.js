import axios from 'axios';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import "./styles.css";
import {useEffect,useState} from 'react';
function Reimbursements() {
  const [ticketValues,setTicketValues] = useState([{
    amount:"",
    description:"",
    type:""
  }

  ])

  const handleAddFormChange=(event) =>{
            event.preventDefault();

            const fieldName = event.target.getAttribute('name');
            const fieldValue = event.target.value;

            const newFormData = { ...ticketValues};
            newFormData[fieldName] = fieldValue;

            setTicketValues(newFormData);
  }
const [reimbursements,setReimbursements] = useState([]);
useEffect(()=>{
axios.get('http://3.93.170.1:7070/reimbursements')
.then((response)=>{
    setReimbursements(response.data);
})
.catch((err)=>console.log(err))
},[]);
  let date = Date.now
  console.log(date);
function submitTicket(){


  
  axios.post('http://3.93.170.1:7070/reimbursements/newreimbursement',{
    ...ticketValues,
    status:"approved",
    amount: ticketValues.amount,
    description: ticketValues.description,
    type: ticketValues.type,
    resolvetime: "2:33"
  } )
  .then(response)
  .catch(err => console.log(err))

}

  return (
<>
<div className='reimbursementwapper'>

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

<Link className='navicon' to="/employees">Employees</Link>

        </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>

</div>
<Link className='logout' to="/">logout</Link>
<form onSubmit={submitTicket}>
    <input
        type="text"
        name="amount"
        required="required"
        placeholder='Amount'
        onChange={handleAddFormChange}
        
    />
        <input
        type="text"
        name="type"
        required="required"
        placeholder='type'
        onChange={handleAddFormChange}
        
    />
        <input
        type="text"
        name="description"
        placeholder='description'
        onChange={handleAddFormChange}
        
    />
     
    <button>Submit</button>
  </form>
<div className="column">

 <table className="table">
 <thead className="thead-dark">
   <tr>
     <th >ID</th>
     <th >TYPE</th>
     <th >AMOUNT</th>
     <th >DESCRIPTION</th>
   </tr>
 </thead>
 <tbody> 
      {reimbursements.map(({reimbursementId,amount,description,type,resolvetime})=>(
   <tr>
      <td>{reimbursementId}</td>
      <td>{amount}</td>
      <td>{description}</td>
      <td>{type}</td>
      <td>{resolvetime}</td>
      <td><button >Edit</button></td>
      <td><button >Delete</button></td>
   </tr>

  ))}
 
   </tbody> 
</table>

  
</div>
</div>
</>
  )
}

export default Reimbursements