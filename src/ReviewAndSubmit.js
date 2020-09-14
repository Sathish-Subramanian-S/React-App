
import React, { Component, useState, useEffect } from 'react';
// import './Summary.css';
import useFormValidation from './useFormValidation';
import formValidation from './formUpdationValidation';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector, useDispatch } from 'react-redux'
import changeEvent from './ActionType';
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import axios from "axios";


const Claim = (props) => {

   const { errors, handleFormSubmit,  handleClaimChange, successMsg  } = useFormValidation(formValidation,props.match.params.empId);

// let {claim} = props;

const [claim, setClaim] = useState({});
const [claims, setClaims] = useState([]);

useEffect(() => {
   console.log('UseEffect');
   axios
       .get("http://localhost:8080/api/products")
       .then((response) => response.data)
       .then((claims) => {

           setClaims(claims);
           claims.map((claimData) => {
              let path= props.location.pathname;
              console.log(path.substring(7, path.length))
               if (claimData.empId == path.substring(12, path.length)) {
                   setClaim(claimData)
               }
           })
       });
}, []);

  return (
     <div>
        <NavBar/>
    <table>
      <tr>
         <div>
            <td>
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <header class="flip-card-header">Claim Summary</header>
                     <div>&nbsp;</div>
                     <div class="margin-div">
                        <div class="div-left"><label>Employee Id:</label></div>
                        <div class="label-value">{claim.empId}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Employee Name:</label></div>
                        <div class="label-value">{claim.empName}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Number:</label></div>
                        <div class="label-value">{claim.claimNumber}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Type:</label></div>
                        <div class="label-value">{claim.claimType}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Program:</label></div>
                        <div class="label-value">{claim.claimPrograms}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Start Date:</label></div>
                        <div class="label-value">{claim.startDate}</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim End Date:</label></div>
                        <div class="label-value">{claim.endDate}</div>
                     </div>
                     <div>&nbsp;</div>
                     <div>
                        <div></div>
                        {/* <div class="div-right"><a href='/updateClaimSummary'>Update Claim Details</a></div> */}
                     </div>
                  </div>
               </div>
            </td>
         </div>
      </tr>
 </table>
 </div>
  );
};

export default Claim;
