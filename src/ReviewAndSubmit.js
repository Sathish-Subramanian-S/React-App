/* eslint-disable react/prop-types */

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
               // eslint-disable-next-line react/prop-types
               if (claimData.empId === path.substring(12, path.length)) {
                  setClaim(claimData)
               }
               return '';
            })
           
         });
   }, []);

   return (
      <div>
         <NavBar />
         <table>
            <tr>
               <div>
                  <td>
                     <div className="flip-card">
                        <div className="flip-card-inner">
                           <header className="flip-card-header">Claim Summary</header>
                           <div>&nbsp;</div>
                           <div className="margin-div">
                              <div className="div-left"><label>Employee Id:</label></div>
                              <div className="label-value">{claim.empId}</div>
                           </div>
                           <div className="margin-div">
                              <div className="div-left"><label>Employee Name:</label></div>
                              <div className="label-value">{claim.empName}</div>
                           </div>
                           <div className="margin-div">
                              <div className="div-left"><label>Claim Number:</label></div>
                              <div className="label-value">{claim.claimNumber}</div>
                           </div>
                           <div className="margin-div">
                              <div className="div-left"><label>Claim Type:</label></div>
                              <div className="label-value">{claim.claimType}</div>
                           </div>
                           <div className="margin-div">
                              <div className="div-left"><label>Claim Program:</label></div>
                              <div className="label-value">{claim.claimPrograms}</div>
                           </div>
                           <div className="margin-div">
                              <div className="div-left"><label>Claim Start Date:</label></div>
                              <div className="label-value">{claim.startDate}</div>
                           </div>
                           <div className="margin-div">
                              <div className="div-left"><label>Claim End Date:</label></div>
                              <div className="label-value">{claim.endDate}</div>
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
