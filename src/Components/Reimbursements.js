import axios from 'axios';
import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import "./styles.css";
import {useEffect,useState} from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
function Reimbursements(isLoggedIn,logout) {
  const [editContactId,setEditContactId] = useState(null);
  const [ticketValues,setTicketValues] = useState([{
    amount:"",
    description:"",
    type:""
  }

  ])
  let date = Date()
 
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
 

function submitTicket(){


  
  axios.post('http://3.93.170.1:7070/reimbursements/newreimbursement',{
    ...ticketValues,
    status:"approved",
    amount: ticketValues.amount,
    description: ticketValues.description,
    type: ticketValues.type,
    resolvetime: date
  } )
  .then(response => console.log(response))
  .catch(err => console.log(err))
  window.location.reload(true);
}
const [editFormData, setEditFormData] =useState({
  reimbursementId:"",
  status:"",
  amount:"",
  description:"",
  type:"",
  resolvetime:""
});
const handleEditFormChange = (event) =>{
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = {...editFormData};
  newFormData[fieldName] = fieldValue;
  setEditFormData(newFormData);
}
const handleEditFormSubmit= (event,reimbursementId) =>{
 event.preventDefault();
  axios.put("http://3.93.170.1:7070/update",{
    ...editFormData,
    reimbursementId:reimbursementId,
    status:editFormData.status,
    amount:editFormData.amount,
    description:editFormData.description,
    type:editFormData.type,
    resolvetime:date
    
  }).then(response=> console.log(response))
  .catch(err => console.log(err))
  window.location.reload(true);
}
const handleEditClick=(event, reimbursementId,status,amount,type,description,resolvetime)=>{
  event.preventDefault();
  setEditContactId(reimbursementId)

  const formValues = {
    
    status:status,
    amount: amount,
    description:description,
    type:type,
    resolvetime:resolvetime
  }
    setEditFormData(formValues);
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
<Link className='navicon' to="/" onClick={logout}>logout</Link>
        </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>

</div>

<section className="form">
<form  onSubmit={submitTicket} className="container py-5 h-100">
  <div className="">
  <div className='form-group'>
    <input className="form-control" id="exampleFormControlTextarea1"
        type="text"
        name="status"
        required="required"
        placeholder='status'
        onChange={handleAddFormChange}
        
    /> </div>
  <div className='form-group'>
    <input className="form-control" id="exampleFormControlTextarea1"
        type="text"
        name="amount"
        required="required"
        placeholder='Amount'
        onChange={handleAddFormChange}
        
    /> </div>
    <div className='form-group'>
        <input className="form-control" id="exampleFormControlTextarea1"
        type="text"
        name="type"
        required="required"
        placeholder='type'
        onChange={handleAddFormChange}
        
    /> </div>
    <div className='form-group'>
        <input className="form-control" id="exampleFormControlTextarea1" rows="4"
        type="text"
        name="description"
        placeholder='description'
        onChange={handleAddFormChange}
        
    /></div>
     
    <button className='btn btn-primary btn-block' >Submit</button>
   </div>
  </form>
  </section>
<div className="column">

 <table className="table table-striped">
 <thead className="thead-dark">
   <tr>
     <th >ID</th>
     <th>STATUS</th>
     <th >AMOUNT</th>
     <th >DESCRIPTION</th>
     
     <th>TIME</th>
   </tr>
 </thead>
 <tbody> 
      {reimbursements.map(({reimbursementId,status,amount,description,type,resolvetime})=>(
          <>
          {editContactId === reimbursementId   ? ( 
          <EditableRow editFormData={editFormData} handleEditFormSubmit={handleEditFormSubmit} handleEditFormChange={handleEditFormChange} reimbursementId={reimbursementId} />
          ) : (
              <ReadOnlyRow reimbursementId={reimbursementId} status={status} amount={amount} description={description}
          type={type} resolvetime={resolvetime} handleEditClick={handleEditClick} />
          )}
         
          
      

          </>
         
  ))}
 
   </tbody> 
</table>

  
</div>
</div>
</>
  )
}

export default Reimbursements