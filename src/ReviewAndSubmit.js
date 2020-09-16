
import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import axios from "axios";


const Claim = (props) => {

   const [claim, setClaim] = useState({});

   useEffect(() => {
      axios
         .get("http://localhost:8080/api/products")
         .then((response) => response.data)
         .then((claims) => {

            claims.map((claimData) => {
               let path = props.location.pathname;
               console.log(path.substring(7, path.length))
               if (claimData.empId === path.substring(12, path.length)) {
                  setClaim(claimData)
               }
            })
            return '';
         });
   }, []);

   return (
      <div>
         <NavBar />
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
