import React, { Component } from 'react';
import './Summary.css';

const Summary = () => {


    return (

<div>
<div>
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
                        <div class="label-value">861309</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Employee Name:</label></div>
                        <div class="label-value">Sathish S</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Number:</label></div>
                        <div class="label-value">123-456-789</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim Type:</label></div>
                        <div class="label-value">Submitted</div>
                     </div>
                      <div class="margin-div">
                        <div class="div-left"><label>Claim Program:</label></div>
                        <div class="label-value">Family Care Leave (80 Hours),Federal FML (30 Hours)</div>
                     </div>
                      <div class="margin-div">
                        <div class="div-left"><label>Claim Start Date:</label></div>
                        <div class="label-value">01/01/2018</div>
                     </div>
                     <div class="margin-div">
                        <div class="div-left"><label>Claim End Date:</label></div>
                        <div class="label-value">31/12/2021</div>
                     </div>
                     <div>&nbsp;</div>
                     <div>
                        <div></div>
                        <div class="div-right"><a href="/updateClaimSummary">Update Claim Details</a></div>
                     </div>
                  </div>
               </div>
            </td>
         </div>
      </tr>
   </table>
</div>
</div>

    );

};
export default Summary; 