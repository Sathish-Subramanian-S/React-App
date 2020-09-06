import React, { Component } from 'react';
import './Summary.css';
import useFormValidation from './useFormValidation';
import formValidation from './formUpdationValidation';


const UpdatePage = () => {

    const {errors,handleSubmit,handleFormChange,handleFormSubmit,handleChange,userData,updatedUserData}=useFormValidation(formValidation);


    return (
    <div>
        <div class="update-card">
           <h2 class="mainheader-style">Update Claim Information</h2>
{/*            
           <hr>
            "Make any changes needed for your claim. You'll be able to review your changes before submitting"
            "All fields are required unless noted"
           </hr> */}
       
           <form>
              <div id="personal-pannel-edit" class="show-pannel">
                 
                <div class="updatecard-div-left">
                    <table>
                        <tr>
                            <td>
                                <label for="EmployeeId">Employee Id</label>
                            </td>
                            <td>
                            <input type="text" id="empId" value="861309" disabled></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="EmployeeName">Employee Name</label>
                            </td>
                            <td>
                                <input type="text" id="empName" value="Sathish S" disabled></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="ClaimNumber">Claim Number</label>
                            </td>
                            <td>
                                <input type="text" id="claimNumber" onChange={handleFormChange} placeholder="xxx-xxx-xxx"></input>
                                <span className="text-danger">{errors.claimNumberValidateMsg}</span>
                            </td>
                            </tr>
                        <tr>
                            <td>
                                <label for="ClaimType">Claim Type</label>
                            </td>
                            <td>
                                <select name="claimType">
                                    <option value="“Submitted”">Submitted</option>
                                    <option value="“Pending”">Pending</option>
                                    <option value="”Received”">Received</option>
                                    <option value="More Info Required">More Info Required</option>
                                    <option value="“Pending”">Denied</option>
                                    <option value="”Received”">Rejected</option>
                                    <option value="More Info Required">Paid</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="ClaimPrograms">Claim Program</label>
                            </td>
                            <td>
                                <input type="text" id="claimPrograms" onChange={handleFormChange} placeholder="Maximum of 20 digits" required></input>
                                <span className="text-danger">{errors.claimProgramsValidateMsg}</span> 
                            </td>
                        </tr> 
                        <tr>
                            <td>
                                <label for="StartDate">Start Date</label>
                            </td>
                            <td>
                                <input type="date" id="startDate" onChange={handleFormChange} name="StartDate"></input>
                                <span className="text-danger">{errors.startDateValidateMsg}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="End Date">End Date</label>
                            </td>
                            <td>
                                <input type="date" id="endDate" onChange={handleFormChange}  name="EndDate"></input>
                                <span className="text-danger">{errors.endDateValidateMsg}</span>
                                {/* <p id="endDateValidateMsg"></p> */}
                            </td>
                        </tr>
                    </table>
                 </div>
                 <div class="div-height"></div>
                 <div><button type="button" class="cancel-button">Cancel</button>
                 <button type="button" class="next-button" onClick={handleFormSubmit}>Next</button></div>
              </div>
           </form>
        </div>
     </div>
    );
  
};
export default UpdatePage; 