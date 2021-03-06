// import React, { Component, useState, useEffect } from 'react';
import React from 'react';
import useFormValidation from './useFormValidation';
import formValidation from './formUpdationValidation';
// import {  useDispatch } from 'react-redux'

import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const UpdatePage = (props) => {

    // const claimNumber = useSelector(state => state.claim)
    // const currentUser = useSelector(state => state.currentUser)

    // const dispatch = useDispatch()
    // const [claims, setClaims] = useState([]);

    // eslint-disable-next-line react/prop-types
    const { errors, handleFormSubmit, handleClaimChange, successMsg ,claim } = useFormValidation(formValidation,props.match.params.empId);

    // const [claim, setClaim] = useState({});

    // const [claim, setClaim] = useState({
    //     claimNumber: '',
    //     claimType: '',
    //     claimPrograms: '',
    //     startDate: '',
    //     endDate: '',
    //     empName: '',
    //     empId: ''
    // });

    // const addClaim = () => {
    //     dispatch({
    //       type: "EDIT_DATA",
    //       payload: {
    //         empId: updatedUserData.empId,
    //         empName: updatedUserData.empName,
    //         claimNumber: updatedUserData.claimNumber,
    //         claimType: updatedUserData.claimType,
    //         claimPrograms: updatedUserData.claimPrograms,
    //         startDate: updatedUserData.startDate,
    //         endDate: updatedUserData.endData,
    //       },
    //     });
    //   };

//     useEffect(() => {
//         console.log(props.match.params.empId)
//         axios
//         .get("http://localhost:8080/api/products")
//         .then((response) => response.data)
//         .then((claimsList) => {

//             setClaims(claimsList);

//             claimsList.map((claimData) => {
//             if (claimData.empId == props.match.params.empId) {
//                 setClaim(claimData)
//             }
//         })
//     });
// }, []);

    return (
        <div>
            <NavBar />
            <div className="div-height"></div>
            <div className="form-group align-items-center">
                <div className="container container-fluid">
                    <h2 className="mainheader-style text-center">Update Claim Information</h2>
                    <div className="div-height"></div>
                    <form >
                        <div id="personal-pannel-edit" className="form-group">

                            <div className="updatecard-div-left">
                                <table className="table table-striped table-dark table-hover ">
                                    <tr>
                                        <td>
                                            <label htmlFor="EmployeeId">Employee Id</label>
                                        </td>
                                        <td>
                                            <input type="text" id="empId" value={claim.empId} disabled></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="EmployeeName">Employee Name</label>
                                        </td>
                                        <td>
                                            <input type="text" id="empName" value={claim.empName} disabled></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="ClaimNumber">Claim Number</label>
                                        </td>
                                        <td>
                                            <input type="text" id="claimNumber" contentEditable="true" value={claim.claimNumber} onChange={handleClaimChange} placeholder="xxx-xxx-xxx"></input>
                                            <span className="text-danger text-danger-margin">{errors.claimNumberValidateMsg}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="ClaimType">Claim Type</label>
                                        </td>
                                        <td>
                                            <select name="claimType" defaultValue={claim.claimType} onChange={handleClaimChange}>
                                                <option value="Submitted" >Submitted</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Received">Received</option>
                                                <option value="More Info Required">More Info Required</option>
                                                <option value="Pending">Denied</option>
                                                <option value="Received">Rejected</option>
                                                <option value="More Info Required">Paid</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="ClaimPrograms">Claim Program</label>
                                        </td>
                                        <td>
                                            <input type="text" value={claim.claimPrograms} id="claimPrograms" onChange={handleClaimChange} placeholder="Maximum of 20 digits" required></input>
                                            <span className="text-danger text-danger-margin">{errors.claimProgramsValidateMsg}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="StartDate">Start Date</label>
                                        </td>
                                        <td>
                                            <input type="date" value={claim.startDate} id="startDate" onChange={handleClaimChange} name="StartDate"></input>
                                            <span className="text-danger text-danger-margin">{errors.startDateValidateMsg}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label htmlFor="End Date">End Date</label>
                                        </td>
                                        <td>
                                            <input type="date" value={claim.endDate} id="endDate" onChange={handleClaimChange} name="EndDate"></input>
                                            <span className="text-danger text-danger-margin">{errors.endDateValidateMsg}</span>
                                        </td>
                                    </tr>
                                </table>
                                < Link className="nav-link" to={`/reviewPage/${claim.empId}`} >
                                    <button type="button" className="update-button text-center btn btn-primary" onClick={handleFormSubmit}>UPDATE</button>
                                    {/* <button type="button" class="update-button text-center btn btn-primary" onClick={(e) => addClaim(e)} >UPDATE</button> */}
                                </Link>

                            </div>
                            <div className="div-height"></div>

                            {/* <div><button type="button" class="cancel-button">Cancel</button> */}

                            <div className="div-height"></div>
                            <span className="success update-button">{successMsg}</span>
                            {/* </div> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default UpdatePage; 