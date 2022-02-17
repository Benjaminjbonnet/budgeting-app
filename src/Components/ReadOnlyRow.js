import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ReadOnlyRow({reimbursementId,status,amount,description,type,resolvetime, handleEditClick}) {
  return (

           <tr key={reimbursementId}  >  
      <td> {reimbursementId}</td>
      <td>{status}</td>
      <td>{amount}</td>     
   <td>{type}</td>
    <td>{description}</td>
      <td>{resolvetime}</td>
      <td><button onClick={(event)=>handleEditClick(event,reimbursementId,status,amount,description,type,resolvetime)} >Edit</button></td>
      <td><button ><FontAwesomeIcon icon="fa-regular fa-file-pen" /></button></td>
   </tr>

  )
}

export default ReadOnlyRow