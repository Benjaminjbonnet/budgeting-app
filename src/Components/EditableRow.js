import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function EditableRow({handleEditFormChange,handleEditFormSubmit,editFormData,reimbursementId,status,type,amount,
description,resolvetime}) {


  return (
 
        <tr key={reimbursementId} >
            <td>{reimbursementId}</td>
            <td>  <input type="text" 
                        required="required"
                        placeholder=""
                        name='status'
                        onChange={handleEditFormChange}
                        value={editFormData.status}
                  ></input>
            </td>
            <td>  <input type="text" 
                        required="required"
                        placeholder='Enter amount ...'
                        name='amount'
                        onChange={handleEditFormChange}
                        value={editFormData.amount}
                  ></input>
            </td>
            <td>
                <input className='editinputs'
                type="text"
                required="required"
                placeholder="Enter description ... "
                name="description"
                onChange={handleEditFormChange}
                value={editFormData.description}
                />
            </td>
            <td>
                <input className='editinputs'
                type="text"
                required="required"
                placeholder="Enter type ..."
                name='type'
                onChange={handleEditFormChange}
                value={editFormData.type}
            />
            </td>
            <td>
            
            {resolvetime}
            </td>
            <td><button onClick={(event)=>handleEditFormSubmit(event,reimbursementId)}>save</button></td>
      <td><button >cancel</button></td>
        </tr>

  )
}

export default EditableRow